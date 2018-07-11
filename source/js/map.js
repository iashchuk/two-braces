function initMap() {
  var centerLatLng = new google.maps.LatLng(59.96879, 30.323199);
  var centerMap = new google.maps.LatLng(59.939174, 30.322164);
  var mapOptions = {
    center: centerMap,
    zoom: 15,
    mapTypeControl: false,
    zoomControl: true,
    scrollwheel: false,
    zoomControlOptions: { position: google.maps.ControlPosition.LEFT_TOP },
    streetViewControl: false
  };
  var map = new google.maps.Map(document.getElementById("google"), mapOptions);

  var marker = new google.maps.Marker({
    position: centerLatLng,
    map: map,

    title: "ул. Милионная, д. 4/1",
    icon: "./img/icon-map.png"
  });
}
google.maps.event.addDomListener(window, "load", initMap);
