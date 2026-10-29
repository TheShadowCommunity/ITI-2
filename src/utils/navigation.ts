export function navigateTo(url: string) {
  if (typeof window === 'undefined') return;
  
  if (url.startsWith('#')) {
    // In-page hash anchor
    const el = document.getElementById(url.replace('#', ''));
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.location.hash = url;
    }
    return;
  }

  // Handle /#section from /guest-lectures
  if (url.startsWith('/#')) {
    if (window.location.pathname !== '/') {
      window.history.pushState({}, '', url);
      window.dispatchEvent(new Event('applet-navigate'));
      window.dispatchEvent(new PopStateEvent('popstate'));
      setTimeout(() => {
        const hash = url.replace('/#', '');
        const el = document.getElementById(hash);
        if (el) el.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    } else {
      const hash = url.replace('/#', '');
      const el = document.getElementById(hash);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
      return;
    }
  }

  window.history.pushState({}, '', url);
  window.dispatchEvent(new Event('applet-navigate'));
  window.dispatchEvent(new PopStateEvent('popstate'));
  window.scrollTo({ top: 0, behavior: 'instant' });
}
