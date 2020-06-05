/*Booking Form*/
function validateForm() {
  var name =  document.getElementById('name').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "Name cannot be empty";
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "Email cannot be empty";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Email format invalid";
          return false;
      }
  }
  var subject =  document.getElementById('subject').value;
  if (subject == "") {
      document.querySelector('.status').innerHTML = "Subject cannot be empty";
      return false;
  }
  var message =  document.getElementById('message').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = "Message cannot be empty";
      return false;
  }
  document.querySelector('.status').innerHTML = "Sending...";
}   
/*End Booking Form*/
function bigImg(x) {
    x.style.height = "250px";
    x.style.width = "350px";
  }
  
  function normalImg(x) {
    x.style.height = "150px";
    x.style.width = "250px";
  }
/*Index Page - Time*/
var d = new Date();
document.getElementById("timeIndex").innerHTML = d;
/*End Index Page - Time*/

//*Lighbox Photo Page*//
function startLightBox(){
  var lbBg = document.getElementById("lightBoxBg");
  var lb = document.getElementById("lightBox");

  lbBg.style.display = "block";
  lb.style.display = "block";
}

//*End Lightbox Photo Page*//