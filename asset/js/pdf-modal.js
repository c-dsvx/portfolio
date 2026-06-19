  const pdfLinks = document.querySelectorAll(".pdf-link");
  const pdfModal = document.getElementById("pdfModal");
  const pdfFrame = document.getElementById("pdfFrame");
  const pdfModalClose = document.getElementById("pdfModalClose");

  pdfLinks.forEach((link) => {
    link.addEventListener("click", function (e) {
      const isMobile = window.matchMedia("(max-width: 768px)").matches;

      if (isMobile) {
        return;
      }

      e.preventDefault();

      pdfFrame.src = this.href;
      pdfModal.classList.add("active");
    });
  });

  function closePdfModal() {
    pdfModal.classList.remove("active");
    pdfFrame.src = "";
  }

  pdfModalClose.addEventListener("click", closePdfModal);

  pdfModal.addEventListener("click", function (e) {
    if (e.target === pdfModal) {
      closePdfModal();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") {
      closePdfModal();
    }
  });

