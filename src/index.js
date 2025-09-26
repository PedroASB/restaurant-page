import "./reset.css";
import "./style.css";
import { switchToHomepage } from "./homepage";
import { switchToContact } from "./contact";
import { switchToAbout } from "./about";

function initializePage() {
    const homepageButton = document.querySelector("#homepage-button");
    const contactButton = document.querySelector("#contact-button");
    const aboutButton = document.querySelector("#about-button");

    homepageButton.addEventListener("click", switchToHomepage);
    contactButton.addEventListener("click", switchToContact);
    aboutButton.addEventListener("click", switchToAbout);

    switchToHomepage();
}

initializePage();