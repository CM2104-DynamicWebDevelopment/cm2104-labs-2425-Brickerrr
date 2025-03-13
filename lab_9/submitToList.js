$(function() {
    alert("document ready");

    $("#searchform").submit(function(){
        var searchTerms = $("#searchTerms").val();
        addItemToList(searchTerms);
        return false;
    });
});

function addItemToList (item) {
    $("#results").append("<li>" + item + "</li>");
}