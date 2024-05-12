let map = L.map('apMap').setView([38.87197168461303, -77.05653644784555], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



let apMarker = L.marker([38.87197168461303, -77.05653644784555]).addTo(map);
apMarker.bindPopup("<b>geboorteplek internet</b><br>amerika").openPopup();