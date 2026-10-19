export function navClass(classes, href) {
  const clean = classes.replace(/\bcurrent[-\w]*\b/g, '').replace(/\s+/g, ' ').trim();
  const normalize = path => path.replace(/\/+$/, '') || '/';
  return href.startsWith('/') && normalize(href) === normalize(window.location.pathname)
    ? `${clean} current-menu-item` : clean;
}
