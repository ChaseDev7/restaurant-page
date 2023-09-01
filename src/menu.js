import TofuScramble from './tofu-scramble.jpg';

function displayMenu() {
  const body = document.querySelector("body");
  const content = document.querySelector("#content");

  body.appendChild(content);

  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "homepage-container");

  content.appendChild(menuContainer);

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "SUNRISE CAFE";

  menuContainer.appendChild(restaurantName);

  const pageSelected = document.createElement("h2");
  pageSelected.textContent = "MENU";

  menuContainer.appendChild(pageSelected);

  const menuItemTofuScramble = document.createElement("div");
  menuItemTofuScramble.classList.add("menu-item");

  menuContainer.appendChild(menuItemTofuScramble);

  const tofuScrambleImage = document.createElement("img");
  tofuScrambleImage.classList.add("menu-image");
  tofuScrambleImage.src = TofuScramble;

  menuItemTofuScramble.appendChild(tofuScrambleImage);
}

export { displayMenu };