$(document).ready(function () {

    function setCookie(cname, cvalue) {
        document.cookie = cname + "=" + cvalue + ";SameSite: None, Secure";
    }

    $(document).on("click", ".search-button", getZillowInfo);

    function getZillowInfo() {
        var settings = {
            "crossDomain": true,
            "headers": {
                "accept": "application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Credentials": "true",
            },
            "withCredentials": "true",
            url: "https://www.zillow.com/webservice/GetSearchResults.htm?zws-id=<ZWSID>&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA",
            dataType: 'json',
            crossDomain: "true",
            xhrFields: {
                withCredentials: true
            },
            dataType: "jasonp",
            method: "GET"
        }
        console.log("working");
        // var cityName = $(this).text();
        // var address = "9241 13th Ave SW"
        var proxy = "https://cors-anywhere.herokuapp.com/";
        // var queryURL = "https://www.zillow.com/webservice/GetSearchResults.htm?zws-id=<ZWSID>&address=2114+Bigelow+Ave&citystatezip=Seattle%2C+WA"


        $.ajax({
            type: "GET",
            url:
              "https://cors-anywhere.herokuapp.com/http://www.zillow.com/webservice/GetSearchResults.htm?zws-id=X1-ZWz1hvnpswvt3f_39zrb&address=2114 Bigelow Ave&citystatezip=Seattle, WA",
          }).then((res) => {
            console.log(res);
          });

    }
});