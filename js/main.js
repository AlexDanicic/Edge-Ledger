// Initialize and add the map
function initMap() {
    // location
    const loc = { lat: 53.556218, lng:-2.1841537};
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'),
     {
         zoom: 14,
         center: loc
     });
    //  The Marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map});
}