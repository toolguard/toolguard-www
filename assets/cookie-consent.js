(function () {
  'use strict';

  var STORAGE_KEY = 'toolguard_cookies';

  // If preference already set, do nothing
  if (localStorage.getItem(STORAGE_KEY) !== null) return;

  // Banner CSS (slide-up animation)
  var style = document.createElement('style');
  style.textContent = [
    '@keyframes cookieBannerSlideUp {',
    '  from { transform: translateY(100%); opacity: 0; }',
    '  to   { transform: translateY(0);    opacity: 1; }',
    '}',
    '#cookie-banner { animation: cookieBannerSlideUp 0.35s ease-out; }',
    '#cookie-banner.hiding {',
    '  animation: cookieBannerSlideUp 0.25s ease-in reverse;',
    '  pointer-events: none;',
    '}',
    '@media (max-width: 600px) {',
    '  #cookie-banner { flex-direction: column !important; align-items: flex-start !important; }',
    '}'
  ].join('\n');
  document.head.appendChild(style);

  // Inject banner HTML
  var banner = document.createElement('div');
  banner.id = 'cookie-banner';
  banner.setAttribute('role', 'dialog');
  banner.setAttribute('aria-label', 'Cookie consent');
  banner.setAttribute('aria-live', 'polite');
  banner.style.cssText = [
    'position:fixed',
    'bottom:0',
    'left:0',
    'right:0',
    'background:#111827',
    'color:#d1d5db',
    'padding:1rem 1.5rem',
    'z-index:1000',
    'display:flex',
    'align-items:center',
    'justify-content:space-between',
    'flex-wrap:wrap',
    'gap:1rem',
    'box-shadow:0 -2px 10px rgba(0,0,0,0.3)'
  ].join(';');

  banner.innerHTML = [
    '<p style="margin:0;font-size:0.875rem;">',
    '  We use cookies to improve your experience. See our',
    '  <a href="/privacy.html" style="color:#7dd3fc;text-decoration:underline;">Privacy Policy</a>.',
    '</p>',
    '<div style="display:flex;gap:0.75rem;flex-shrink:0;">',
    '  <button id="cookie-decline"',
    '    style="padding:0.5rem 1rem;border:1px solid #6b7280;background:transparent;color:#d1d5db;border-radius:0.375rem;cursor:pointer;font-size:0.875rem;"',
    '    aria-label="Decline cookies">Decline</button>',
    '  <button id="cookie-accept"',
    '    style="padding:0.5rem 1rem;background:#0284c7;color:white;border:none;border-radius:0.375rem;cursor:pointer;font-size:0.875rem;font-weight:500;"',
    '    aria-label="Accept cookies">Accept</button>',
    '</div>'
  ].join('');

  document.body.appendChild(banner);

  function dismiss(value) {
    localStorage.setItem(STORAGE_KEY, value);
    banner.classList.add('hiding');
    setTimeout(function () {
      if (banner.parentNode) banner.parentNode.removeChild(banner);
    }, 260);
  }

  document.getElementById('cookie-accept').addEventListener('click', function () {
    dismiss('accepted');
  });

  document.getElementById('cookie-decline').addEventListener('click', function () {
    dismiss('declined');
  });
})();
