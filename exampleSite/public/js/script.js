// Preloader js    
$(window).on('load', function () {
  $('.preloader').fadeOut(1000);
});

(function ($) {
  'use strict';

  
  // product Slider
  $('.product-image-slider').slick({
    autoplay: false,
    infinite: true,
    arrows: false,
    dots: true,
    customPaging: function (slider, i) {
      var image = $(slider.$slides[i]).data('image');
      return '<img class="img-fluid" src="' + image + '" alt="product-image">';
    }
  });

  // Product slider
  $('.product-slider').slick({
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    dots: false,
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

})(jQuery);

// this is pop up notification 
$(document).ready(function() {
  // Show the section after 2 seconds
  setTimeout(function() {
    $('#hiddenSection').fadeIn();
  }, 2000);

  // Hide the section when the button is clicked
  $('#hideButton').click(function() {
    $('#hiddenSection').fadeOut();
  });
});

// this is for the forum of products
function sendWhatsAppMessage(event) {
  event.preventDefault(); // Prevent form submission

  // Clear previous error message
  const errorMessageDiv = document.getElementById('errorMessage');
  errorMessageDiv.innerText = '';

  // Get values from the form
  const name = document.getElementById('name').value.trim();
  const number = document.getElementById('number').value.trim();
  const address = document.getElementById('address').value.trim();
  const productName = document.getElementById('product-name').innerText.trim(); // get the product name

  // Validate inputs
  if (!name || !number || !address) {
    errorMessageDiv.innerText = 'Please fill in all fields.';
    return;
  }

  // Validate number: should be 10 digits long and numeric
  const numberPattern = /^\d{10}$/;
  if (!numberPattern.test(number)) {
    errorMessageDiv.innerText = 'Please enter a valid 10-digit phone number.';
    return;
  }

  // Create the WhatsApp message
  const message = `Name: ${encodeURIComponent(name)}, Number: ${encodeURIComponent(number)}, Address: ${encodeURIComponent(address)}, Product: ${encodeURIComponent(productName)}`;
  const whatsappNumber = '212624182004'; // Replace with your WhatsApp number
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${message}`;

  // Open WhatsApp link in a new tab
  window.open(whatsappLink, '_blank');
}

