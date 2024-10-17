function homePage() {
    const container = document.getElementById("content");
    container.textContent = "";

    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img-container");
    container.appendChild(imgDiv);
    const img = document.createElement("img");
    img.src = "https://media.istockphoto.com/id/1438530555/ja/%E3%82%B9%E3%83%88%E3%83%83%E3%82%AF%E3%83%95%E3%82%A9%E3%83%88/%E7%A9%BA%E3%81%AE%E8%B1%9A%E8%82%89-%E4%B8%AD%E5%B0%8F%E4%BC%81%E6%A5%AD%E3%81%AE%E3%82%B3%E3%83%B3%E3%82%BB%E3%83%97%E3%83%88.jpg?s=2048x2048&w=is&k=20&c=c7LA8M3rGhh1vop9mO7DmdEoCNSr6TsPUB8W02XxnTc=";
    imgDiv.appendChild(img);

    const storeName = document.createElement("h1");
    storeName.textContent = "Kamakura Zaimokuza Delicatessen";
    container.appendChild(storeName);

    const catchCopy = document.createElement("div");
    catchCopy.textContent = "Kamakura's only New York style delicatessen.";
    catchCopy.classList.add("catch-copy");
    container.appendChild(catchCopy);

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