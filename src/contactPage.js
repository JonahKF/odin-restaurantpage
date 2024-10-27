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
    phoneText.textContent = "+81 70-000-0000";
    phoneContainer.appendChild(phoneText);

    const map = document.createElement("div");
    map.classList.add("map");
    map.textContent = "This is where a map would go! But I have no API key!";
    contactLocation.appendChild(map);


    const contactForm = document.createElement("div");
    contactForm.classList.add("contact-form-container");
    contactGrid.appendChild(contactForm);

    const form = document.createElement("form");
    form.action = '';
    form.method = 'post';
    form.classList.add("contact-form");
    contactForm.appendChild(form);

    const formRowOne = document.createElement("div");
    formRowOne.classList.add("form-row");
    form.appendChild(formRowOne);
    const labelOne = document.createElement("label");
    labelOne.for = "name";
    labelOne.textContent = "Name";
    formRowOne.appendChild(labelOne);
    const inputOne = document.createElement("input");
    inputOne.id = "name";
    inputOne.name = "name";
    inputOne.type = "text";
    inputOne.required = true;
    formRowOne.appendChild(inputOne);

    const formRowTwo = document.createElement("div");
    formRowTwo.classList.add("form-row");
    form.appendChild(formRowTwo);
    const labelTwo = document.createElement("label");
    labelTwo.for = "email";
    labelTwo.textContent = "Email";
    formRowTwo.appendChild(labelTwo);
    const inputTwo = document.createElement("input");
    inputTwo.id = "email";
    inputTwo.name = "email";
    inputTwo.type = "text";
    inputTwo.required = true;
    formRowTwo.appendChild(inputTwo);

    const formRowThree = document.createElement("div");
    formRowThree.classList.add("form-row");
    form.appendChild(formRowThree);
    const labelThree = document.createElement("label");
    labelThree.for = "message";
    labelThree.textContent = "Message";
    formRowThree.appendChild(labelThree);
    const inputThree = document.createElement("textarea");
    inputThree.id = "message";
    inputThree.name = "message";
    inputThree.required = true;
    formRowThree.appendChild(inputThree);

    const formRowFour = document.createElement("div");
    formRowFour.classList.add("form-row");
    form.appendChild(formRowFour);
    const submitButton = document.createElement("button");
    submitButton.textContent = "Submit";
    formRowFour.appendChild(submitButton);

}

export { contactPage }