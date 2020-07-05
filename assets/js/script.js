
//Field "The date"
document.getElementById('myDate').valueAsDate = new Date()

//Field "Place"

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

//Field "Food"

fetch("https://tripadvisor1.p.rapidapi.com/restaurants/list-by-latlng?limit=30&currency=USD&distance=2&lunit=km&lang=en_US&latitude=12.91285&longitude=100.87808", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "tripadvisor1.p.rapidapi.com",
		"x-rapidapi-key": "63505ac17cmsh55ace0f8ef6a60cp160e0fjsn021e91161dad"
	}
})
.then(response => {
	console.log(response);
})
.catch(err => {
	console.log(err);
});