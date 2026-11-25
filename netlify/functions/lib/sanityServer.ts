import crypto from 'node:crypto';
import { createClient, type SanityClient } from '@sanity/client';

const DEFAULT_API_VERSION = '2025-02-19';

export interface ServerSanityClientResult {
  client: SanityClient | null;
  configured: boolean;
}

/**
 * Creates a server-side authenticated Sanity write client strictly from runtime
 * environment variables (`SANITY_PROJECT_ID`, `SANITY_DATASET`, `SANITY_WRITE_TOKEN`).
 *
 * Never hardcodes project IDs, datasets, or tokens and never logs secret values.
 */
export function getServerSanityClient(contextLabel = 'sanity-server'): ServerSanityClientResult {
  const projectId = process.env.SANITY_PROJECT_ID?.trim();
  const dataset = process.env.SANITY_DATASET?.trim();
  const token = process.env.SANITY_WRITE_TOKEN?.trim();
  const apiVersion = process.env.SANITY_API_VERSION?.trim() || DEFAULT_API_VERSION;

  if (!projectId || !dataset || !token) {
    console.error(`[${contextLabel}] Missing required server-side Sanity configuration.`);
    return { client: null, configured: false };
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion,
    token,
    useCdn: false,
  });

  return { client, configured: true };
}

/**
 * Constant-time bearer token verification against a server-side secret env var.
 * Uses SHA-256 digests so timingSafeEqual compares fixed-length buffers safely.
 */
export function verifyBearerSecret(
  request: Request,
  secretEnvVar: string
): { authorized: boolean; configured: boolean } {
  const expectedSecret = process.env[secretEnvVar]?.trim();
  if (!expectedSecret) {
    return { authorized: false, configured: false };
  }

  const authHeader = request.headers.get('authorization') || '';
  const match = /^Bearer\s+(.+)$/i.exec(authHeader.trim());
  if (!match) {
    return { authorized: false, configured: true };
  }

  const providedToken = match[1].trim();
  if (!providedToken) {
    return { authorized: false, configured: true };
  }

  const providedHash = crypto.createHash('sha256').update(providedToken).digest();
  const expectedHash = crypto.createHash('sha256').update(expectedSecret).digest();

  return {
    authorized: crypto.timingSafeEqual(providedHash, expectedHash),
    configured: true,
  };
}

/**
 * Builds a JSON HTTP Response with `Cache-Control: no-store` and safe content headers.
 */
export function jsonResponse(
  body: Record<string, unknown>,
  status: number,
  extraHeaders?: Record<string, string>
): Response {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      'Content-Type': 'application/json; charset=utf-8',
      'Cache-Control': 'no-store',
      ...extraHeaders,
    },
  });
}
