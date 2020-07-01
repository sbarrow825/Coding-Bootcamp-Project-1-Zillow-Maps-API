$(document).ready(function () {

    $(document).on("click", ".search-button", getZillowInfo);

    function getZillowInfo() {
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