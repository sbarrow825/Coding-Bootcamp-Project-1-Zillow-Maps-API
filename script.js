console.log("Hello");

const searchTerm = document.getElementById("srch-term").value;
const search = document.getElementById("search");

search.addEventListener("click", function(event){
    event.preventDefault();
    console.log(searchTerm);
})

// function searchButton(event) {
//     event.preventDefault();
//     window.open("./result_page.html");
//     console.log(searchTerm)
// }

// const searchButton = document.getElementById("search-button");

// search.addEventListener("click", searchButton);

// function searchButton(){
//     searchButton.style.display = "none";

// }

// if(typeof(Storage)!=="undefined")
//   {
//      $('#button').on('click',function(){
//         localStorage.clickedDiv = $(this).attr('id');
//         $(this).hide();
//      });
//   }
// else
//   {
//      $(this).hide();
//   }