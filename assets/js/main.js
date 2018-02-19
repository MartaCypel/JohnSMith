function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(40.8387294, -8.4769763),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
} 