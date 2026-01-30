document.addEventListener("DOMContentLoaded", () => {

  /* =====================
     STOCK POR TALLE
  ====================== */
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
    
    // Si no hay stock
    if (stock[size] === 0) {
      button.disabled = true;
      button.classList.add("out");
    }

    button.addEventListener("click", () => {
      sizeButtons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      stockText.textContent = `Stock disponible: ${stock[size]} unidades`;

      buyBtn.disabled = false;
      buyBtn.textContent = "COMPRAR";
    });
  });

  const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".product-thumb");

thumbs.forEach(thumb => {
  thumb.addEventListener("click", () => {
    mainImage.src = thumb.src;
  });
});
});
