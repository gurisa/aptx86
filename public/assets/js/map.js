var leaflet = L.map('leaflet-map').setView([-6.221028, 106.791434], 15);

var marker = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ3VyaXNhIiwiYSI6ImNqbmZoNDN3ZzJzY2gzcG9ld3JoMzBjZjIifQ.ToUmEgZPdcmjFptNXFbdQA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZ3VyaXNhIiwiYSI6ImNqbmZoNDN3ZzJzY2gzcG9ld3JoMzBjZjIifQ.ToUmEgZPdcmjFptNXFbdQA'
}).addTo(leaflet); //openOn

// var circle = L.circle([-6.221028, 106.791434], {
//   color: 'red',
//   fillColor: '#f03',
//   fillOpacity: 0.5,
//   radius: 500
// }).addTo(leaflet).bindPopup("Ini sebuah circle.");

// marker.bindPopup("<b>Resto top disini/b><br>yes!").openPopup();

var popup = L.popup();
function onMapClick(e) {
  popup.setLatLng(e.latlng).setContent(e.latlng.toString()).openOn(leaflet);
}
leaflet.on('click', onMapClick);

var places = [
  {location: [-6.221028, 106.791434], name: "Restoran Spanyol"},
  {location: [-6.219912, 106.791239], name: "Warung Kopi"},
  {location: [-6.220529, 106.789848], name: "Depot Ikan Bakar"},
  {location: [-6.222977, 106.789152], name: "Gudang STEAK"},
  {location: [-6.222043, 106.791070], name: "Seafood!!"}
];

var poly = [];
for (var place of places) {
  L.marker(place.location).addTo(leaflet).bindPopup(place.name);
  poly.push(place.location);  
}

L.polygon(poly).addTo(leaflet).bindPopup("Ruang Hampa >_<");
