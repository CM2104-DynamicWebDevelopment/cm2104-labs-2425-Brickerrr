$(function() {
    alert("document ready");

    $("#searchform").submit(function(){
        var searchTerms = $("#searchTerms").val();
        getResultsFromOMDB(searchTerms);
        return false;
    });
});

function getResultsFromOMDB(searchTerms) {
    var url = "http://www.omdbapi.com/?apikey=8be64272&s=" + searchTerms;
    $.getJSON(url, function(jsondata) {
        printJSON(jsondata);
    });

}

function printJSON(jsondata) {
    var normal = JSON.stringify(jsondata);
    $("#resultsbox").append("<p>" + normal + "</p>");
}