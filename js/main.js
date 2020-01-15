// Initialize and add the map
function initMap() {
    // location
    const loc = { lat: 53.556218, lng:-2.1841537};
    // Centered map on location
    const map = new google.maps.Map(document.querySelector('.map'),
     {
         zoom: 10,
         center: loc
     });
    //  The Marker, positioned at location
    const marker = new google.maps.Marker({ position: loc, map: map});
}

// Sticky Menu Background Opacity
window.addEventListener('scroll', function() {
    if (window.scrollY > 150) {
        document.querySelector('#navbar').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar').style.opacity = 1;
    }
});

// jQuery Smooth Scrolling
$('#navbar a, .btn').on('click', function(event) {
    if (this.hash !== '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top -100
            },
            800
        );
    }
});