$(document).ready(function () {

    function loadSavedCities() {
        if (!localStorage.getItem("savedCities")) {
            return;
        }
        var savedCities = JSON.parse(localStorage.getItem("savedCities"));
        $(".saved-buttons").empty();
        for (i = 0; i < savedCities.length; i += 1) {
            var newButton = $("<button>");
            newButton.addClass("saved-button");
            newButton.text(savedCities[i]);
            $(".saved-buttons").append(newButton);
            $(".saved-buttons").append("<br>");
            $(".saved-buttons").append("<br>");
        }

    }

    function saveCity(cityName) {
        if (!localStorage.getItem("savedCities")) {
            var savedCities = [cityName];
        } else {
            var savedCities = JSON.parse(localStorage.getItem("savedCities"));
            savedCities.push(cityName);
        }
        localStorage.setItem("savedCities", JSON.stringify(savedCities));
        loadSavedCities();
    }

    $(document).on("click", ".saved-button", function () {
        var cityName = $(this).text();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=a0a661e14f2fa47b84d518a6c1889db2"

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var cityDisplayName = response.name;
                $("#city-name").text(cityDisplayName);
                $("#city-date").text(moment().format('M/DD/YYYY'));
                var cityTemp = response.main.temp;
                var cityTempFarhenheit = ((parseFloat(cityTemp) - 273.15) * 1.8 + 32).toFixed(2);
                $("#city-temperature").text(cityTempFarhenheit);
                var cityHumidity = response.main.humidity;
                $("#city-humidity").text(cityHumidity);
                var cityWindSpeed = response.wind.speed;
                $("#city-windspeed").text(cityWindSpeed);

                var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=a0a661e14f2fa47b84d518a6c1889db2" + "&lat=" + response.coord.lat + "&lon=" + response.coord.lon

                $.ajax({
                    url: queryURL,
                    method: "GET"
                })
                    .then(function (response2) {
                        var cityUVIndex = response2.value;
                        $("#city-uvindex").text(cityUVIndex);
                        var cityUVIndex = parseFloat(cityUVIndex);
                        if (cityUVIndex >= 11) {
                            $("#city-uvindex").css("background-color", "purple");
                        } else if (cityUVIndex >= 8) {
                            $("#city-uvindex").css("background-color", "red");
                        } else if (cityUVIndex >= 6) {
                            $("#city-uvindex").css("background-color", "orange");
                        } else if (cityUVIndex >= 3) {
                            $("#city-uvindex").css("background-color", "yellow");
                        } else {
                            $("#city-uvindex").css("background-color", "green");
                        }
                    })


            }


            )

        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=a0a661e14f2fa47b84d518a6c1889db2"

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
                for (i = 1; i < 6; i += 1) {
                    var nextDay = moment().add(i, "days").format("YYYY-MM-DD");
                    var displayDate = moment().add(i, "days").format("M/DD/YYYY");
                    console.log(nextDay);
                    for (j = 0; j < response.list.length; j += 1) {
                        if (response.list[j].dt_txt === nextDay + " 12:00:00") {
                            if (i === 1) {
                                $("#1-date").text(displayDate);
                                $("#1-date-temperature").text(((response.list[j].main.temp - 273.15) * 1.8 + 32).toFixed(2));
                                $("#1-date-humidity").text(response.list[j].main.humidity);
                            } else if (i === 2) {
                                $("#2-date").text(displayDate);
                                $("#2-date-temperature").text(((response.list[j].main.temp - 273.15) * 1.8 + 32).toFixed(2));
                                $("#2-date-humidity").text(response.list[j].main.humidity);
                            } else if (i === 3) {
                                $("#3-date").text(displayDate);
                                $("#3-date-temperature").text(((response.list[j].main.temp - 273.15) * 1.8 + 32).toFixed(2));
                                $("#3-date-humidity").text(response.list[j].main.humidity);
                            } else if (i === 4) {
                                $("#4-date").text(displayDate);
                                $("#4-date-temperature").text(((response.list[j].main.temp - 273.15) * 1.8 + 32).toFixed(2));
                                $("#4-date-humidity").text(response.list[j].main.humidity);
                            } else {
                                $("#5-date").text(displayDate);
                                $("#5-date-temperature").text(((response.list[j].main.temp - 273.15) * 1.8 + 32).toFixed(2));
                                $("#5-date-humidity").text(response.list[j].main.humidity);
                            }
                        }
                    }
                }
            })
    })

    $(document).on("click", ".search-button", function () {

        var cityName = $("#city-text").val();
        var queryURL = "https://api.openweathermap.org/data/2.5/weather?q=" + cityName + "&appid=a0a661e14f2fa47b84d518a6c1889db2"

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                var cityDisplayName = response.name;
                $("#city-name").text(cityDisplayName);
                $("#city-date").text(moment().format('M/DD/YYYY'));
                var cityTemp = response.main.temp;
                var cityTempFarhenheit = ((parseFloat(cityTemp) - 273.15) * 1.8 + 32).toFixed(2);
                $("#city-temperature").text(cityTempFarhenheit);
                var cityHumidity = response.main.humidity;
                $("#city-humidity").text(cityHumidity);
                var cityWindSpeed = response.wind.speed;
                $("#city-windspeed").text(cityWindSpeed);

                var queryURL = "https://api.openweathermap.org/data/2.5/uvi?appid=a0a661e14f2fa47b84d518a6c1889db2" + "&lat=" + response.coord.lat + "&lon=" + response.coord.lon

                $.ajax({
                    url: queryURL,
                    method: "GET"
                })
                    .then(function (response2) {
                        var cityUVIndex = response2.value;
                        $("#city-uvindex").text(cityUVIndex);
                        var cityUVIndex = parseFloat(cityUVIndex);
                        if (cityUVIndex >= 11) {
                            $("#city-uvindex").css("background-color", "purple");
                        } else if (cityUVIndex >= 8) {
                            $("#city-uvindex").css("background-color", "red");
                        } else if (cityUVIndex >= 6) {
                            $("#city-uvindex").css("background-color", "orange");
                        } else if (cityUVIndex >= 3) {
                            $("#city-uvindex").css("background-color", "yellow");
                        } else {
                            $("#city-uvindex").css("background-color", "green");
                        }
                    })


                    saveCity(response.name);
            }


            )

        var queryURL = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=a0a661e14f2fa47b84d518a6c1889db2"

        $.ajax({
            url: queryURL,
            method: "GET"
        })
            .then(function (response) {
                console.log(response);
                for (i = 1; i < 6; i += 1) {
                    var nextDay = moment().add(i, "days").format("YYYY-MM-DD");
                    var displayDate = moment().add(i, "days").format("M/DD/YYYY");
                    console.log(nextDay);
                    for (j = 0; j < response.list.length; j += 1) {
                        if (response.list[j].dt_txt === nextDay + " 12:00:00") {
                            if (i === 1) {
                                $("#1-date").text(displayDate);
                                $("#1-date-temperature").text(((response.list[j].main.temp - 273.15) * 1.8 + 32).toFixed(2));
                                $("#1-date-humidity").text(response.list[j].main.humidity);
                            } else if (i === 2) {
                                $("#2-date").text(displayDate);
                                $("#2-date-temperature").text(((response.list[j].main.temp - 273.15) * 1.8 + 32).toFixed(2));
                                $("#2-date-humidity").text(response.list[j].main.humidity);
                            } else if (i === 3) {
                                $("#3-date").text(displayDate);
                                $("#3-date-temperature").text(((response.list[j].main.temp - 273.15) * 1.8 + 32).toFixed(2));
                                $("#3-date-humidity").text(response.list[j].main.humidity);
                            } else if (i === 4) {
                                $("#4-date").text(displayDate);
                                $("#4-date-temperature").text(((response.list[j].main.temp - 273.15) * 1.8 + 32).toFixed(2));
                                $("#4-date-humidity").text(response.list[j].main.humidity);
                            } else {
                                $("#5-date").text(displayDate);
                                $("#5-date-temperature").text(((response.list[j].main.temp - 273.15) * 1.8 + 32).toFixed(2));
                                $("#5-date-humidity").text(response.list[j].main.humidity);
                            }
                        }
                    }
                }
            })
    })

    loadSavedCities();
});