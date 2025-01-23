$(function() {
    alert("document ready");

    $("#searchform").submit(function(){
        //get current value and add item to list
        var searchTerms = $("#searchTerms").val();
        //call search function
        getResultsFromOMDB(searchTerms);
        return false;
    });
});

function getResultsFromOMDB(searchTerms) {
    //call api using ajax
    //build url for request
    var url = "http://www.omdbapi.com/?apikey=8be64272&s=" + searchTerms;
    //use jquery json shortcut
    $.getJSON(url, function(jsondata) {
        //handle results
        addResultTitles(jsondata);
    });

}

function addResultTitles(jsondata) {
    //create string to contain our html code to inject
   var htmlstring = "";
   //iterate over the colletion of results
   jsondata.forEach(function(element) {
    var title = element.Title;
    htmlstring += "<li>" + title + "</li>";
   });
   //inject the html into your empty list
   $("#results").html(htmlstring);
}