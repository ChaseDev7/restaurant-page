import { displayHomepage } from "./homepage.js";
import { displayMenu } from "./menu.js";
import { displayContactPage } from "./contact.js";
import './style.css';

const body = document.querySelector("body");

const content = document.createElement("div");
content.setAttribute("id", "content");

body.appendChild(content);

const navBar = document.createElement("div");
navBar.setAttribute("id", "nav-bar");

content.appendChild(navBar);

const homePageBtn = document.createElement("button");
homePageBtn.textContent = "HOME";

const menuBtn = document.createElement("button");
menuBtn.textContent = "MENU";

const contactBtn = document.createElement("button");
contactBtn.textContent = "CONTACT";

navBar.appendChild(homePageBtn);
navBar.appendChild(menuBtn);
navBar.appendChild(contactBtn);

homePageBtn.addEventListener("click", displayHomepageContainer);
menuBtn.addEventListener("click", displayMenuContainer);
contactBtn.addEventListener("click", displayContactPageContainer);

displayHomepage();

const disclaimerBox = document.createElement("div");
disclaimerBox.setAttribute("id", "disclaimer-box");
disclaimerBox.textContent = "DISCLAIMER: This it a project for theOdinProject. I do not own the pictures used here. They are taken from Google search.";

content.appendChild(disclaimerBox);

function displayHomepageContainer () {
  content.innerHTML = "";
  content.appendChild(navBar);
  displayHomepage();
  content.appendChild(disclaimerBox);
}

function displayMenuContainer () {
  content.innerHTML = "";
  content.appendChild(navBar);
  displayMenu();
  content.appendChild(disclaimerBox);
}

function displayContactPageContainer () {
  content.innerHTML = "";
  content.appendChild(navBar);
  displayContactPage();
  content.appendChild(disclaimerBox);
}