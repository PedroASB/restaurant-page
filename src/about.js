import kingsRockImage from "./imgs/kings-rock.jpg";


function switchToAbout() {
    const content = document.querySelector("#content");
    const aboutHeader = document.createElement("h2");
    const firstParagraph = document.createElement("p");
    const secondParagraph = document.createElement("p");
    const restaurantImage = document.createElement("img");

    aboutHeader.innerText = "About";
    firstParagraph.innerHTML = `Hi there, I'm Pedro! This project is part of the curriculum of ` +
                                `<a href="https://www.theodinproject.com/">The Odin Project</a>. ` +
                                `To access the project's repository on GitHub, ` +
                                `<a href="https://github.com/PedroASB/restaurant-page">click here</a>. ` +
                                `Also, you can check out other projects that I've built in my ` +
                                `<a href="https://github.com/PedroASB/fullstack-journey">fullstack-journey</a> ` +
                                `repository.`;
    secondParagraph.innerHTML = `<strong>Interesting fact:</strong> this fictional restaurant "The King Rocks" ` +
                                `is a tribute to a real restaurant from my hometown in Brazil. It ` +
                                `was called "King's Rock" and sadly closed its doors around late 2013. ` + 
                                `Below is a photo I found on a review blog published in February 2013.`;
    restaurantImage.setAttribute("src", kingsRockImage);

    // Updates the content box
    content.innerHTML = "";
    content.className = "about";
    content.appendChild(aboutHeader);
    content.appendChild(firstParagraph);
    content.appendChild(secondParagraph);
    content.appendChild(restaurantImage);
}

export { switchToAbout };