
mapboxgl.accessToken = mapToken;
// 'pk.eyJ1IjoibGF1cmFtYXJjcSIsImEiOiJja3BtbmNjeTQwMXNzMnZwZm9oODN0MXc2In0.ZBGcgZBREKTtak2yGJw03Q'


/* or add as ejs con dash process.env.MAPBOX_TOKEN ejs */
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 10 // starting zoom
});

map.addControl(new mapboxgl.NavigationControl());

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h3>${campground.title}</h3><p>${campground.location}</p>`
            )
    )
    .addTo(map);