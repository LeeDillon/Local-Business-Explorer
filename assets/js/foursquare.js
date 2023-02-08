$(document).ready(function () {


    // Variables needed for API call
    var apiURL = "https://api.foursquare.com/v3/places/search";
    var key = "fsq35dGw8MR3i1aS2Szjz+ZWoEvdc58TSQd57mxpQMRjvrY=";
    var searchString = "chinese";
    //Location string being overridden by IP address
    var locationString = "paris";
    var queryURL;

    // Main function that runs search and populates page with results
    function performSearch(searchString, locationString) {

        queryURL = apiURL + "?query=" + searchString + "?near=" + locationString;
        console.log(queryURL)

        var req = new XMLHttpRequest();
        req.open("GET", queryURL);

        req.setRequestHeader("Authorization", key);
        req.setRequestHeader("accept", "application/json");

        req.onreadystatechange = function () {
            if (req.readyState === 4) {
                console.log(req.status);
                console.log(req.responseText);
                console.log(queryURL)

            }
        };

        req.send();
    }

    performSearch(searchString, locationString);
})