$(document).ready(function () {


    // Variables needed for API call
    var apiURL = "https://api.foursquare.com/v3/places/search";
    var key = "fsq35dGw8MR3i1aS2Szjz+ZWoEvdc58TSQd57mxpQMRjvrY=";
    var searchString = "chinese";
    //Location string being overridden by IP address
    var locationString = "paris";
    // var latitude = "52.656755854586464";
    // var longitude = "-7.308114483968761";

    var queryURL;

    var resultsArray = [];
    




    // Main function that runs search and populates page with results
    function performSearch() {

        queryURL = apiURL + "?query=" + searchString + "&near=" + locationString;
        // queryURL = apiURL + "?query=" + searchString + "&ll=" + latitude + "," + longtitude;
        console.log(queryURL)

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
                    const lat = response.results[i].geocodes.main.latitude;

                    const lon = response.results[i].geocodes.main.longitude;

                    const pinCoord = [lat, lon];
                    const pin = {
                        name: response.results[i].name,
                        location: pinCoord,
                    }

                    resultsArray.push(pin);


                }
                

            })
            .catch(err => console.error(err));

    }

    performSearch();
})


module.exports = { resultsArray };