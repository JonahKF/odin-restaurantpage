import "./styles.css";
import { homePage } from "./homePage";
import { menuPage } from "./menuPage";
import { contactPage } from "./contactPage";

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", homePage);

const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", menuPage);

const contactBtn = document.querySelector(".about");
contactBtn.addEventListener("click", contactPage);

const nav = document.querySelector("nav");
window.onscroll = () => {
    if(window.scrollY > 0){
      nav.classList.add('scrolled')
    }
    else{
        nav.classList.remove('scrolled')
    }
}

homePage();

