import { displayHomepage } from "./homepage.js";
import './style.css';

const content = document.querySelector("#content");
const navBar = document.createElement("div");
navBar.setAttribute("id", "nav-bar");

content.appendChild(navBar);

const homePageBtn = document.createElement("button");
const menuBtn = document.createElement("button");
const contactBtn = document.createElement("button");

displayHomepage();