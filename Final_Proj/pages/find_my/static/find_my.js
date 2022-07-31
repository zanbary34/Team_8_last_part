//---------------- map------------/
var locations = [
  ["../static/media/Lime copy.jpg", 31.2599,34.797, '0.8'],
  ["../static/media/Lime copy.jpg",  31.2612,34.8012, '0.9'],
  ["../static/media/Wind copy.png",  31.2619,34.7968, '0.2'],
  ["../static/media/Bird copy.png",  31.2565,34.795, '0.5']
];
function initMap(z,t){
var map = new google.maps.Map(document.getElementById('map'), {
  zoom: 15,
  center: new google.maps.LatLng(z, t),
  mapTypeId: google.maps.MapTypeId.ROADMAP
});

var infowindow = new google.maps.InfoWindow();

var marker, i;

for (i = 0; i < locations.length; i++) {
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(locations[i][1], locations[i][2]),
    icon: {
      url: locations[i][0],
      labelOrigin: new google.maps.Point(55, 12)
    },
    label: {
      text: (locations[i][3]*100 + '%'),
      color: getcolor(locations[i][3]),
      fontWeight: 'bold'
      // fontsize: "40px"
    },
    map: map
  });
//----- my location marker
  marker = new google.maps.Marker({
    position: new google.maps.LatLng(z, t),
    map: map
  });
  google.maps.event.addListener(marker, 'click', (function(marker, i) {
    return function() {
      infowindow.setContent(locations[i][3]*100);
      infowindow.open(map, marker);
    }
  })(marker, i));
}
}
function getcolor(battery_level){
 if (battery_level<0.3)
    return "red"
else if (battery_level<0.6)
    return "black"
else
  return "green"
}

// /*gets location from the user*/
function GetLocation() {
  if (navigator.geolocation) {
  console.log("in get location");
  navigator.geolocation.getCurrentPosition(showPosition);
  } else {
  document.getElementById("location_p").innerHTML="Geolocation is not supported by this browser.";
  }
  document.getElementById("map").style.visibility = "visible";
  document.getElementById("afterNearby").style.visibility = "visible";
}
/*initial the map with the current user location*/
  function showPosition(position) {
      var z = position.coords.latitude;
      var t = position.coords.longitude;
      initMap(z,t);
  }
// var scooter_locations = [
//   ["../static/media/Lime copy.jpg",    31.2599,34.797, '0.8'],
//   ["../static/media/Lime copy.jpg",   31.2612,34.8012, '0.9'],
//   ["../static/media/Wind copy.png",  31.2619,34.7968, '0.2'],
//   ["../static/media/Bird copy.png",  31.2565,34.795, '0.5']
// ];
// function initMap(z,t){
// var map = new google.maps.Map(document.getElementById('map'), {
//   zoom: 15,
//   center: new google.maps.LatLng(z, t),
//   mapTypeId: google.maps.MapTypeId.ROADMAP
// });
//
// var infowindow = new google.maps.InfoWindow();
//
// var marker, i;
//
// for (i = 0; i < locations.length; i++) {
//   marker = new google.maps.Marker({
//     position: new google.maps.LatLng(scooter_locations[i][1], scooter_locations[i][2]),
//     icon: {
//       url: scooter_locations[i][0],
//       labelOrigin: new google.maps.Point(55, 12)
//     },
//     label: {
//       text: (scooter_locations[i][3]*100 + '%'),
//       color: getcolor(scooter_locations[i][3]),
//       fontWeight: 'bold'
//       // fontsize: "40px"
//     },
//     map: map
//   });
// // my location
//   marker = new google.maps.Marker({
//     position: new google.maps.LatLng(z,t),
//     map: map
//   });
//   google.maps.event.addListener(marker, 'click', (function(marker, i) {
//     return function() {
//       infowindow.setContent(scooter_locations[i][3]*100);
//       infowindow.open(map, marker);
//     }
//   })(marker, i));
// }
// }
// function getcolor(battery_level){
//  if (battery_level<0.3)
//     return "red"
// else if (battery_level<0.6)
//     return "black"
// else
//   return "green"
// }
//
//
// ///gets location from the user/
// function GetLocation() {
//   if (navigator.geolocation) {
//   console.log("in get location");
//   navigator.geolocation.getCurrentPosition(showPosition);
//   } else {
//   document.getElementById("location_p").innerHTML="Geolocation is not supported by this browser.";
//   }
//   document.getElementById("map").style.visibility = "visible";
//   document.getElementById("afterNearby").style.visibility = "visible";
// }
// /initial the map with the current user location/
//   function showPosition(position) {
//       var z = position.coords.latitude;
//       var t = position.coords.longitude;
//       initMap(z,t);
//   }