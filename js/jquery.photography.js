$(document).ready(function() {
  $('.image-link').magnificPopup({type:'image'});
});

$('.test-popup-link').magnificPopup({ 
  items: [
      {
          src: "../assets/DSC_0021.jpg"
      }
  ],
    type: 'image'
});