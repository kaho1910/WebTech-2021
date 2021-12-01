// 63070088 Thirawee Thitiwattanakornsiri
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
        document.getElementById("map").src = "https://maps.google.com/maps?q=" + position.coords.latitude + ', ' + position.coords.longitude + "&t=&z=15&ie=UTF8&iwloc=&output=embed"
    });
} else {
    document.getElementById("map").src = "https://maps.google.com/maps?q=" + "0" + ', ' + "0" + "&t=&z=15&ie=UTF8&iwloc=&output=embed"
    console.error("location not supported");
}

function byLatLng() {
    if (document.getElementById("ans").value != "none") {
        document.getElementById("map").src = "https://maps.google.com/maps?q=" + document.getElementById("ans").value + "&t=&z=12&ie=UTF8&iwloc=&output=embed"
    }
    return false;
}