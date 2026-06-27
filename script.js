    function updateCountdown() {
      const target = new Date('2026-07-24T08:00:00').getTime();
      const now = Date.now();
      const diff = target - now;
      if (diff <= 0) {
        document.querySelector('.countdown-bar').innerHTML = '<strong style="color:var(--yellow)">🎉 Training has started! Register now to join.</strong>';
        return;
      }
      const d = Math.floor(diff / 86400000);
      const h = Math.floor((diff % 86400000) / 3600000);
      const m = Math.floor((diff % 3600000) / 60000);
      const s = Math.floor((diff % 60000) / 1000);
      document.getElementById('cd-days').textContent  = String(d).padStart(2,'0');
      document.getElementById('cd-hours').textContent = String(h).padStart(2,'0');
      document.getElementById('cd-mins').textContent  = String(m).padStart(2,'0');
      document.getElementById('cd-secs').textContent  = String(s).padStart(2,'0');
    }
    updateCountdown();
    setInterval(updateCountdown, 1000);

    /* ── 2. NAV SCROLL SHADOW ── */
    window.addEventListener('scroll', () => {
      document.getElementById('main-nav').classList.toggle('scrolled', window.scrollY > 10);
    }, { passive: true });

    /* ── 3. ACTIVE NAV HIGHLIGHT ── */
    const sections = document.querySelectorAll('section[id], div.stats-strip');
    const navLinks = document.querySelectorAll('.nav-links a[data-section]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          navLinks.forEach(a => {
            a.classList.toggle('active', a.dataset.section === entry.target.id);
          });
        }
      });
    }, { threshold: 0.3 });
    document.querySelectorAll('section[id]').forEach(s => observer.observe(s));

    /* ── 4. SCROLL REVEAL ANIMATIONS ── */
    const revealObserver = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

    /* ── 5. FAQ ACCORDION ── */
    function toggleFaq(btn) {
      const answer = btn.nextElementSibling;
      const isOpen = answer.classList.contains('open');
      // Close all
      document.querySelectorAll('.faq-answer.open').forEach(a => a.classList.remove('open'));
      document.querySelectorAll('.faq-question.open').forEach(b => b.classList.remove('open'));
      // Open clicked (if it was closed)
      if (!isOpen) {
        answer.classList.add('open');
        btn.classList.add('open');
        trackEvent('faq_open', btn.textContent.trim().substring(0, 40));
      }
    }

    /* ── 6. COPY TO CLIPBOARD ── */
    function copyText(text, btn) {
      navigator.clipboard.writeText(text).then(() => {
        btn.textContent = '✓ Copied';
        btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
        trackEvent('copy_account_number');
      }).catch(() => {
        // Fallback for older browsers
        const ta = document.createElement('textarea');
        ta.value = text; document.body.appendChild(ta);
        ta.select(); document.execCommand('copy');
        document.body.removeChild(ta);
        btn.textContent = '✓ Copied'; btn.classList.add('copied');
        setTimeout(() => { btn.textContent = 'Copy'; btn.classList.remove('copied'); }, 2000);
      });
    }

    /* ── 7. GA4 EVENT TRACKING ── */
    function trackEvent(eventName, label) {
      if (typeof gtag !== 'undefined') {
        gtag('event', eventName, { event_label: label || eventName });
      }
    }

    /* ── 8. TRACK SCROLL DEPTH (25%, 50%, 75%, 100%) ── */
    const scrollMilestones = new Set();
    window.addEventListener('scroll', () => {
      const pct = Math.round((window.scrollY / (document.body.scrollHeight - window.innerHeight)) * 100);
      [25, 50, 75, 100].forEach(m => {
        if (pct >= m && !scrollMilestones.has(m)) {
          scrollMilestones.add(m);
          trackEvent('scroll_depth', m + '%');
        }
      });
    }, { passive: true });