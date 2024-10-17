function aboutPage() {
    const container = document.getElementById("content");
    container.textContent = "";

    
    const imgDiv = document.createElement("div");
    imgDiv.classList.add("img-container");
    imgDiv.classList.add("about-page");
    container.appendChild(imgDiv);
    const img = document.createElement("img");
    imgDiv.appendChild(img);
}

export { aboutPage }