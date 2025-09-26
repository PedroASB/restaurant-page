function createPhoneLabel() {
    const phoneLabel = document.createElement("div");
    phoneLabel.classList.add("label");
    phoneLabel.id = "phone";

    const phoneTitle = document.createElement("h3");
    phoneTitle.classList.add("title");
    phoneTitle.textContent = "Phone:";

    const phoneContent = document.createElement("div");
    phoneContent.classList.add("content");
    phoneContent.textContent = "+1 555-0123";

    phoneLabel.appendChild(phoneTitle);
    phoneLabel.appendChild(phoneContent);

    return phoneLabel;
}

function createEmailLabel() {
    const emailLabel = document.createElement("div");
    emailLabel.classList.add("label");
    emailLabel.id = "email";

    const emailTitle = document.createElement("h3");
    emailTitle.classList.add("title");
    emailTitle.textContent = "Email:";

    const emailContent = document.createElement("div");
    emailContent.classList.add("content");
    emailContent.textContent = "thekingrocks@email.com";

    emailLabel.appendChild(emailTitle);
    emailLabel.appendChild(emailContent);

    return emailLabel;
}

function switchToContact() {
    const content = document.querySelector("#content");
    const contactHeader = document.createElement("h2");
    const contactDiv = document.createElement("div");
    const phoneLabel = createPhoneLabel();
    const emailLabel = createEmailLabel();

    contactHeader.innerText = "Contact";
    contactDiv.appendChild(phoneLabel);
    contactDiv.appendChild(emailLabel);

    // Updates the content box
    content.innerHTML = "";
    content.className = "contact";
    content.appendChild(contactHeader);
    content.appendChild(contactDiv);
}

export { switchToContact };