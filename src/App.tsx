import React, { useState, useEffect } from 'react';
import { HomePage } from './components/HomePage';
import { GuestLecturesPage } from './components/GuestLecturesPage';
import { ContactPage } from './components/ContactPage';
import { NoticePage } from './components/NoticePage';
import { FeeStructurePage } from './components/FeeStructurePage';
import { AboutUsPage } from './components/AboutUsPage';
import { FeedbackPage } from './components/FeedbackPage';

function getRoutePath(): string {
  if (typeof window === 'undefined') return '/';
  const pathname = window.location.pathname.replace(/\/$/, '') || '/';
  if (pathname === '/feedback' || pathname === '/feedbacks' || pathname === '/infrastructure') return '/feedback';
  if (pathname === '/about' || pathname === '/about-us') return '/about';
  if (pathname === '/guest-lectures') return '/guest-lectures';
  if (pathname === '/contact') return '/contact';
  if (pathname === '/notice') return '/notice';
  if (pathname === '/fee-structure' || pathname === '/fees-structure') return '/fee-structure';
  if (
    window.location.hash.startsWith('#/feedback') ||
    window.location.hash.startsWith('#/feedbacks') ||
    window.location.hash === '#feedback' ||
    window.location.hash === '#feedbacks' ||
    window.location.hash.startsWith('#/infrastructure') ||
    window.location.hash === '#infrastructure-page'
  ) {
    return '/feedback';
  }
  if (
    window.location.hash.startsWith('#/about') ||
    window.location.hash.startsWith('#/about-us') ||
    window.location.hash === '#about-page'
  ) {
    return '/about';
  }
  if (window.location.hash.startsWith('#/guest-lectures') || window.location.hash.startsWith('#guest-lectures')) {
    return '/guest-lectures';
  }
  if (window.location.hash.startsWith('#/contact') || window.location.hash === '#contact-page') {
    return '/contact';
  }
  if (window.location.hash.startsWith('#/notice') || window.location.hash === '#notice-page') {
    return '/notice';
  }
  if (
    window.location.hash.startsWith('#/fee-structure') ||
    window.location.hash.startsWith('#/fees-structure') ||
    window.location.hash === '#fee-structure' ||
    window.location.hash === '#fees-structure'
  ) {
    return '/fee-structure';
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

  if (currentPath === '/feedback' || currentPath === '/feedbacks' || currentPath === '/infrastructure') {
    return <FeedbackPage />;
  }

  if (currentPath === '/about' || currentPath === '/about-us') {
    return <AboutUsPage />;
  }

  if (currentPath === '/guest-lectures') {
    return <GuestLecturesPage />;
  }

  if (currentPath === '/contact') {
    return <ContactPage />;
  }

  if (currentPath === '/notice') {
    return <NoticePage />;
  }

  if (currentPath === '/fee-structure' || currentPath === '/fees-structure') {
    return <FeeStructurePage />;
  }

  return <HomePage />;
}


