# Notice Page (`/notice`) — Table, Pagination & Future Sanity CMS Specification

## 1. Scope
Implement a new `/notice` route in the existing Astro + Tailwind website for New Lucknow City Private ITI.

The page displays the same notices-table pattern already used on the homepage, but provides pagination so users can browse older notices. Do not implement Sanity configuration or live CMS fetching in this task. Prepare a clean data boundary so Sanity can be connected later without replacing the table or pagination logic.

Reference design:
https://www.figma.com/design/CyE9VdnOdmvx5U8BBBjFsX/ITI-2?node-id=128-8350&t=9v6oq48GPr3zOtZr-4

Also use the supplied Notice-page design PNG and the companion Visual & Responsive Design Specification.

## 2. Required behavior
- Page size is exactly **5 notices per page**.
- Sort notices from newest to oldest by publication/issue date, using the existing homepage notice data's date field where possible.
- On initial load, page 1 shows the five most recent notices, or all notices if fewer than five.
- Pagination count is `max(1, ceil(totalNoticeCount / 5))`.
- If there are 0, 1, 2, 3, 4 or 5 notices, display only page number `1`.
- At 6–10 notices, display pages `1` and `2`.
- At 11–15 notices, display `1`, `2`, `3`, and so on.
- Changing page updates the rendered notice slice and active page indicator.
- Page 1 is selected by default whenever the page loads.
- If Previous/Next controls are included, disable Previous on page 1 and Next on the final page. Disabled controls must not change the current page.
- Every page-number control must work; no decorative/inert pagination.
- Even if fewer than or exactly five notices exist, page `1` remains visible and selected. Do not hide pagination when only one page exists.
- If there are 0 notices, still show page number `1` and a designed empty state (e.g. “No notices available right now.”). Do not create fake notices to fill the table.

## 3. Pagination logic
Use a single source of truth for page size and derive page count and slices from the notice collection; do not hardcode page count in markup.

Conceptual logic:
```js
const PAGE_SIZE = 5;

const sortedNotices = [...notices].sort(
  (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
);

const totalPages = Math.max(1, Math.ceil(sortedNotices.length / PAGE_SIZE));
const currentPage = /* default 1; update on user selection */;
const startIndex = (currentPage - 1) * PAGE_SIZE;
const visibleNotices = sortedNotices.slice(startIndex, startIndex + PAGE_SIZE);
```

Adapt this logic to the existing Astro setup. If all notices are known at build time, page switching can use a small client-side script or the project's existing convention. Do not introduce React/Vue or another framework just for pagination. Keep interactivity minimal.

Clamp or reset the current page if the total count shrinks so the page state cannot point to a nonexistent page. Sorting must not mutate the source array.

## 4. Notice data contract
Use the current homepage notice shape if it already meets these needs. Avoid unnecessary renaming or duplicating data. Suggested normalized type:

```ts
type Notice = {
  id: string;               // stable unique identifier
  title: string;            // visible notice title
  date: string;             // ISO date preferred: YYYY-MM-DD
  href?: string;            // destination URL, if title is a link
  attachmentUrl?: string;   // optional hosted document/PDF URL
  attachmentLabel?: string; // optional action label, e.g. "View notice"
};
```

Render only fields available in the current data. Do not render blank buttons or broken links when an optional field is absent. Keep date formatting consistent with the homepage.

Stable identity:
- Prefer a persistent CMS document ID when one is available.
- Do not use visible title alone as a unique key.
- For local fixture data, use stable IDs.

## 5. Future Sanity CMS integration — preparation only
Notices will eventually be managed and fetched from **Sanity CMS**. This is an explicit future requirement, but live Sanity configuration and fetching are outside this task.

Structure code so the data source can later switch from a local/placeholder array to a Sanity query without rewriting the view:
- Separate data acquisition from table rendering and pagination.
- Define or reuse one normalized `Notice` data contract.
- The page/component should receive normalized notices instead of tightly coupling the UI to Sanity's raw response.
- Keep sorting and slicing in a small, isolated utility or clearly separated logic.
- Use a stable identifier suitable for Sanity's `_id` in the future.
- Avoid scattering sample notice objects inside markup.
- If the repository already has a data service/repository convention, follow it. Otherwise, create a small, clearly named data-provider module that can later be replaced with a Sanity-backed provider.
- Add a concise comment marking the future integration point; do not build an abstract CMS framework.
- Do not add Sanity credentials, environment variables, API keys, dataset/schema definitions or live queries in this task unless they already exist and are specifically required for the local implementation.
- The actual Sanity schema has not been supplied. Do not assume the future date field name before the schema is reviewed.

Potential future field mapping:
- Sanity `_id` → `id`
- title field → `title`
- publication/issue date field → `date`
- notice/document URL → `href` or `attachmentUrl`

## 6. Initial data and content
- First inspect how the homepage currently obtains and renders notices. Reuse its source and data shape where appropriate.
- Ensure `/notice` renders with current repository data.
- Do not fabricate real institutional notices, dates, PDFs or URLs.
- If the current data source contains too few records to demonstrate pagination, use clearly isolated development fixtures for testing only; do not silently ship invented records as production notices.
- Do not change homepage output as a side effect of implementing pagination.

## 7. Route and implementation boundaries
- Create `/notice` following existing Astro route conventions.
- Reuse the current global layout, navbar, footer, typography, tokens and styles.
- Reuse an existing table component if suitable. If reuse would alter homepage behavior, extract a shared presentational component carefully or leave homepage code intact.
- Keep pagination small and reusable, consistent with project conventions.
- Avoid dependencies, framework changes, architectural refactors or broad global CSS changes.
- Do not modify `/guest-lectures` or unrelated routes.

## 8. Required validation
Check these cases with fixture-level/unit/manual tests as appropriate:
- 0 notices → page `1`, empty state, no fake rows.
- 1 notice → page `1`, one row.
- 5 notices → page `1`, five rows.
- 6 notices → pages `1`, `2`; page 1 has five rows, page 2 has one.
- 10 notices → pages `1`, `2`; both have five rows.
- 11 notices → pages `1`, `2`, `3`; page 3 has one.
- Verify newest-to-oldest ordering.
- Verify page controls update active styling and displayed rows.
- Verify previous/next disabled logic if those controls exist.
- Verify no click target is inert.
- Run the project's existing build/type checks.
- Validate responsive behavior using the companion visual specification.
- Confirm homepage and `/guest-lectures` have not been unintentionally changed.

## 9. Completion report
Report:
1. Files/routes/components changed.
2. Where page-size, sorting and page-count logic live.
3. How the page is prepared for a future Sanity data provider.
4. Validation completed and limitations.
5. Confirmation that homepage and `/guest-lectures` remain unchanged, unless an explicitly necessary shared-component change is documented.
