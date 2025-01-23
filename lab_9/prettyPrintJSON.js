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
        prettyPrintJSON(jsondata);
    });

}

function prettyPrintJSON(jsondata) {
    var pretty = JSON.stringify(jsondata, null, 4);
    $("#resultsbox").append("<pre>" + pretty + "</pre>");
}