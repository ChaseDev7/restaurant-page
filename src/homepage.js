import Cafe from './cafe.jpg';

function displayHomepage () {
  const content = document.querySelector("#content");
  const homepageContainer = document.createElement("div");
  homepageContainer.setAttribute("id", "homepage-container");

  content.appendChild(homepageContainer);

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "SUNRISE CAFE";

  homepageContainer.appendChild(restaurantName);

  const pageSelected = document.createElement("h2");
  pageSelected.textContent = "HOME";

  homepageContainer.appendChild(pageSelected);

  const cafeImage = document.createElement("img");
  cafeImage.src = Cafe;

  homepageContainer.appendChild(cafeImage);

  const restaurantTagline = document.createElement("h3");
  restaurantTagline.textContent = "Enjoy breakfast with a view like no other!";

  homepageContainer.appendChild(restaurantTagline);

  const restaurantInfo = document.createElement("p");
  restaurantInfo.setAttribute("id", "restaurant-info");
  restaurantInfo.textContent = "The Sunrise Cafe is where you want to be if you crave breakfast and the sights of the city surrounding you. We offer a wide selection of plant-based breakfast options for you to choose from. Please see the menu above for more!";

  homepageContainer.appendChild(restaurantInfo);
};

export { displayHomepage };