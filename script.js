// Inicializa o mapa centralizado no Brasil
var map = L.map('map').setView([-14.235, -51.9253], 4);

// Adiciona camada de mapa do OpenStreetMap
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Lista de centros de HPC com coordenadas
var locations = [
    { name: "LNCC - Santos Dumont", coords: [-22.5045, -43.1785] },
    { name: "SENAI CIMATEC", coords: [-12.8654, -38.4322] },
    { name: "CESUP/UFRGS", coords: [-30.0331, -51.2302] },
    { name: "NACAD/UFRJ", coords: [-22.8600, -43.2226] },
    { name: "INPE", coords: [-23.2083, -45.8723] }
];

// Adiciona marcadores para cada centro de HPC no mapa
locations.forEach(function(loc) {
    L.marker(loc.coords).addTo(map)
     .bindPopup(`<b>${loc.name}</b>`);
});
