import TofuScramble from './tofu-scramble.jpg';
import SmoothieBowl from './smoothie-bowl.jpg';
import PancakesWaffles from './pancakes-waffles.jpg';

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

  const menuItemSmoothieBowl = document.createElement("div");
  menuItemSmoothieBowl.classList.add("menu-item");
  menuContainer.appendChild(menuItemSmoothieBowl);

  const smoothieBowlImage = document.createElement("img");
  smoothieBowlImage.classList.add("menu-image");
  smoothieBowlImage.src = SmoothieBowl;
  menuItemSmoothieBowl.appendChild(smoothieBowlImage);

  const smoothieItemContainer = document.createElement("div");
  smoothieItemContainer.classList.add("menu-item-container");
  menuItemSmoothieBowl.appendChild(smoothieItemContainer);

  const smoothieBowlItemName = document.createElement("div");
  smoothieBowlItemName.classList.add("menu-item-name");
  smoothieBowlItemName.textContent = "SMOOTHIE BOWL";
  smoothieItemContainer.appendChild(smoothieBowlItemName);

  const smoothieBowlItemPrice = document.createElement("div");
  smoothieBowlItemPrice.classList.add("menu-item-price");
  smoothieBowlItemPrice.textContent = "$11.49";
  smoothieItemContainer.appendChild(smoothieBowlItemPrice);

  const smoothieBowlItemIngredients = document.createElement("div");
  smoothieBowlItemIngredients.setAttribute("id", "smoothie-bowl-choice");
  smoothieBowlItemIngredients.textContent = "CHOOSE FROM:";
  smoothieItemContainer.appendChild(smoothieBowlItemIngredients);

  const smoothieBowlTypeContainer = document.createElement("ul");
  smoothieBowlTypeContainer.setAttribute("id", "smoothie-bowl-type-container");
  smoothieItemContainer.appendChild(smoothieBowlTypeContainer);

  const smoothieBowlTypeBanana = document.createElement("li");
  smoothieBowlTypeBanana.classList.add("smoothie-bowl-type");
  smoothieBowlTypeBanana.textContent = "Pineapple, Banana, and Peach";
  smoothieBowlTypeContainer.appendChild(smoothieBowlTypeBanana);

  const smoothieBowlTypeRaspberry = document.createElement("li");
  smoothieBowlTypeRaspberry.classList.add("smoothie-bowl-type");
  smoothieBowlTypeRaspberry.textContent = "Almond Butter and Raspberry";
  smoothieBowlTypeContainer.appendChild(smoothieBowlTypeRaspberry);

  const smoothieBowlTypeBlueberry = document.createElement("li");
  smoothieBowlTypeBlueberry.classList.add("smoothie-bowl-type");
  smoothieBowlTypeBlueberry.textContent = "Blueberry, Spinach, and Pineapple";
  smoothieBowlTypeContainer.appendChild(smoothieBowlTypeBlueberry);

  const smoothieBowlTypeCoconut = document.createElement("li");
  smoothieBowlTypeCoconut.classList.add("smoothie-bowl-type");
  smoothieBowlTypeCoconut.textContent = "Coconut Açai";
  smoothieBowlTypeContainer.appendChild(smoothieBowlTypeCoconut);

  const menuItemPancakesWaffles = document.createElement("div");
  menuItemPancakesWaffles.classList.add("menu-item");
  menuContainer.appendChild(menuItemPancakesWaffles);

  const pancakesWafflesImage = document.createElement("img");
  pancakesWafflesImage.classList.add("menu-image");
  pancakesWafflesImage.src = PancakesWaffles;
  menuItemPancakesWaffles.appendChild(pancakesWafflesImage);

  const pancakesItemContainer = document.createElement("div");
  pancakesItemContainer.classList.add("menu-item-container");
  menuItemPancakesWaffles.appendChild(pancakesItemContainer);

  const pancakesWafflesItemName = document.createElement("div");
  pancakesWafflesItemName.classList.add("menu-item-name");
  pancakesWafflesItemName.textContent = "PANCAKES AND WAFFLES";
  pancakesItemContainer.appendChild(pancakesWafflesItemName);

  const pancakesWafflesItemPrice = document.createElement("div");
  pancakesWafflesItemPrice.classList.add("menu-item-price");
  pancakesWafflesItemPrice.textContent = "$8.99";
  pancakesItemContainer.appendChild(pancakesWafflesItemPrice);

  const pancakesWafflesItemIngredients = document.createElement("div");
  pancakesWafflesItemIngredients.classList.add("menu-item-ingredients");
  pancakesWafflesItemIngredients.textContent = "Light and fluffy, made with gluten-free flour.";
  pancakesItemContainer.appendChild(pancakesWafflesItemIngredients);
};

export { displayMenu };