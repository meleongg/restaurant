import { renderHomePage } from "./homePage";
import { renderHeader } from "./header";
import { renderFooter } from "./footer";
import { renderMenu } from "./menu";
import { renderContact } from "./contact";
import "./reset.css";
import "./styles.css";
import Logo from "../src/images/logo.png";

const content = document.getElementById("content");

const addLogo = () => {
    const link = document.createElement("link");
    link.rel = "icon";
    document.getElementsByTagName("head")[0].appendChild(link);
    link.href = Logo;
}

const renderTitleDiv = (str) => {
    const titleDiv = document.createElement("div");
    titleDiv.id = "title";

    const droplet1 = document.createElement("i");
    droplet1.classList.add("fas");
    droplet1.classList.add("fa-tint");

    const droplet2 = document.createElement("i");
    droplet2.classList.add("fas");
    droplet2.classList.add("fa-tint");

    const header = document.createElement("h1");
    header.innerHTML = str;
    titleDiv.appendChild(droplet1);
    titleDiv.appendChild(header);
    titleDiv.appendChild(droplet2);

    content.appendChild(titleDiv);
}

const clearContent = () => {
    content.innerHTML = "";
}

addLogo();
renderHeader();
renderTitleDiv("Splash");
renderHomePage();
renderFooter();

const homeBtn = document.getElementById("Home");
const menuBtn = document.getElementById("Menu");
const contactBtn = document.getElementById("Contact");

homeBtn.addEventListener("click", () => {
    clearContent();
    renderTitleDiv("Splash");
    renderHomePage();
});

menuBtn.addEventListener("click", () => {
    clearContent();
    renderTitleDiv("Menu");
    renderMenu();
});

contactBtn.addEventListener("click", () => {
    clearContent();
    renderTitleDiv("Contact Us");
    renderContact();
});