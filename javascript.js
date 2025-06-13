document.addEventListener("DOMContentLoaded", function() {
  // Select all <button> elements on the page
  var buttons = document.querySelectorAll("button");

  // Loop through each button and attach event listeners for hover effects
  buttons.forEach(function(btn) {
    // When the mouse enters (hovers over) a button, reduce its opacity
    btn.addEventListener("mouseenter", function() {
      btn.style.opacity = "0.8";
    });
    // When the mouse leaves the button, reset opacity back to full
    btn.addEventListener("mouseleave", function() {
      btn.style.opacity = "1";
    });
  });
});



