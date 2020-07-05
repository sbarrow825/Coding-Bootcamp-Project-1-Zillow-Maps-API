console.log("Hello");

const searchTerm = document.querySelector("#srch-trm");
const searchButton = document.querySelector("#find-address");
const homeButton = document.querySelector("#home-button");
const buttonPage = document.querySelector(".button-page");
const searchPage = document.querySelector(".search-page");

let address;

searchButton.addEventListener("click", function(event) {
  event.preventDefault();
  address = searchTerm.value;
  console.log(address);
  buttonPage.style.display = "none";
  searchPage.setAttribute("style", "display: block");
});

homeButton.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(address);
    buttonPage.style.display = "block";
    searchPage.style.display = "none";
  });