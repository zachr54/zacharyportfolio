// Small enhancements shared by every page. Without this file the site still
// works; it adds the mobile menu, fade-ins, certificate filters and the photo viewer.
document.documentElement.classList.add('js');

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

    // Header background once the page scrolls
    const header = document.querySelector('.site-header');
    const onScroll = () => header && header.classList.toggle('scrolled', window.scrollY > 20);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });

    // Highlight the current page in the nav
    const page = location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav a').forEach(a => {
        if (a.getAttribute('href') === page) a.classList.add('active');
    });

    // Fade sections in as they scroll into view
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in');
                    obs.unobserve(entry.target);
                }
            });
        }, { rootMargin: '0px 0px -40px 0px' });
        document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    } else {
        document.querySelectorAll('.reveal').forEach(el => el.classList.add('in'));
    }

    // Certificate filters
    const filterBtns = document.querySelectorAll('.filters button');
    filterBtns.forEach(btn => btn.addEventListener('click', () => {
        const cat = btn.dataset.filter;
        filterBtns.forEach(b => b.setAttribute('aria-pressed', String(b === btn)));
        document.querySelectorAll('.cert').forEach(c => {
            c.hidden = cat !== 'all' && c.dataset.cat !== cat;
        });
    }));

    // Photo viewer: click a certificate photo to see it full size
    const box = document.querySelector('.lightbox');
    if (box && typeof box.showModal === 'function') {
        const boxImg = box.querySelector('img');
        const boxCap = box.querySelector('p');
        document.querySelectorAll('.cert .view').forEach(btn => btn.addEventListener('click', () => {
            const slot = btn.querySelector('.slot');
            const img = btn.querySelector('img');
            if (!img || slot.classList.contains('empty')) return;
            boxImg.src = img.src;
            boxImg.alt = img.alt;
            boxCap.textContent = btn.closest('.cert').querySelector('h3').textContent;
            box.showModal();
        }));
        box.addEventListener('click', e => { if (e.target === box || e.target.closest('.close')) box.close(); });
    }

    // Print button on the resume page
    document.querySelectorAll('[data-print]').forEach(btn =>
        btn.addEventListener('click', () => window.print()));
});
