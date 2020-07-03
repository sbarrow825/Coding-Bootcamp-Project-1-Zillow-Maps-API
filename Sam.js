$(document).ready(function () {

    // $(document).on("click", ".search-button", getZillowInfo);

    // function initMap() {
    //     var map = new google.maps.Map(document.getElementById("map"), {
    //         zoom: 8,
    //         center: { lat: 35.717, lng: 139.731 }
    //     });
    // }


    var lat = 48.962940;
    var lng = -122.425080;

    var mapOptions = {
        zoom: 8,
        mapTypeId: 'roadmap',
        center: {
            lat: lat,
            lng: lng
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
    
    $.ajax(settings).done(function (response) {
        for (i = 0; i <= response.listings.length - 1; i += 1) {
            var newLat = response.listings[i].latitude;
            var newLng = response.listings[i].longitude;
            new google.maps.Marker({
                label: response.listings[i].address,
                position: {
                    lng: newLng,
                    lat: newLat
                },
                map: map
            });
        }
    })
});