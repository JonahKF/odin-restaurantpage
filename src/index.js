import "./styles.css";
import { homePage } from "./homePage";
import { menuPage } from "./menuPage";
import { contactPage } from "./aboutPage";

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", homePage);

const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", menuPage);

const contactBtn = document.querySelector(".about");
contactBtn.addEventListener("click", contactPage);


homePage();

