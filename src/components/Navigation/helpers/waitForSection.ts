export const waitForSection = (section: string) => {
  // jeśli już jesteśmy na home – nie trzeba czekać
  if (window.location.pathname === '/') {
    const el = document.getElementById(section);
    el?.scrollIntoView({ behavior: 'smooth' });
    return;
  }

  const interval = setInterval(() => {
    const el = document.getElementById(section);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
      clearInterval(interval);
    }
  }, 50);
};
