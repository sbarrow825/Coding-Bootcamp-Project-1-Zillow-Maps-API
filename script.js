var lng;
var workAddress;
var key;
var queryURL;
var map;
var newLat;
var newLng;
var listingAddress;
var listingPrice;
var commuteTimeQueryURL;
var commuteTime;

var searchTerm = document.querySelector("#srch-trm");
var searchButton = document.querySelector("#find-address");
var homeButton = document.querySelector("#home-button");
var buttonPage = document.querySelector(".button-page");
var searchPage = document.querySelector(".search-page");

let address;

searchButton.addEventListener("click", function (event) {
  event.preventDefault();
  buttonPage.style.display = "none";
  searchPage.setAttribute("style", "display: block");
  console.log("hello")
  getSearchReults();
});

homeButton.addEventListener("click", function (event) {
  event.preventDefault();
  buttonPage.style.display = "block";
  searchPage.style.display = "none";
});


function getSearchReults() {
  var workAddress = $("#srch-trm").val();
  console.log(workAddress);
  var key = "AIzaSyCi3dzreMrxNzmaHrULhs_SCJRMpzt8FbE";
  var queryURL = "https://maps.googleapis.com/maps/api/geocode/json?address=" + workAddress + "&key=AIzaSyCi3dzreMrxNzmaHrULhs_SCJRMpzt8FbE"
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {
    console.log(response);
    var lat = response.results[0].geometry.location.lat;
    var lng = response.results[0].geometry.location.lng;

    // var mapOptions = {
    //   zoom: 15,
    //   mapTypeId: 'roadmap',
    //   center: {
    //     lat: lat,
    //     lng: lng
    //   }
    // };

    var map = L.map('map', {
      center: [51.505, -0.09],
      zoom: 13
  });

    // new google.maps.Marker({
    //   label: "Searched Address",
    //   position: {
    //     lat: lat,
    //     lng: lng,
    //   },
    //   map: map
    // })

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://realtymole-rental-estimate-v1.p.rapidapi.com/rentalPrice?compCount=10&longitude=" + lng + "&latitude=" + lat,
      "method": "GET",
      "headers": {
        "x-rapidapi-host": "realtymole-rental-estimate-v1.p.rapidapi.com",
        "x-rapidapi-key": "e6fb33abd8msh28d4bbf4c53771cp14f30ajsn27f9f4b14f17"
      }
    }

    $.ajax(settings).then(function (response1) {
      for (i = 0; i <= response1.listings.length - 1; i += 1) {
        var newLat = response1.listings[i].latitude;
        var newLng = response1.listings[i].longitude;
        // new google.maps.Marker({
        //   label: response1.listings[i].address,
        //   position: {
        //     lng: newLng,
        //     lat: newLat
        //   },
        //   map: map
        // })
        var listingAddress = response1.listings[i].formattedAddress;
        var listingPrice = response1.listings[i].price;
        var commuteTimeQueryURL = "https://cors-anywhere.herokuapp.com/https://maps.googleapis.com/maps/api/distancematrix/json?units=imperial&origins=" + listingAddress + "&destinations=" + workAddress + "&key=AIzaSyCi3dzreMrxNzmaHrULhs_SCJRMpzt8FbE"
        $.ajax({
          url: commuteTimeQueryURL,
          method: "GET",
        }).then(function (response) {
          var commuteTime = response.rows[0].elements[0].duration.text;
          var divCard = $("<div>");
          divCard.attr("class", "card m-2");
          var imagTag = $("<img>");
          var linkTag = $("<a>");
          //Address of the link 
          linkTag.attr("href", "#");
          linkTag.attr("class", "btn-warning")
          // address of the image to show 
          imagTag.attr("src", "#");
          imagTag.attr("class", "card-img-top");
          // insert picture name from response 
          imagTag.attr("atl", "picture");
          linkTag.append(imagTag);
          divCard.append(linkTag);
          var divCardBody = $("<div>");
          divCardBody.attr("class", "card-body");
          var h5text = $("<h5>").text(listingAddress);
          h5text.attr("class", "card-title");
          var ptext = $("<p>").text("Price: $" + listingPrice);
          ptext.attr("class", "card-text");
          divCardBody.append(h5text);
          divCardBody.append(ptext);
          var ptext2 = $("<p>").text("Commute time: " + commuteTime);
          ptext2.attr("class", "card-text");
          divCardBody.append(ptext2);
          divCard.append(divCardBody);
          //Appending to the div card
          $("#response-cards").append(divCard);
        })
      }
    })
  });
}