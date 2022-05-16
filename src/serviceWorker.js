export const serviceWorker = () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker
      .register('/sw.js', { scope: '/' })
      .then((reg) => console.log('registered', reg))
      .catch((error) => console.error('Service worker error', error));
  }
};
