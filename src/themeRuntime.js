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

let projectPlaybackInitialization;
function initializeProjectVideoPlayback() {
  if (projectPlaybackInitialization) return projectPlaybackInitialization;
  projectPlaybackInitialization = (async () => {
    const frames = [...document.querySelectorAll('iframe.elementor-video-iframe')]
      .filter(frame => new URL(frame.src).origin === 'https://player.vimeo.com');
    if (frames.length < 2) return;
    if (!window.Vimeo?.Player) await loadScript('https://player.vimeo.com/api/player.js');
    const playing = new Set();
    frames.forEach(frame => {
      const player = new window.Vimeo.Player(frame);
      player.on('play', () => {
        // Pause only players that actually started; lazy embeds must not receive
        // a queued pause that could interrupt their first user-initiated play.
        playing.forEach(other => {
          if (other !== player) other.pause().catch(() => {});
        });
        playing.add(player);
      });
      player.on('pause', () => playing.delete(player));
      player.on('ended', () => playing.delete(player));
    });
  })();
  return projectPlaybackInitialization;
}

export function initializeTheme(scripts) {
  if (initialization) return initialization;
  initialization = (async () => {
    document.querySelectorAll('.e-con').forEach(el => el.classList.add('e-lazyloaded'));
    document.querySelectorAll('iframe').forEach(el => { el.loading = 'lazy'; const url = new URL(el.src); url.searchParams.set('autoplay', '0'); if (url.origin === 'https://player.vimeo.com') url.searchParams.set('autopause', '1'); if (el.src !== url.href) el.src = url.href; });
    document.querySelectorAll('a[href^="tel:"]').forEach(el => { el.href = 'tel:+919082054388'; });
    // Video coordination is independent of theme animation initialization.
    void initializeProjectVideoPlayback().catch(error => console.warn('Project video coordination unavailable:', error));
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
