
function showResultsPage() {
    $("#jumbotron").hide();
    $("#results-page").show();
    $(".search-bar").show();
    $(".searchIcon").removeAttr("hidden");
}

$("#search-button").click(function () {
    showResultsPage()
});

