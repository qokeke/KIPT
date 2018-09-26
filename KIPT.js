// when user scrolls down 20 px from top, show button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 146 || document.documentElement.scrollTop > 146) {
    document.getElementById("scrollTopBtn").style.display = "block";
  } else {
    document.getElementById("scrollTopBtn").style.display = "none";
  }
}

//when user clicks button, scroll to top of document
function topFunction() {
  document.body.scrollTop = 0; //for Safari
  document.documentElement.scrollTop = 0; //for Chrome, Firefox, IE and Opera
}

function scrollToAbout() {
  document.body.scrollTop = 146;
  document.documentElement.scrollTop = 146;
}

function scrollToServices() {
  document.body.scrollTop = 650;
  document.documentElement.scrollTop = 650;
}

function scrollToContact() {
  document.body.scrollTop = 2597.92;
  document.documentElement.scrollTop = 2597.92;
}
