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

if(sizeButtons.length > 0){

sizeButtons.forEach(button => {

const size = button.dataset.size;

if (stock[size] === 0) {
  button.classList.add("out");
  button.disabled = true;
}

button.addEventListener("click", () => {

  sizeButtons.forEach(btn => btn.classList.remove("active"));
  button.classList.add("active");

  if(stockText){
    stockText.textContent = `Stock disponible: ${stock[size]} unidades`;
  }

  if(buyBtn){
    buyBtn.disabled = false;
  }

});

});

}


/* =========================
   GALERÍA DE IMÁGENES
========================= */

const mainImage = document.getElementById("mainImage");
const thumbs = document.querySelectorAll(".product-thumb");

if(mainImage && thumbs.length > 0){

thumbs.forEach(thumb => {

thumb.addEventListener("click", () => {

mainImage.src = thumb.src;

});

});

}


/* =========================
   MENU HAMBURGUESA
========================= */

const menuToggle = document.getElementById("menu-toggle");
const navLinks = document.getElementById("nav-links");

if(menuToggle && navLinks){

menuToggle.addEventListener("click", () => {

navLinks.classList.toggle("active");

});

}


/* =========================
   NAVBAR SCROLL
========================= */

const navbar = document.querySelector(".navbar");

if(navbar){

window.addEventListener("scroll", () => {

if(window.scrollY > 50){
  navbar.classList.add("scrolled");
}else{
  navbar.classList.remove("scrolled");
}

});

}


/* =========================
   NAV LINK ACTIVE
========================= */

const sections = document.querySelectorAll("section[id]");
const navLinkItems = document.querySelectorAll(".nav-link");

if(sections.length > 0){

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 120;

if(window.scrollY >= sectionTop){
  current = section.id;
}

});

navLinkItems.forEach(link => {

link.classList.remove("active");

const href = link.getAttribute("href");

if(href && href.includes(current)){
  link.classList.add("active");
}

});

});

}

});