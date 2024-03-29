// script.js

// Show the footer when scrolling to the end of the page
window.onscroll = function() {
    if (
      document.body.scrollTop > document.body.scrollHeight - window.innerHeight - 20 ||
      document.documentElement.scrollTop > document.documentElement.scrollHeight - window.innerHeight - 20
    ) {
      document.getElementById("myFooter").style.display = "block";
    } else {
      document.getElementById("myFooter").style.display = "none";
    }
  };
  