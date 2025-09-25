import "./reset.css";
import "./style.css";

import image1 from "./imgs/hamburger-1.jpg";
import image2 from "./imgs/hamburger-2.jpg";
import image3 from "./imgs/sandwich.jpg";
import image4 from "./imgs/dessert.jpg";
import cdIcon from "./imgs/cd-icon.png";

// Temporary
const imageDiv1 = document.querySelector("#image-1");
const imageDiv2 = document.querySelector("#image-2");
const imageDiv3 = document.querySelector("#image-3");
const imageDiv4 = document.querySelector("#image-4");

const imageDivs = [imageDiv1, imageDiv2, imageDiv3, imageDiv4];
const imagesPaths = [
    image1,
    image2,
    image3,
    image4,
];

for (let i = 0; i < 4; i++) {
    const src = imagesPaths[i];
    const img = document.createElement("img");
    img.setAttribute("src", src);
    imageDivs[i].appendChild(img);
}

const menuButtons = Array.from(document.querySelectorAll("nav button"));
console.log(menuButtons);

menuButtons.forEach((button) => {
    const cdIconImg = document.createElement("img");
    cdIconImg.setAttribute("src", cdIcon);
    button.insertBefore(cdIconImg, button.firstChild);
});