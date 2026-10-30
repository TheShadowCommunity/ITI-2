import React, { useState, useEffect } from 'react';
import { HomePage } from './components/HomePage';
import { GuestLecturesPage } from './components/GuestLecturesPage';
import { ContactPage } from './components/ContactPage';

function getRoutePath(): string {
  if (typeof window === 'undefined') return '/';
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  if (pathname === '/guest-lectures') return '/guest-lectures';
  if (pathname === '/contact') return '/contact';
  if (window.location.hash.startsWith('#/guest-lectures') || window.location.hash.startsWith('#guest-lectures')) {
    return '/guest-lectures';
  }
  if (window.location.hash.startsWith('#/contact') || window.location.hash === '#contact-page') {
    return '/contact';
  }
  return pathname;
}

export default function App() {
  const [currentPath, setCurrentPath] = useState<string>(getRoutePath);

  useEffect(() => {
    const handleRouteChange = () => {
      setCurrentPath(getRoutePath());
    };

    window.addEventListener('popstate', handleRouteChange);
    window.addEventListener('hashchange', handleRouteChange);
    window.addEventListener('applet-navigate', handleRouteChange);

    return () => {
      window.removeEventListener('popstate', handleRouteChange);
      window.removeEventListener('hashchange', handleRouteChange);
      window.removeEventListener('applet-navigate', handleRouteChange);
    };
  }, []);

  if (currentPath === '/guest-lectures') {
    return <GuestLecturesPage />;
  }

  if (currentPath === '/contact') {
    return <ContactPage />;
  }

  return <HomePage />;
}
