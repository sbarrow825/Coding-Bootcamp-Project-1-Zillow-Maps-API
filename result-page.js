//Function to Generate response cards 

var cityName = "San Francisco";
var key= "fc8bffadcdca6a94d021c093eac22797";
var queryURL3 = "https://api.openweathermap.org/data/2.5/forecast?q=" + cityName + "&appid=" + key;
$.ajax({
url: queryURL3,
method: "GET"
}).then(function(response) { 
    // $("#response-cards").empty();
    console.log(response.list);
    for(var i=0;i<=response.list.length; i++){
        console.log(response.list[i]);
        var divCard =  $("<div>");
        divCard.attr("class", "card m-2");
        // This reduces the size of the card
        // divCard.attr("style","width: 18rem;");
        var imagTag = $("<img>");
        var linkTag = $("<a>");
        //Address of the link 
        linkTag.attr("href", "#");
        linkTag.attr("class", "btn-warning")
        // address of the image to show 
        imagTag.attr("src","#");
        imagTag.attr("class", "card-img-top");
        // insert picture name from response 
        imagTag.attr("atl","picture");
        linkTag.append(imagTag);
        divCard.append(linkTag);
        var divCardBody  = $("<div>");
        divCardBody.attr("class","card-body");
        var h5text = $("<h5>").text("Value here");
        h5text.attr("class","card-title");
        var ptext = $("<p>").text("values here");
        ptext.attr("class", "card-text");
        var ptext2 = $("<p>").text("values here");
        ptext2.attr("class", "card-text");
        divCardBody.append(h5text);
        divCardBody.append(ptext);
        divCardBody.append(ptext2);
        divCard.append(divCardBody);
        //Appending to the div card
        $("#response-cards").append(divCard);

    }
})   

