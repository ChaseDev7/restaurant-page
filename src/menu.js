import TofuScramble from './tofu-scramble.jpg';

function displayMenu() {
  const body = document.querySelector("body");
  const content = document.querySelector("#content");

  body.appendChild(content);

  const menuContainer = document.createElement("div");
  menuContainer.setAttribute("id", "menu-container");

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

  const tofuItemContainer = document.createElement("div");
  tofuItemContainer.classList.add("menu-item-container");

  menuItemTofuScramble.appendChild(tofuItemContainer);

  const tofuScrambleItemName = document.createElement("div");
  tofuScrambleItemName.classList.add("menu-item-name");

  tofuScrambleItemName.textContent = "TOFU SCRAMBLE";

  tofuItemContainer.appendChild(tofuScrambleItemName);

  const tofuScrambleItemPrice = document.createElement("div");
  tofuScrambleItemPrice.classList.add("menu-item-price");

  tofuScrambleItemPrice.textContent = "$9.99";

  tofuItemContainer.appendChild(tofuScrambleItemPrice);

  const tofuScrambleItemIngredients = document.createElement("div");
  tofuScrambleItemIngredients.classList.add("menu-item-ingredients");

  tofuScrambleItemIngredients.textContent = "INGREDIENTS: tofu, onion, red bell pepper, kale, spice blend.";

  tofuItemContainer.appendChild(tofuScrambleItemIngredients);
}

export { displayMenu };