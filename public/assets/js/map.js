var leaflet = L.map('leaflet-map').setView([-6.9340901,107.5972098], 14);

var marker = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ3VyaXNhIiwiYSI6ImNqbmZoNDN3ZzJzY2gzcG9ld3JoMzBjZjIifQ.ToUmEgZPdcmjFptNXFbdQA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZ3VyaXNhIiwiYSI6ImNqbmZoNDN3ZzJzY2gzcG9ld3JoMzBjZjIifQ.ToUmEgZPdcmjFptNXFbdQA'
}).addTo(leaflet); //openOn

// var circle = L.circle([-6.9340901,107.5972098], {
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
  {location: [-6.9484956, 107.5901394], name: "CGV Miko Mall", description: "Miko Mall, Jln Kopo Cirangrang No.599, Cirangrang, Babakan Ciparay, Kota Bandung, Jawa Barat 40227", image: "mikomall.jpg"},
  {location: [-6.9437243,107.5930576], name: "Festival Citylink XXI", description: "Lt.3A, Jl. Peta No.241, Suka Asih, Bojongloa Kaler, Kota Bandung, Jawa Barat 40232", image: "citylink.jpg"},
  {location: [-6.9439185,107.5953811], name: "XXI Transmart Buahbatu Square", description: "Buahbatu Square Lantai 1, Jalan Raya No. 259, Cipagalo, Bojongsoang, Cipagalo, Bojongsoang, Bandung, Jawa Barat 40287", image: "transmart.jpg"},
  {location: [-6.9128304,107.5918609], name: "CGV 23 Paskal", description: "23 Paskal Shopping Mall, Jl. Pasir Kaliki, Kb. Jeruk, Andir, Kota Bandung, Jawa Barat 40182", image: "paskal.jpg"},
  {location: [-6.9236753,107.5917396], name: "Braga XXI", description: "Braga City Walk Lantai 2, Jl. Braga 99-101, Braga, Sumur Bandung, Braga, Sumur Bandung, Kota Bandung, Jawa Barat 40111", image: "braga.jpg"}
];

var poly = [];
for (var place of places) {
  L.marker(place.location).addTo(leaflet).bindPopup(place.name);
  poly.push(place.location);  
}

L.polygon(poly).addTo(leaflet).bindPopup("Ruang Hampa >_<");
