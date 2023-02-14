let lat;
let lon;
let map;
let marker;

function findMe() {

    navigator.geolocation.getCurrentPosition((position) => {

        lat = position.coords.latitude;
        lon = position.coords.longitude;
      
        map = L.map('map').setView([lat, lon], 17);
    
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
          maxZoom: 19,
          attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        }).addTo(map);
      
        marker = L.marker([lat, lon]).addTo(map);
                
    });
};

function followMe(position) {

  console.log("position: ", position);
  lat = position.coords.latitude;
  lon = position.coords.longitude;

  map = L.map('map').setView([lat, lon], 17);

  L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);

  marker = L.marker([lat, lon]).addTo(map);
          
};

function stopFollowing() {
  navigator.geolocation.clearWatch(id);
};

function errorFunc() {
  console.log("something bad happened!");
}

let options = {
  enableHighAccuracy: true,
  timeout: 1000,
  maximumAge: 0
};

id = navigator.geolocation.watchPosition(followMe, errorFunc, options);



// function followMe() {
    
//     navigator.geolocation.watchPosition((position) => {
        
//         lat = position.coords.latitude;
//         lon = position.coords.longitude;
      
//         map = L.map('map').setView([lat, lon], 17);
    
//         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//           maxZoom: 19,
//           attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
//         }).addTo(map);
      
//         marker = L.marker([lat, lon]).addTo(map);
                
//     });
// };