import { displayHomepage } from "./homepage.js";
import './style.css';

const content = document.querySelector("#content");
const navBar = document.createElement("div");
navBar.setAttribute("id", "nav-bar");

content.appendChild(navBar);

const homePageBtn = document.createElement("button");
homePageBtn.textContent = "| HOME";

const menuBtn = document.createElement("button");
menuBtn.textContent = "| MENU";

const contactBtn = document.createElement("button");
contactBtn.textContent = "| CONTACT";

navBar.appendChild(homePageBtn);
navBar.appendChild(menuBtn);
navBar.appendChild(contactBtn);

displayHomepage();

const disclaimerBox = document.createElement("div");
disclaimerBox.setAttribute("id", "disclaimer-box");
disclaimerBox.textContent = "DISCLAIMER: This it a project for theOdinProject. I do not own the pictures used here. They are taken from Google search.";

content.appendChild(disclaimerBox);