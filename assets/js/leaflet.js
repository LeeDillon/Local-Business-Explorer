// console.log(resultsArray)
function plotMap(resultsArray) {

    let map = L.map('map').setView([51.505, -0.09], 13);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        // minZoom: 15,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);


    let circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 250
    }).addTo(map);


    let popup = L.popup()
        .setLatLng([51.513, -0.09])
        .setContent("I am a standalone popup.")
        .openOn(map);

    for (let i = 0; i < resultsArray.length; i++) {
        const lat = resultsArray[i].location[0];
        const lon = resultsArray[i].location[1];
        // console.log(resultsArray)
        const marker = L.marker([lat, lon]).addTo(map);
        console.log(lat);
    }

    function onMapClick(e) {
        popup
            .setLatLng(e.latlng)
            .setContent("You clicked the map at " + e.latlng.toString())
            .openOn(map);
    }



    map.on('click', onMapClick);

};