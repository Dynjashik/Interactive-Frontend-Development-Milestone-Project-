
document.getElementById('myDate').valueAsDate = new Date()

function initMap() {
    var input = document.getElementById('searchInput');
    new google.maps.places.Autocomplete(input);

    var pos = {lat: -33.8688, lng: 151.2195}

    var map = new google.maps.Map(document.getElementById('map'), {
          center: pos,
          zoom: 10
        });
    
    if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };
             map.setCenter(pos)
        }
        )}   
          
    console.log(pos)
          
}
