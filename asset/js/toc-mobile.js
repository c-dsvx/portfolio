(function () {
  var toc = document.getElementById('toc');
  var toggle = document.querySelector('.toc-toggle');
  var panel = document.getElementById('toc-panel');
  if (!toc || !toggle || !panel) return;

  var mq = window.matchMedia('(max-width: 900px)');

  function setOpen(open) {
    toc.classList.toggle('is-open', open);
    toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
    toggle.setAttribute('aria-label', open ? 'Close sections menu' : 'Open sections menu');
    document.body.classList.toggle('toc-open', open && mq.matches);
  }

  toggle.addEventListener('click', function () {
    setOpen(!toc.classList.contains('is-open'));
  });

  panel.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', function () {
      setOpen(false);
    });
  });

  document.addEventListener('click', function (e) {
    if (!mq.matches || !toc.classList.contains('is-open')) return;
    if (!toc.contains(e.target)) setOpen(false);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') setOpen(false);
  });

  mq.addEventListener('change', function () {
    if (!mq.matches) setOpen(false);
  });
})();
