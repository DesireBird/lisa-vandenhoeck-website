// ── Mobile Nav Toggle ────────────────────────────────────────
(function () {
  var toggle = document.getElementById('navToggle');
  var list = document.getElementById('siteNavList');
  if (!toggle || !list) return;

  function setOpen(isOpen) {
    toggle.classList.toggle('is-open', isOpen);
    list.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    toggle.setAttribute('aria-label', isOpen ? 'Menü schließen' : 'Menü öffnen');
  }

  toggle.addEventListener('click', function () {
    setOpen(!list.classList.contains('is-open'));
  });

  list.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () { setOpen(false); });
  });
})();

// ── Services Dropdown ───────────────────────────────────────
(function () {
  var toggle = document.getElementById('servicesToggle');
  var menu = document.getElementById('servicesMenu');
  if (!toggle || !menu) return;

  function setOpen(isOpen) {
    toggle.classList.toggle('is-open', isOpen);
    menu.classList.toggle('is-open', isOpen);
    toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
  }

  toggle.addEventListener('click', function (e) {
    e.stopPropagation();
    setOpen(!menu.classList.contains('is-open'));
  });

  document.addEventListener('click', function (e) {
    if (!toggle.contains(e.target) && !menu.contains(e.target)) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });
})();
