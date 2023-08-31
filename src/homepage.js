import Cafe from './cafe.jpg';

function displayHomepage () {
  const content = document.querySelector("#content");

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "SUNRISE CAFE";

  content.appendChild(restaurantName);

  const cafeImage = document.createElement("img");
  cafeImage.src = Cafe;

  content.appendChild(cafeImage);

  const restaurantTagline = document.createElement("h3");
  restaurantTagline.textContent = "Enjoy breakfast with a view like no other!";

  content.appendChild(restaurantTagline);
};

export { displayHomepage };