"use strict";

// Responsive menu
const mobileMenu = () => {
  let menu = document.querySelector(".header ul");
  let btn = document.querySelector(".header button");

  if (btn.innerText === "MENU") {
    menu.style.display = "block";
    btn.innerText = "CLOSE";
  } else {
    menu.style.display = "none";
    btn.innerText = "MENU";
  }
};

// Slider
const rightBtn = document.querySelector("#right-btn");
const leftBtn = document.querySelector("#left-btn");
const images = document.querySelectorAll(".slider-images img");

let imgNum = 0;
// Go to next slide
const nextSlide = () => {
  displayNone();
  imgNum++;
  if (imgNum === images.length) imgNum = 0;
  images[imgNum].style.display = "block";
};
// Go to previous slide
const prevSlide = () => {
  displayNone();
  imgNum--;
  if (imgNum === -1) imgNum = images.length - 1;
  images[imgNum].style.display = "block";
};

// Event listeners for slider
rightBtn.addEventListener("click", nextSlide);
leftBtn.addEventListener("click", prevSlide);

// Hides all images
const displayNone = () => {
  images.forEach((img) => {
    img.style.display = "none";
  });
};

// Portfolio
const buttons = document.querySelectorAll(".portfolio-categories button");
console.log(buttons);
const portfolioSort = (button) => {
  const category = button.getAttribute("data-category");
  const portfolioItems = document.querySelectorAll(".portfolio-single-item");
  portfolioItems.forEach((item) => (item.style.display = "none"));

  if (category === "sve") {
    portfolioItems.forEach((item) => (item.style.display = "block"));
  }

  portfolioItems.forEach((item) => {
    if (item.getAttribute("data-category").includes(category)) {
      item.style.display = "block";
    }
  });
};

// Modal

const popupModal = document.querySelector(".popup-modal");
const overlay = document.querySelector(".overlay");
const modalBtn = document.querySelector(".modal-section button");
const closeBtn = document.querySelector("#closeModal");
// Open modal and show overlay
const openModal = () => {
  popupModal.style.display = "block";
  overlay.style.display = "block";
};
// Close modal and hide overaly
const closeModal = () => {
  popupModal.style.display = "none";
  overlay.style.display = "none";
};

// Modal event listeners
modalBtn.addEventListener("click", openModal);
closeBtn.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
