function homePage() {
    const container = document.getElementById("container");
    container.textContent = "";

    const storeName = document.createElement("h1");
    storeName.textContent = "Kamakura Zaimokuza Delicatessen";
    container.appendChild(storeName);

    const aboutHead = document.createElement("h3");
    aboutHead.textContent = "Who we are";
    container.appendChild(aboutHead);

    const aboutMidHR = document.createElement("hr");
    container.appendChild(aboutMidHR);

    const aboutText = document.createElement("p");
    aboutText.textContent = "Test test test \r\n Test test test \r\n Test test test"
    container.appendChild(aboutText);

    const hoursHead = document.createElement("h3");
    hoursHead.textContent = "Opening Hours";
    container.appendChild(hoursHead);

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