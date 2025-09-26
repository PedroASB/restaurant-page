import hamburgerImage1 from "./imgs/hamburger-1.jpg";
import hamburgerImage2 from "./imgs/hamburger-2.jpg";
import sandwichImage from "./imgs/sandwich.jpg";
import dessertImage from "./imgs/dessert.jpg";

function createImagesBox() {
    const homepageImagesPaths = [
        hamburgerImage1, hamburgerImage2, sandwichImage, dessertImage
    ];
    const imagesBox = document.createElement("div");
    imagesBox.id = "images-box";

    for (let i = 0; i < 4; i++) {
        const imageDiv = document.createElement("div");
        const src = homepageImagesPaths[i];
        const img = document.createElement("img");
        img.setAttribute("src", src);
        
        imageDiv.id = `image-${i + 1}`;
        imageDiv.classList.add("image");
        imageDiv.appendChild(img);

        imagesBox.appendChild(imageDiv);
    }

    return imagesBox;
}

function createDescription() {
    const description = document.createElement("div");
    const descriptionTitle = document.createElement("h2");
    const descriptionText = document.createElement("div");
    description.id = "description";

    descriptionTitle.classList.add("title");
    descriptionTitle.innerText = "The King Rocks — Experience the '60s vibes at our restaurant";
    description.appendChild(descriptionTitle);
    
    descriptionText.classList.add("text");
    descriptionText.innerText = "We bring the spirit of the 1960s straight to your table! Step " + 
                                "inside and you'll find classic diner flavors, fresh ingredients, " + 
                                "and a touch of rock'n'roll. Whether you're here for a tasty burger, " + 
                                "a creamy milkshake or just the atmosphere, we've got the perfect spot for you.";
    description.appendChild(descriptionText);

    return description;
}

function createInfo() {
    const info = document.createElement("div");
    const open = document.createElement("div");
    const location = document.createElement("div");
    info.id = "info";
    
    // Open
    open.id = "open";
    const openTitle = document.createElement("h3");
    openTitle.classList.add("title");
    openTitle.innerText = "Open";
    open.appendChild(openTitle);

    const openContent = document.createElement("div");
    openContent.classList.add("content");
    const openContentList = [
        "Weekdays", "10 AM - 10 PM", "Weekends", "10 AM - 11 PM"
    ];
    for (let i = 0; i < 4; i++) {
        const div = document.createElement("div");
        div.innerText = openContentList[i];
        openContent.appendChild(div);
    }
    open.appendChild(openContent);

    // Location
    location.id = "location";
    const locationTitle = document.createElement("h3");
    locationTitle.classList.add("title");
    locationTitle.innerText = "Visit us";
    location.appendChild(locationTitle);
    
    const locationContent = document.createElement("div");
    locationContent.classList.add("content");
    locationContent.innerText = "123 Jukebox Boulevard, Rocktown, King State, USA";
    location.appendChild(locationContent);

    info.appendChild(open);
    info.appendChild(location);

    return info;
}

function switchToHomepage() {
    const content = document.querySelector("#content");
    const imagesBox = createImagesBox();
    const description = createDescription();
    const info = createInfo();

    // Updates the content box
    content.innerHTML = "";
    content.className = "homepage";
    content.appendChild(imagesBox);
    content.appendChild(description);
    content.appendChild(info);
}

export { switchToHomepage };