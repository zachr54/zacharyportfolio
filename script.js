// Small enhancements shared by every page. The site works without this file;
// it only adds the mobile menu, scroll animations, lift bars and copy buttons.
document.documentElement.classList.remove('no-js');

document.addEventListener('DOMContentLoaded', () => {
    const body = document.body;

    // Mobile menu
    const menuBtn = document.querySelector('.menu-btn');
    if (menuBtn) {
        menuBtn.addEventListener('click', () => {
            const open = body.classList.toggle('menu-open');
            menuBtn.setAttribute('aria-expanded', String(open));
        });
        document.querySelectorAll('.nav a').forEach(a =>
            a.addEventListener('click', () => body.classList.remove('menu-open')));
        document.addEventListener('keydown', e => {
            if (e.key === 'Escape') body.classList.remove('menu-open');
        });
    }

    // Header border once the page scrolls
    const header = document.querySelector('.site-header');
    const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Mark the current page in the nav
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(a => {
        if (a.getAttribute('href') === page) a.classList.add('active');
    });

    // Fade sections in as they scroll into view
    const reveal = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
            if (!entry.isIntersecting) return;
            entry.target.classList.add('in');
            entry.target.querySelectorAll('.lift-fill').forEach(bar => {
                bar.style.width = bar.dataset.pct + '%';
            });
            entry.target.querySelectorAll('[data-count]').forEach(countUp);
            obs.unobserve(entry.target);
        });
    }, { rootMargin: '0px 0px -60px 0px' });
    document.querySelectorAll('.reveal').forEach(el => reveal.observe(el));

    // Count a number up from zero, e.g. <span data-count="532.5">532.5</span>
    function countUp(el) {
        const target = parseFloat(el.dataset.count);
        const decimals = (el.dataset.count.split('.')[1] || '').length;
        if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
        const start = performance.now();
        const duration = 1400;
        const step = now => {
            const t = Math.min((now - start) / duration, 1);
            const eased = 1 - Math.pow(1 - t, 3);
            el.textContent = (target * eased).toFixed(decimals);
            if (t < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
    }

    // Copy buttons on code blocks
    document.querySelectorAll('.code-block').forEach(block => {
        const btn = block.querySelector('.copy-btn');
        const code = block.querySelector('code');
        if (!btn || !code || !navigator.clipboard) { if (btn) btn.remove(); return; }
        btn.addEventListener('click', () => {
            navigator.clipboard.writeText(code.innerText).then(() => {
                btn.textContent = 'Copied';
                setTimeout(() => { btn.textContent = 'Copy'; }, 1600);
            });
        });
    });

    // Print button on the résumé page
    document.querySelectorAll('[data-print]').forEach(btn =>
        btn.addEventListener('click', () => window.print()));
});
