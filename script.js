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

    // Email links: copy the address and show a message, then let the mail app
    // open too. Many computers have no mail app set up, so a plain mailto link
    // can look like it does nothing.
    let toast, toastTimer;
    const showToast = text => {
        if (!toast) {
            toast = document.createElement('div');
            toast.className = 'toast';
            toast.setAttribute('role', 'status');
            document.body.appendChild(toast);
        }
        toast.textContent = text;
        toast.classList.add('show');
        clearTimeout(toastTimer);
        toastTimer = setTimeout(() => toast.classList.remove('show'), 2600);
    };
    const copyText = text => {
        if (navigator.clipboard && window.isSecureContext) {
            return navigator.clipboard.writeText(text);
        }
        // Older browsers and non-https pages
        const field = document.createElement('textarea');
        field.value = text;
        field.setAttribute('readonly', '');
        field.style.cssText = 'position:fixed;top:0;left:0;opacity:0';
        document.body.appendChild(field);
        field.select();
        const ok = document.execCommand('copy');
        field.remove();
        return ok ? Promise.resolve() : Promise.reject();
    };
    document.querySelectorAll('a[href^="mailto:"]').forEach(link => {
        link.title = 'Copy email address';
        link.addEventListener('click', () => {
            const address = link.getAttribute('href').slice(7).split('?')[0];
            copyText(address)
                .then(() => showToast('Email copied: ' + address))
                .catch(() => showToast(address));
        });
    });

    // Print button on the resume page
    document.querySelectorAll('[data-print]').forEach(btn =>
        btn.addEventListener('click', () => window.print()));
});
