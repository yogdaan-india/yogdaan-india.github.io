//Location Finder
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function showPosition(position) {
  db.collection('Contact Form').add({
    Latitude: position.coords.latitude,
    Longitude: position.coords.longitude
  });
}



  
  
  