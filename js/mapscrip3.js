let map = L.map('apMap').setView([37.791178441291166, -122.40337003233981], 17);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);



let apMarker = L.marker([37.791178441291166, -122.40337003233981]).addTo(map);
apMarker.bindPopup("<b>HQ TWITCH</b><br>amerika").openPopup();