function homePage() {
    const container = document.getElementById("content");
    container.textContent = "";


    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img-container");
    imgDiv.classList.add("home-page");
    container.appendChild(imgDiv);
    const img = document.createElement("img");
    imgDiv.appendChild(img);


    const logoContainer = document.createElement("div");
    logoContainer.classList.add("logo-container");
    container.appendChild(logoContainer);

    const storeName = document.createElement("h1");
    storeName.textContent = "Kamakura Zaimokuza Delicatessen";
    logoContainer.appendChild(storeName);

    const catchCopy = document.createElement("div");
    catchCopy.textContent = "Kamakura's only New York style delicatessen.";
    catchCopy.classList.add("catch-copy");
    logoContainer.appendChild(catchCopy);


    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");
    container.appendChild(aboutContainer);

    const aboutHead = document.createElement("h3");
    aboutHead.textContent = "Who we are";
    aboutContainer.appendChild(aboutHead);

    const aboutMidHR = document.createElement("hr");
    aboutContainer.appendChild(aboutMidHR);

    const aboutText = document.createElement("p");
    aboutText.textContent = "At Kamakura Zaimokuza, we are proud to offer excellent deli meats and cheeses found nowhere else in the city. \r\n We invite you to try any of our delicious menu options, or to experiment with our selection and make a sandwich that's all your own. \r\n Grab a bite to eat, a craft soda, and watch the waves roll by. Just watch out for the tonbi.";
    aboutContainer.appendChild(aboutText);

    const hoursHead = document.createElement("h3");
    hoursHead.textContent = "Opening Hours";
    container.appendChild(hoursHead);

    const hoursMidHR = document.createElement("hr");
    container.appendChild(hoursMidHR);

    const hoursGrid = document.createElement("div");
    hoursGrid.classList.add("hours-grid");
    container.appendChild(hoursGrid);

    const weekends = document.createElement("div");
    weekends.textContent = "Weekends";
    const weekendHours = document.createElement("div");
    weekendHours.textContent = "07:00 - 18:00";
    const weekdays = document.createElement("div");
    weekdays.textContent = "Mon. thru Thurs.";
    const weekdayHours = document.createElement("div");
    weekdayHours.textContent = "07:00 - 20:00";
    const fridays = document.createElement("div");
    fridays.textContent = "Closed Fridays";
    fridays.classList.add("friday");
    hoursGrid.appendChild(weekends);
    hoursGrid.appendChild(weekendHours);
    hoursGrid.appendChild(weekdays);
    hoursGrid.appendChild(weekdayHours);
    hoursGrid.appendChild(fridays);



}

export { homePage }