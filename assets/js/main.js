$(document).ready(
    function()
    {
        $(window).scroll(function(){
                if($(window).scrollTop() > 480){
                    $("nav").addClass("navbarScroll");
                }
                else{
                    $("nav").removeClass("navbarScroll");
                }
            }
        );
    }
);




function myMap() {
    var mapOptions = {
        center: new google.maps.LatLng(40.8387294, -8.4769763),
        zoom: 17,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    }
var map = new google.maps.Map(document.getElementById("map"), mapOptions);
} 
