function initMap() {
    // // var itkmitl = { lat: 13.730828, lng: 100.7811935 };
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            // var map = new google.maps.Map(document.getElementById("map"), {
            //     zoom: 14,
            //     center: {
            //         lat: position.coords.latitude,
            //         lng: position.coords.longitude,
            //     },
            // });
            // var marker = new google.maps.Marker({
            //     position: {
            //         lat: position.coords.latitude,
            //         lng: position.coords.longitude,
            //     },
            //     title: "your location",
            //     map: map,
            // });
            document.getElementById("map").src = "https://maps.google.com/maps?q=" + position.coords.latitude + ', ' + position.coords.longitude + "&t=&z=15&ie=UTF8&iwloc=&output=embed"
        });
    } else {
        document.getElementById("map").src = "https://maps.google.com/maps?q=" + "0" + ', ' + "0" + "&t=&z=15&ie=UTF8&iwloc=&output=embed"
        console.error("location not supported");
    }
}
initMap()

function byDestination() {
    // alert(document.getElementById("destination").value)
    document.getElementById("map").src = "https://maps.google.com/maps?q=" + document.getElementById("destination").value + "&t=&z=15&ie=UTF8&iwloc=&output=embed"
    return false;
}

function byLatLng() {
    // if (navigator.geolocation) {
    var latitude = parseFloat(document.getElementById("latitude").value) % 90;
    var longtitude = parseFloat(document.getElementById("longtitude").value) % 360;
    //     new google.maps.Map(document.getElementById("map"), {
    //         zoom: 15,
    //         center: {
    //             lat: latitude,
    //             lng: longtitude,
    //         },
    //     });
    // } else {
    //     console.error("location not supported");
    // }
    document.getElementById("map").src = "https://maps.google.com/maps?q=" + latitude + ', ' + longtitude + "&t=&z=15&ie=UTF8&iwloc=&output=embed"
    return false;
}