import { useEffect, useState } from 'react';
const path = '/2026/09/06/kusum-communications-story/';
const key = 'kusum-journal-notice-dismissed';
export default function JournalNotice() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    try { if (sessionStorage.getItem(key)) return; } catch { /* Storage may be unavailable. */ }
    const timer = setTimeout(() => setVisible(true), 7000);
    return () => clearTimeout(timer);
  }, []);
  function dismiss() {
    setVisible(false);
    try { sessionStorage.setItem(key, '1'); } catch { /* Dismiss still works for this page. */ }
  }
  if (!visible) return null;
  return <aside className="kc-journal-notice" aria-label="From the Kusum journal">
    <button className="kc-notice-close" aria-label="Dismiss journal notification" onClick={dismiss}>×</button>
    <div className="kc-notice-heading"><span className="kc-live-dot" /> FROM OUR JOURNAL</div>
    <a href={path} className="kc-notice-story" onClick={dismiss}><img src="/wp-content/uploads/2026/08/IMG_0931.JPG.webp" width="62" height="78" alt="Ritu Vaidya" /><span><strong>From boardrooms to<br />255 million+ views.</strong><small>Discover the Kusum story <span aria-hidden="true">↗</span></small></span></a>
  </aside>;
}
