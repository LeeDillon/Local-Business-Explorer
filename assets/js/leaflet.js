// console.log(resultsArray)
function plotMap(resultsArray) {
    
console.log(resultsArray);

    
for (let index = 0; index < resultsArray.length; index++) {
    const lat = resultsArray[index].location[0];
    const lon = resultsArray[index].location[1];
    console.log(resultsArray)
    const marker = L.marker([lat, lon]).addTo(map);
    console.log(lat);
}

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

function onMapClick(e) {
    popup
        .setLatLng(e.latlng)
        .setContent("You clicked the map at " + e.latlng.toString())
        .openOn(map);
}

map.on('click', onMapClick);

};