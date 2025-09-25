import "./reset.css";
import "./style.css";
import { switchToHomepage } from "./homepage.js";

function initializePage() {
    const homepageButton = document.querySelector("#homepage-button");
    homepageButton.addEventListener("click", switchToHomepage);

    switchToHomepage();
}

initializePage();