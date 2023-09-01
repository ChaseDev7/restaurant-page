import Cafe from './cafe.jpg';

function displayHomepage () {
  const content = document.querySelector("#content");
  const homepageContainer = document.createElement("div");
  homepageContainer.setAttribute("id", "homepage-container");

  content.appendChild(homepageContainer);

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "SUNRISE CAFE";

  homepageContainer.appendChild(restaurantName);

  const cafeImage = document.createElement("img");
  cafeImage.src = Cafe;

  homepageContainer.appendChild(cafeImage);

  const restaurantTagline = document.createElement("h3");
  restaurantTagline.textContent = "Enjoy breakfast with a view like no other!";

  homepageContainer.appendChild(restaurantTagline);
};

export { displayHomepage };