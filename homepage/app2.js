//Location Finder
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPosition);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

function getLocationH() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showPositionH);
  } else { 
    x.innerHTML = "Geolocation is not supported by this browser.";
  }
}

$(document).ready(function() {
  $(document).on('submit', '#my-form', function() {
    // do your things
    return false;
   });
});

$(document).ready(function() {
  $(document).on('submit', '#my-form-H', function() {
    // do your things
    return false;
   });
});

function showPosition(position) {
    
  db.collection('UserInformation').add({
    Latitude: position.coords.latitude,
    Longitude: position.coords.longitude,
    Time: new Date().getHours(),
    Name: document.getElementById("sk").value,
    Phone: document.getElementById("ks").value
  });
  document.getElementById("sk").value = "";
  document.getElementById("ks").value = "";
}

function showPositionH(position) {
    
  db.collection('HelperInformation').add({
    Latitude: position.coords.latitude,
    Longitude: position.coords.longitude,
    Time: new Date().getHours(),
    Name: document.getElementById("ls").value,
    Phone: document.getElementById("sl").value
  });
  document.getElementById("ls").value = "";
  document.getElementById("sl").value = "";
}
