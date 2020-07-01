$(document).ready(function () {

    $(document).on("click", ".search-button", getZillowInfo);

    function getZillowInfo() {
        var settings = {
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Credentials": "true"
        }
        console.log("working");
        var cityName = $(this).text();
        var address = "9241 13th Ave SW"
        var proxy = "https://cors-anywhere.herokuapp.com/";
        var queryURL = "https://www.zillow.com/webservice/GetSearchResults.htm?zws-id=<ZWSID>&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA"

        $.ajax(settings)({
            url: proxy + "https://www.zillow.com/webservice/GetSearchResults.htm?zws-id=<ZWSID>&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA",
            dataType: 'json',
            crossDomain: "true",
            xhrFields: {
                withCredentials: true
            },
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
            })

    }
});

$(document).ready(function () {

    function setCookie(cname, cvalue, domain) {
        document.cookie = cname + "=" + cvalue + ";" + "domain=" + domain + ";HttpOnly;SameSite=None; Secure";
    }
    setCookie("zillow", "zillowcookie", "http://zillow.com")
    console.log(document.cookie);
    // function loadSavedCities() {
    //     if (!localStorage.getItem("savedCities")) {
    //         return;
    //     }
    //     var savedCities = JSON.parse(localStorage.getItem("savedCities"));
    //     $(".saved-buttons").empty();
    //     for (i = 0; i < savedCities.length; i += 1) {
    //         var newButton = $("<button>");
    //         newButton.addClass("saved-button");
    //         newButton.text(savedCities[i]);
    //         $(".saved-buttons").append(newButton);
    //         $(".saved-buttons").append("<br>");
    //         $(".saved-buttons").append("<br>");
    //     }

    // }

    // function saveCity(cityName) {
    //     if (!localStorage.getItem("savedCities")) {
    //         var savedCities = [cityName];
    //     } else {
    //         var savedCities = JSON.parse(localStorage.getItem("savedCities"));
    //         savedCities.push(cityName);
    //     }
    //     localStorage.setItem("savedCities", JSON.stringify(savedCities));
    //     loadSavedCities();
    // }
    var settings = {
        'cache': false,
        'dataType': "jsonp",
        "async": true,
        "crossDomain": true,
        "url": "https://www.zillow.com/webservice/GetSearchResults.htm?zws-id=<ZWSID>&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA",
        "method": "GET",
        "headers": {
            "accept": "application/json",
            "Access-Control-Allow-Origin":"*",
        },
        "withCredentials": "true"
    }

    $(document).on("click", ".search-button", getZillowInfo);

    function getZillowInfo() {
        console.log("working");
        var cityName = $(this).text();
        var address = "9241 13th Ave SW"
        var queryURL = "https://www.zillow.com/webservice/GetSearchResults.htm?zws-id=<ZWSID>&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA"

        $.ajax(settings).done(function (response) {
            console.log("working");
            console.log(response);
  
        });
    }
});

