import "./reset.css";
import "./style.css";
import { switchToHomepage } from "./homepage";
import { switchToContact } from "./contact";

function initializePage() {
    const homepageButton = document.querySelector("#homepage-button");
    const contactButton = document.querySelector("#contact-button");

    homepageButton.addEventListener("click", switchToHomepage);
    contactButton.addEventListener("click", switchToContact);

    switchToHomepage();
}

initializePage();