console.log("Hello");

const searchTerm = document.querySelector("#srch-trm");
const searchButton = document.querySelector("#find-address");
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


// const searchTerm = document.getElementById("srch-term").value;
// const search = document.getElementById("search");

// search.addEventListener("click", function(event){
//     event.preventDefault();
//     console.log(searchTerm);
// })