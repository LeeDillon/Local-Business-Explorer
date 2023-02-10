// Variables needed for API call
var apiURL = "https://api.foursquare.com/v3/places/search";
var key = "fsq35dGw8MR3i1aS2Szjz+ZWoEvdc58TSQd57mxpQMRjvrY=";
var searchString = "";
var locationString = "";
var queryURL;
// Empty array to store result objects from API call
var resultsArray = [];

// Onclick function that runs when submit button is clicked
$("#search-button").on("click", function () {
    // Get user input and run main search function using parameters
    searchString = $("#search-input").val();
    locationString = $("#location-input").val();
    performSearch(searchString, locationString);
});

// Main function that runs search and gets a list of 10 search results
function performSearch(searchString, locationString) {
    // create query url using user input parameters
    queryURL = apiURL + "?query=" + searchString + "&near=" + locationString;
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            Authorization: key
        }
    };

    fetch(queryURL, options)
        .then(response => response.json())
        .then(response => {
            console.log(response)
            for (let i = 0; i < response.results.length; i++) {
                // For each item returned extract the information we want and store in an object
                const lat = response.results[i].geocodes.main.latitude;
                const lon = response.results[i].geocodes.main.longitude;
                const pinCoord = [lat, lon];
                const pin = {
                    name: response.results[i].name,
                    location: pinCoord,
                    category: response.results[i].categories[0].name,
                    icon: response.results[i].categories[0].icon.prefix + response.results[i].categories[0].icon.suffix,
                    address: response.results[i].location,
                }
                // Add pin objects to results array
                resultsArray.push(pin);
            }
        })
        // Catch any errors and log to console
        .catch(err => console.error(err));
}
// Perform search on page load - will change to onclick of a submit button once html page is created
// performSearch();