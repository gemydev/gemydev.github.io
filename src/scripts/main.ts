// Tells the inline fallback in Base.astro that scroll-reveal is running.
document.documentElement.dataset.ready = 'true';

const root = document.documentElement;

// Theme toggle (dark is the default)
const themeBtn = document.querySelector<HTMLButtonElement>('[data-theme-toggle]');
const syncThemeLabel = () => {
  const dark = root.dataset.theme !== 'light';
  themeBtn?.setAttribute('aria-label', dark ? 'Switch to light theme' : 'Switch to dark theme');
  document.querySelector('meta[name="theme-color"]')?.setAttribute('content', dark ? '#0a0b0e' : '#fafafa');
};
syncThemeLabel();
themeBtn?.addEventListener('click', () => {
  const next = root.dataset.theme === 'light' ? 'dark' : 'light';
  root.dataset.theme = next;
  try {
    localStorage.setItem('theme', next);
  } catch {
    // Storage blocked (private mode etc.) — the theme still applies for this visit.
  }
  syncThemeLabel();
});

// Mobile menu
const menu = document.querySelector<HTMLElement>('[data-menu]');
const menuBtn = document.querySelector<HTMLButtonElement>('[data-menu-toggle]');
const setMenu = (open: boolean) => {
  if (!menu || !menuBtn) return;
  menu.classList.toggle('is-open', open);
  menuBtn.setAttribute('aria-expanded', String(open));
  menuBtn.setAttribute('aria-label', open ? 'Close menu' : 'Open menu');
  document.body.classList.toggle('menu-open', open);
};
menuBtn?.addEventListener('click', () => setMenu(!menu?.classList.contains('is-open')));
menu?.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setMenu(false)));
document.querySelector('[data-menu-backdrop]')?.addEventListener('click', () => setMenu(false));
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && menu?.classList.contains('is-open')) {
    setMenu(false);
    menuBtn?.focus();
  }
});
matchMedia('(min-width: 861px)').addEventListener('change', (e) => {
  if (e.matches) setMenu(false);
});

// Nav border once scrolled
const nav = document.querySelector<HTMLElement>('[data-nav]');
const onScroll = () => nav?.classList.toggle('is-scrolled', window.scrollY > 8);
onScroll();
window.addEventListener('scroll', onScroll, { passive: true });

// Scroll effects: active nav link + reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window) {
  const navLinks = [...document.querySelectorAll<HTMLAnchorElement>('[data-navlink]')];
  const spy = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        // Highlights sit under the "Projects" nav item
        const id = entry.target.id === 'highlights' ? 'projects' : entry.target.id;
        navLinks.forEach((a) => {
          const active = a.hash === `#${id}`;
          a.classList.toggle('is-active', active);
          if (active) a.setAttribute('aria-current', 'true');
          else a.removeAttribute('aria-current');
        });
      });
    },
    { rootMargin: '-45% 0px -50% 0px' },
  );
  document.querySelectorAll('main section[id]').forEach((s) => spy.observe(s));

  const reveal = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        entry.target.classList.add('is-visible');
        reveal.unobserve(entry.target);
      });
    },
    { rootMargin: '0px 0px -6% 0px', threshold: 0.05 },
  );
  revealEls.forEach((el) => reveal.observe(el));
} else {
  revealEls.forEach((el) => el.classList.add('is-visible'));
}

// Code window tabs (WAI-ARIA tabs pattern: click, arrow keys, Home/End)
const tabList = document.querySelector<HTMLElement>('[data-code-tabs]');
if (tabList) {
  const tabs = [...tabList.querySelectorAll<HTMLButtonElement>('[role="tab"]')];
  const pathLabel = document.querySelector<HTMLElement>('[data-code-path]');
  const select = (tab: HTMLButtonElement, focus = false) => {
    tabs.forEach((t) => {
      const active = t === tab;
      t.classList.toggle('is-active', active);
      t.setAttribute('aria-selected', String(active));
      t.tabIndex = active ? 0 : -1;
      const panel = document.getElementById(t.getAttribute('aria-controls') ?? '');
      if (panel) {
        panel.hidden = !active;
        if (active && pathLabel) pathLabel.textContent = panel.dataset.path ?? '';
      }
    });
    if (focus) tab.focus();
  };
  tabs.forEach((tab) => tab.addEventListener('click', () => select(tab)));
  tabList.addEventListener('keydown', (e) => {
    const i = tabs.indexOf(document.activeElement as HTMLButtonElement);
    if (i < 0) return;
    const next =
      e.key === 'ArrowRight' ? tabs[(i + 1) % tabs.length]
      : e.key === 'ArrowLeft' ? tabs[(i - 1 + tabs.length) % tabs.length]
      : e.key === 'Home' ? tabs[0]
      : e.key === 'End' ? tabs[tabs.length - 1]
      : undefined;
    if (next) {
      e.preventDefault();
      select(next, true);
    }
  });
}

// Copy email
const copyBtn = document.querySelector<HTMLButtonElement>('[data-copy]');
const copyLabel = copyBtn?.querySelector<HTMLElement>('[data-copy-label]');
const copyStatus = document.querySelector<HTMLElement>('[data-copy-status]');
let copyTimer: number | undefined;
copyBtn?.addEventListener('click', async () => {
  const email = copyBtn.dataset.copy ?? '';
  let message: string;
  try {
    if (!navigator.clipboard) throw new Error('Clipboard API unavailable');
    await navigator.clipboard.writeText(email);
    message = 'Copied';
    if (copyStatus) copyStatus.textContent = 'Email address copied to clipboard';
  } catch {
    // Fall back to showing the address so it can be selected manually
    message = email;
    if (copyStatus) copyStatus.textContent = `Copy failed. Email address: ${email}`;
  }
  if (copyLabel) copyLabel.textContent = message;
  window.clearTimeout(copyTimer);
  copyTimer = window.setTimeout(() => {
    if (copyLabel) copyLabel.textContent = 'Copy email';
  }, 2200);
});
