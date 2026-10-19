// Original browser-only theme libraries retain the reference sliders and effects.
// No WordPress server, database, login, or API is needed by this frontend.
let initialization;
function loadScript(src) {
  return new Promise((resolve, reject) => {
    const script = document.createElement('script');
    script.src = src;
    script.async = false;
    script.onload = resolve;
    script.onerror = () => reject(new Error(`Could not load theme asset: ${src}`));
    document.body.append(script);
  });
}
export function initializeTheme(scripts) {
  if (initialization) return initialization;
  initialization = (async () => {
    document.querySelectorAll('.e-con').forEach(el => el.classList.add('e-lazyloaded'));
    document.querySelectorAll('iframe').forEach(el => { el.loading = 'lazy'; el.src = el.src.replace('autoplay=1', 'autoplay=0'); });
    document.querySelectorAll('a[href^="tel:"]').forEach(el => { el.href = 'tel:+919082054388'; });
    for (const script of scripts) await loadScript(script);
    // These theme libraries normally initialize at WordPress page load. React has
    // rendered the same markup by this point, so signal the completed page here.
    await new Promise(resolve => setTimeout(resolve, 100));
    document.dispatchEvent(new Event('DOMContentLiteSpeedLoaded'));
    window.dispatchEvent(new Event('load'));
    window.dispatchEvent(new Event('resize'));
    document.querySelectorAll('.preloader').forEach(el => { el.style.display = 'none'; });
  })();
  return initialization;
}
