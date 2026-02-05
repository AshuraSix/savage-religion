document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     STOCK Y TALLES
  ========================= */

  const stock = {
    S: 3,
    M: 1,
    L: 5,
    XL: 5
  };

  const sizeButtons = document.querySelectorAll(".size-btn");
  const stockText = document.querySelector(".stock-text");
  const buyBtn = document.getElementById("buyBtn");

  sizeButtons.forEach(button => {
    const size = button.dataset.size;

    if (stock[size] === 0) {
      button.classList.add("out");
      button.disabled = true;
    }

    button.addEventListener("click", () => {
      sizeButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      stockText.textContent = `Stock disponible: ${stock[size]} unidades`;
      buyBtn.disabled = false;
    });
  });

  /* =========================
     GALERÍA DE IMÁGENES
  ========================= */

  const mainImage = document.getElementById("mainImage");
  const thumbs = document.querySelectorAll(".product-thumb");

  thumbs.forEach(thumb => {
    thumb.addEventListener("click", () => {
      mainImage.src = thumb.src;
    });
  });

});
document.addEventListener("DOMContentLoaded", () => {
  const toggle = document.getElementById("navToggle");
  const links = document.getElementById("navLinks");

  if (!toggle || !links) return;

  toggle.addEventListener("click", () => {
    links.classList.toggle("active");
  });
});

