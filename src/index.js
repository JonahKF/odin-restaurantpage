import "./styles.css";
import { homePage } from "./homePage";
import { menuPage } from "./menuPage";
import { aboutPage } from "./aboutPage";

const homeBtn = document.querySelector(".home");
homeBtn.addEventListener("click", homePage);

const menuBtn = document.querySelector(".menu");
menuBtn.addEventListener("click", menuPage);

const aboutBtn = document.querySelector(".about");
aboutBtn.addEventListener("click", aboutPage);


homePage();

