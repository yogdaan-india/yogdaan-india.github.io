//Location Finder
async function s() {
    await new Promise(r => setTimeout(r, 3700));
    document.getElementById('id01').style.display='block'
}
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


db.collection('UserInformation').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
      var a = doc.id;
      var b = doc.data().Time;
      var c = new Date().getHours();
      if((c-b)>=6){
        db.collection('Contact Form').doc(a).delete();
      }else if((b===18 || b===19 || b===20 || b===21 || b===22 || b===23) && ((b-c)<=18)){
        db.collection('Contact Form').doc(a).delete();
      }
  });
})



db.collection('HelperInformation').get().then((snapshot) => {
  snapshot.docs.forEach(doc => {
      var a = doc.id;
      var b = doc.data().Time;
      var c = new Date().getHours();
      if((c-b)>=6){
        db.collection('Contact Form').doc(a).delete();
      }else if((b===18 || b===19 || b===20 || b===21 || b===22 || b===23) && ((b-c)<=18)){
        db.collection('Contact Form').doc(a).delete();
      }
  });
})
