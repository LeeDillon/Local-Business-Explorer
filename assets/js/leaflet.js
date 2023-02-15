// console.log(resultsArray)
function plotMap(resultsArray) {

    let averageLat = 0.0;
    let averageLon = 0.0;

    for (let i = 0; i < resultsArray.length; i++) {
        averageLat += resultsArray[i].location[0];
        averageLon += resultsArray[i].location[1];
    };

    averageLat = averageLat / resultsArray.length;
    averageLon = averageLon / resultsArray.length;

    let map = L.map('map').setView([averageLat, averageLon], 15);

    for (let i = 0; i < resultsArray.length; i++) {
        const lat = resultsArray[i].location[0];
        const lon = resultsArray[i].location[1];
        const pinName = resultsArray[i].name;
        const marker = L.marker([lat, lon], {'title': pinName}).addTo(map);
        // marker._icon.title = "another title";
        marker.bindPopup(pinName); // be nice to make this business name pop-up label on click: BOLD text
    };
    // const marker = L.marker([lat, lon], {'title':'initial title'}).addTo(map);


    console.log(averageLat);
    console.log(averageLon);
    console.log(resultsArray);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        // minZoom: 15,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    // map.on('click', onMapClick);



    
};    


    // }).addTo(map);


    // let popup = L.popup()
    //     .setLatLng([51.513, -0.09])
    //     .setContent("I am a standalone popup.")
    //     .openOn(map);


