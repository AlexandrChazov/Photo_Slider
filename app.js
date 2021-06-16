const up_button = document.querySelector(".up-button");
const down_button = document.querySelector(".down-button");
const sidebar = document.querySelector(".sidebar");
const main_slide = document.querySelector(".main-slide");
const container = document.querySelector(".container");

up_button.addEventListener("click", () => scrollImage("up"));
down_button.addEventListener("click", () => scrollImage("down"));

const imageHeight = container.clientHeight;
const imagesCount = main_slide.children.length;

sidebar.style.top = `-${(imagesCount - 1) * 100}vh`;
let imageNumber = 0;

function scrollImage(direction) {
  if (direction === "up") {
    imageNumber++;
    if (imageNumber === imagesCount) {imageNumber = 0}
  }
  if (direction === "down") {
    imageNumber--;
    if (imageNumber < 0 ) {imageNumber = imagesCount - 1}
  }
  sidebar.style.transform = `translateY(${imageHeight * imageNumber}px)`
  main_slide.style.transform = `translateY(-${imageHeight * imageNumber}px)`
}
