var mySlideShow = 0;
carousel();
function carousel() {
  var images;
  var slide = document.getElementsByClassName("imageSlides");
  for (images = 0; images < slide.length; images++) {
    slide[images].style.display = "none";  
  }
  mySlideShow++;
  if (mySlideShow > slide.length) {mySlideShow = 1}    
  slide[mySlideShow-1].style.display = "block";  
  setTimeout(carousel, 2000);
}

function validation() {
  var name = document.getElementById('name').value;
  var email = document.getElementById('e-mail').value;
  var message = document.getElementById('message').value;
  var error = document.getElementById('error_message');
  let text;

  error_message.style.padding = '1rem';

  if (name.length < 0){
      textError = 'Please Enter Valid Name';
      error_message.innerHTML = textError;
      return false;
  }

  if (email.indexOf("@") == -1 || email.length < 0){
      textError = 'Please Enter Valid Email Address';
      error_message.innerHTML = textError;
      return false;
  }

  if (message.length < 0){
      textError = 'Please Enter A Detailed Message';
      error_message.innerHTML = textError;
      return false;
  }
}

