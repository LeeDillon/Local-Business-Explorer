function plotMap(resultsArray) { // this function takes in the results array and generates a map with a labelled marker for each business

    let averageLat = 0.0; // create variables for averaging both latitude and logitude values
    let averageLon = 0.0; // we use this to center the map on the average of the pins' latitude and longitude

    for (let i = 0; i < resultsArray.length; i++) {
        averageLat += resultsArray[i].location[0];  // loop through the FOURSQUARE results array and append
        averageLon += resultsArray[i].location[1]; // the lat and lon values to our averages variables
    };

    averageLat = averageLat / resultsArray.length;  // obtain the averages by dividing the sum of the values
    averageLon = averageLon / resultsArray.length; // by the length of the array (number of values)

    let map = L.map('map').setView([averageLat, averageLon], 15); // define the map and set the centre point of
                                                                // the viewable area with the average lat lon values
                                                                // set the initial zoom to 15

    for (let i = 0; i < resultsArray.length; i++) {
        const lat = resultsArray[i].location[0];    // for each business in the results array, obtain the latitude
        const lon = resultsArray[i].location[1];    // and longitude, name and postcode.   
        const pinName = resultsArray[i].name;
        const postcode = resultsArray[i].address.postcode;
        const marker = L.marker([lat, lon], {'title': pinName}).addTo(map); // define and create hover tool-tips that show the business name
        marker.bindPopup(`${pinName}  ${postcode}`); // create on-click labels for each business with their name and postcode in the pop-up label
    };

    // console.log(averageLat);    // tests to verify values
    // console.log(averageLon);
    // console.log(resultsArray);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', { // set the map style and look
        maxZoom: 19,                                                // set the max allowed zoom level
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>' // attribution is required by the map developers
    }).addTo(map);

};    



