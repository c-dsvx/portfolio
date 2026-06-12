(function () {
  var links = Array.prototype.slice.call(document.querySelectorAll('#toc-nav a'));
  var map = {};
  links.forEach(function (a) { map[a.getAttribute('href').slice(1)] = a; });
  var sections = links.map(function (a) { return document.getElementById(a.getAttribute('href').slice(1)); });
  var current = null;
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) {
        if (current) current.classList.remove('active');
        current = map[e.target.id];
        if (current) current.classList.add('active');
      }
    });
  }, { rootMargin: '-15% 0px -70% 0px', threshold: 0 });
  sections.forEach(function (s) { if (s) io.observe(s); });
})();
