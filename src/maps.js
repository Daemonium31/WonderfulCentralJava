let map;
let directionsRenderer;
let currentRouteMarker;
let userLocation;
let currentIndex = 2; // Index for Gunung Merbabu

function initMap() {
    const centralJavaCenter = { lat: -7.150975, lng: 110.1402594 };
    map = new google.maps.Map(document.getElementById('map'), {
        center: centralJavaCenter,
        zoom: 8
    });

    directionsRenderer = new google.maps.DirectionsRenderer();
    directionsRenderer.setMap(map);

    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            userLocation = {
                lat: position.coords.latitude,
                lng: position.coords.longitude
            };

            const userMarker = new google.maps.Marker({
                position: userLocation,
                map: map,
                title: 'Your Location'
            });

            const markers = [
                { position: new google.maps.LatLng(-7.9424934, 112.9529953), title: 'Mount Bromo' },
                { position: new google.maps.LatLng(-7.305630, 110.445630), title: 'Rawa Pening' },
                { position: new google.maps.LatLng(-7.4524377, 110.4408198), title: 'Gunung Merbabu' },
                { position: new google.maps.LatLng(-7.540718, 110.445724), title: 'Gunung Merapi' },
                { position: new google.maps.LatLng(-7.0565, 110.4863), title: 'Brown Canyon' },
                { position: new google.maps.LatLng(-7.7702, 109.4130), title: 'Pantai Menganti' },
                { position: new google.maps.LatLng(-7.2149, 109.8994), title: 'Dataran Tinggi Dieng' },
                { position: new google.maps.LatLng(-7.2262, 109.2648), title: 'Gunung Slamet' },
                { position: new google.maps.LatLng(-5.8398, 110.4111), title: 'Pantai Tanjung' },
                { position: new google.maps.LatLng(-7.7607, 109.4852), title: 'Pantai Suwuk' },
                { position: new google.maps.LatLng(-6.9841, 110.4108), title: 'Lawang Sewu' },
                { position: new google.maps.LatLng(-6.9963, 110.398), title: 'Klenteng Sam Po Kong' },
                { position: new google.maps.LatLng(-7.607355, 110.203804), title: 'Candi Borobudur' },
                { position: new google.maps.LatLng(-7.2646, 110.4047), title: 'Museum Kereta Api Ambarawa' },
                { position: new google.maps.LatLng(-7.5778, 110.8279), title: 'Keraton Surakarta' },
                { position: new google.maps.LatLng(-6.9835, 110.4451), title: 'Masjid Agung Jawa Tengah' },
                { position: new google.maps.LatLng(-7.568762302398682, 110.81633758544922), title: 'Museum Batik Danar' },
                { position: new google.maps.LatLng(-7.6277, 111.1314), title: 'Candi Sukuh' },
                { position: new google.maps.LatLng(-7.2102, 110.3420), title: 'Candi Gedong' },
                { position: new google.maps.LatLng(-6.9676476, 110.4289448), title: 'Kota Lama Semarang' }
            ];

            function calculateRoute(markerPosition) {
                const directionsService = new google.maps.DirectionsService();
                const request = {
                    origin: userLocation,
                    destination: markerPosition,
                    travelMode: 'DRIVING'
                };
            
                directionsService.route(request, function(response, status) {
                    if (status === 'OK') {
                        directionsRenderer.setDirections(response);
                        const route = response.routes[0];
                        const duration = route.legs[0].duration.text;
                        const distance = route.legs[0].distance.text;
            
                        // Display an alert with the estimated duration and total distance
                        alert(`Estimated duration: ${duration}, Total distance: ${distance}`);
            
                        // Set the link and display route info if needed
                        const googleMapsLink = document.getElementById('google-maps-link');
                        googleMapsLink.href = `https://www.google.com/maps/dir/?api=1&origin=${userLocation.lat},${userLocation.lng}&destination=${markerPosition.lat()},${markerPosition.lng()}`;
                        document.getElementById('route-link').style.display = 'block';
                    } else {
                        alert('Directions request failed due to ' + status);
                    }
                });
            }

            markers.forEach((marker, index) => {
                const markerObj = new google.maps.Marker({
                    position: marker.position,
                    map: map,
                    title: marker.title
                });

                markerObj.addListener('click', function() {
                    if (currentRouteMarker === markerObj) {
                        directionsRenderer.setDirections({ routes: [] });
                        currentRouteMarker = null;
                        document.getElementById('route-link').style.display = 'none';
                        document.getElementById('route-info').style.display = 'none';
                    } else {
                        calculateRoute(marker.position);
                        currentRouteMarker = markerObj;
                    }
                    currentIndex = index;
                });
            });

            document.getElementById('prev-btn').addEventListener('click', function() {
                currentIndex = (currentIndex - 1 + markers.length) % markers.length;
                calculateRoute(markers[currentIndex].position);
            });

            document.getElementById('next-btn').addEventListener('click', function() {
                currentIndex = (currentIndex + 1) % markers.length;
                calculateRoute(markers[currentIndex].position);
            });

        }, function() {
            handleLocationError(true, map.getCenter());
        });
    } else {
        handleLocationError(false, map.getCenter());
    }
}

function handleLocationError(browserHasGeolocation, pos) {
    const errorMessage = browserHasGeolocation ?
        'Error: The Geolocation service failed.' :
        'Error: Your browser doesn\'t support geolocation.';
    displayErrorMessage(errorMessage);
}

function displayErrorMessage(message) {
    const errorDiv = document.getElementById('error-message');
    errorDiv.style.display = 'block';
    errorDiv.textContent = message;
    document.getElementById('map').style.display = 'none';
}

function handleApiError() {
    displayErrorMessage('Failed to load Google Maps. Please try again later.');
}