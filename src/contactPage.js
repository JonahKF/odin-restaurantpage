function contactPage() {
    const container = document.getElementById("content");
    container.textContent = "";

    
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img-container");
    imgDiv.classList.add("about-page");
    container.appendChild(imgDiv);
    const img = document.createElement("img");
    imgDiv.appendChild(img);


    const contactLogoContainer = document.createElement("div");
    contactLogoContainer.classList.add("menu-logo-container");
    container.appendChild(contactLogoContainer);

    const contactBannerText = document.createElement("h2");
    contactBannerText.textContent = "Contact Kamakura Zaimokuza Delicatessen";
    contactLogoContainer.appendChild(contactBannerText);


    const contactContainer = document.createElement("div");
    contactContainer.classList.add("contact-container");
    container.appendChild(contactContainer);

    const contactHead = document.createElement("h3");
    contactHead.textContent = "Contact Us";
    contactContainer.appendChild(contactHead);

    const contactHR = document.createElement("hr");
    contactContainer.appendChild(contactHR);


    const contactGrid = document.createElement("div");
    contactGrid.classList.add("contact-grid");
    contactContainer.appendChild(contactGrid);


    const contactLocation = document.createElement("div");
    contactLocation.classList.add("contact-location");
    contactGrid.appendChild(contactLocation);

    const addressContainer = document.createElement("div");
    addressContainer.classList.add("address-container");
    contactLocation.appendChild(addressContainer); 

    const addressText = document.createElement("div");
    addressText.classList.add("address-text");
    addressText.textContent = "Zaimokuza #-chome #-#, Kamakura-shi, Kanagawa-ken";
    addressContainer.appendChild(addressText);

    const phoneContainer = document.createElement("div");
    phoneContainer.classList.add("phone-container");
    contactLocation.appendChild(phoneContainer);

    const phoneText = document.createElement("div");
    phoneText.classList.add("phone-text");
    phoneText.textContent = "+81 70-0000-0000";
    phoneContainer.appendChild(phoneText);


    const contactForm = document.createElement("div");
    contactForm.classList.add("contact-form");
    contactGrid.appendChild(contactForm);

}

export { contactPage }