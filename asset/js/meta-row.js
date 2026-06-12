(function () {
  var links = document.querySelectorAll('.meta-row a');
  if (!links.length) return;

  function setOrigin(link, fromLeft) {
    link.classList.toggle('underline-from-left', fromLeft);
    link.classList.toggle('underline-from-right', !fromLeft);
  }

  links.forEach(function (link) {
    link.addEventListener('mouseenter', function (e) {
      var rect = link.getBoundingClientRect();
      setOrigin(link, e.clientX < rect.left + rect.width * 0.5);
    });

    link.addEventListener('mouseleave', function (e) {
      var rect = link.getBoundingClientRect();
      setOrigin(link, e.clientX < rect.left + rect.width * 0.5);
    });
  });
})();
