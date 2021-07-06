function Tipcalculator() {

    const Billamount = document.getElementById("bill").value
    const Cate = document.getElementById("tippercent").value
    const Shareperson = document.getElementById("people").value

    if (Billamount === '' || Cate === 0) {
        alert('Please Enter the Amount of Mininim 1');
        return
    }

    if (Shareperson === '' || Shareperson === '0') {
        alert('Please enter the Minium Person of 1')
        return;
    }


    const Tipamount = Cate*Billamount
    document.getElementById("tipamount").value = Tipamount;


    const Totalbill = +Billamount + +Tipamount;
    document.getElementById("totalbillamount").value = Totalbill;

    document.getElementById("person").value = Totalbill / Shareperson;
};

document.getElementById("submit").onclick = function (event) {
    event.preventDefault();
    Tipcalculator();
};

// const app = navigator.geolocation;
//     app.getCurrentPosition(success, failure);

//     function success(position)
//     {
//         const myLat = position.coords.latitude;
//         const myLong = position.coords.longitude;

//         const coords = new google.maps.LatLng(myLat,myLong);
//         console.log(coords);

//         const mapOptions = {
//             zoom : 9,
//             center : coords,
//             mapTypeId : google.maps.MapTypeId.ROADMAP
//         } 
//         const map = new google.maps.Map(document.getElementById("map"),mapOptions);
//         const marker = new google.map.Marker({map:map, position:coords});
//     }
    
//     function failure(){}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (p) {
        var LatLng = new google.maps.LatLng(p.coords.latitude, p.coords.longitude);
        var mapOptions = {
            center: LatLng,
            zoom: 13,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var map = new google.maps.Map(document.getElementById("map"), mapOptions);
        var marker = new google.maps.Marker({
            position: LatLng,
            map: map,
            // title: "<div style = 'height:60px;width:200px'><b>Your location:</b><br />Latitude: " + p.coords.latitude + "<br />Longitude: " + p.coords.longitude
        });
        google.maps.event.addListener(marker, "click", function (e) {
            var infoWindow = new google.maps.InfoWindow();
            infoWindow.setContent(marker.title);
            infoWindow.open(map, marker);
        });
    });
} else {
    alert('Geo Location feature is not supported in this browser.');
}