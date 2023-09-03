function displayContactPage () {
  const body = document.querySelector("body");
  const content = document.querySelector("#content");

  body.appendChild(content);

  const contactPageContainer = document.createElement("div");
  contactPageContainer.setAttribute("id", "contact-page-container");

  content.appendChild(contactPageContainer);

  const restaurantName = document.createElement("h1");
  restaurantName.textContent = "SUNRISE CAFE";

  contactPageContainer.appendChild(restaurantName);

  const pageSelected = document.createElement("h2");
  pageSelected.textContent = "CONTACT";

  contactPageContainer.appendChild(pageSelected);

  const contactInfo = document.createElement("p");
  contactInfo.setAttribute("id", "contact-info");
  contactInfo.textContent = "If you would like to get in touch with us, please do so at the following:";

  contactPageContainer.appendChild(contactInfo);
  
  const contactPhone = document.createElement("p");
  contactPhone.setAttribute("id", "contact-phone");
  contactPhone.textContent = "PHONE: 1-800-NOT-A-NUM";

  contactPageContainer.appendChild(contactPhone);

  const contactEmail = document.createElement("p");
  contactEmail.setAttribute("id", "contact-email");
  contactEmail.textContent = "EMAIL: realemail@notarealemail.com";

  contactPageContainer.appendChild(contactEmail);

  const contactAddress = document.createElement("p");
  contactAddress.setAttribute("id", "contact-address");
  contactAddress.textContent = "ADDRESS: 123 A Real Place, Authentic Town";

  contactPageContainer.appendChild(contactAddress);
};

export { displayContactPage };