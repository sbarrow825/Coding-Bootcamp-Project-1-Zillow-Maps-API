$(document).ready(function () {

    // $(document).on("click", ".search-button", getZillowInfo);

    // function initMap() {
    //     var map = new google.maps.Map(document.getElementById("map"), {
    //         zoom: 8,
    //         center: { lat: 35.717, lng: 139.731 }
    //     });
    // }

    // initMap();

    // function getZillowInfo() {

    //     var cityName = $(this).text();
    //     var address = "9241 13th Ave SW"
    //     var proxy = "https://cors-anywhere.herokuapp.com/";
    //     var queryURL = proxy + "https://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz1hvnpswvt3f_39zrb&address=" + address + "&citystatezip=" + cityName;


    //     $.ajax({
    //         type: "GET",
    //         url: queryURL
    //       }).then((res) => {
    //         console.log(res);
    //       });

    // }

    var lat = 37.773972;
    var lng = -122.431297;

    var mapOptions = {
        zoom: 8,
        mapTypeId: 'roadmap',
        center: {
            lat: 37.773972,
            lng: -122.431297
        }
    };

    var map = new google.maps.Map(document.getElementById('map'), mapOptions);

    new google.maps.Marker({
        position: {
            lat: lat,
            lng: lng,
        },
        map: map
    });
});