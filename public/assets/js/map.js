const photo = document.getElementById('map-photo');
const title = document.getElementById('map-title');
const description = document.getElementById('map-description');

var map = L.map('leaflet-map').setView([-6.930346, 107.591681], 14);
map.scrollWheelZoom.disable();

var marker = L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoiZ3VyaXNhIiwiYSI6ImNqbmZoNDN3ZzJzY2gzcG9ld3JoMzBjZjIifQ.ToUmEgZPdcmjFptNXFbdQA', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 20,
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoiZ3VyaXNhIiwiYSI6ImNqbmZoNDN3ZzJzY2gzcG9ld3JoMzBjZjIifQ.ToUmEgZPdcmjFptNXFbdQA'
}).addTo(map);

var popup = L.popup();
map.on('click', function(e) {
  popup.setLatLng(e.latlng).setContent(e.latlng.toString()).openOn(map);
});

var places = [
  {location: [-6.9484956, 107.5901394], name: "CGV Miko Mall", description: "Miko Mall, Jln Kopo Cirangrang No.599, Cirangrang, Babakan Ciparay, Kota Bandung, Jawa Barat 40227", photo: "mikomall.jpg"},
  {location: [-6.9437243,107.5930576], name: "Festival Citylink XXI", description: "Lt.3A, Jl. Peta No.241, Suka Asih, Bojongloa Kaler, Kota Bandung, Jawa Barat 40232", photo: "citylink.jpg"},
  {location: [-6.9439185,107.5953811], name: "XXI Transmart Buahbatu Square", description: "Buahbatu Square Lantai 1, Jalan Raya No. 259, Cipagalo, Bojongsoang, Cipagalo, Bojongsoang, Bandung, Jawa Barat 40287", photo: "transmart.jpg"},
  {location: [-6.9128304,107.5918609], name: "CGV 23 Paskal", description: "23 Paskal Shopping Mall, Jl. Pasir Kaliki, Kb. Jeruk, Andir, Kota Bandung, Jawa Barat 40182", photo: "paskal.jpg"},
  {location: [-6.9236753,107.5917396], name: "Braga XXI", description: "Braga City Walk Lantai 2, Jl. Braga 99-101, Braga, Sumur Bandung, Braga, Sumur Bandung, Kota Bandung, Jawa Barat 40111", photo: "braga.jpg"}
];

var poly = [];
for (var place of places) {
  L.marker(place.location).addTo(map).bindPopup(place.name).on('click', L.bind(showDetail, null, place));
  poly.push(place.location);
}

function showDetail(place) {
  title.innerHTML = place.name;
  description.innerHTML = place.description;
  photo.setAttribute('src', 'assets/image/' + place.photo);
  map.setView([place.location[0], place.location[1]], 13);
}
showDetail(places[places.length - 1]);
L.polygon(poly).addTo(map).bindPopup("Ruang Hampa >_<");
