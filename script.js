$(document).ready(function() {
  
  // Show and hide the loader
var $loaderOverlay = $('.loader-overlay');
function showLoader() {
  $loaderOverlay.show();
}
function hideLoader() {
  $loaderOverlay.hide();
}

// Show the success message and hide after a delay
var $successMessage = $('.success-message');
function showSuccessMessage() {
  $successMessage.show();
  setTimeout(function() {
    $successMessage.hide();
    showThankYouMessage()
    clearForm(); // Call the function to clear the form after hiding the success message
  }, 2000); // Change the delay (in milliseconds) as needed
}
    // Show the "Thank You" message and hide after a delay
    var $thankYouMessage = $('.thank-you-message');
    function showThankYouMessage() {
      $thankYouMessage.show();
      setTimeout(function() {
        $thankYouMessage.hide();
      }, 2000); // Change the delay (in milliseconds) as needed
    }
// Function to clear the form fields
function clearForm() {
  $('#dataForm')[0].reset();
}

// Function to validate the form
function validateForm() {
  var name = $('#name').val();
  var email = $('#email').val();
  var message = $('#message').val();
  var isValid = true;

  // Reset error messages
  $('.error-message').text('');

  // Simple validation: Check if both fields are not empty
  if (name.trim() === '') {
    $('#name-error').text('* Please enter your name!');
    isValid = false;
  }

  if (email.trim() === '') {
    $('#email-error').text('* Please enter your email!');
    isValid = false;
  } else {
    // Regular expression for email validation
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
      $('#email-error').text('* Please enter a valid email address!');
      isValid = false;
    }
  }
  if (message.trim() === '') {
    $('#message-error').text('* Please Leave a message!');
    isValid = false;
  }

  return isValid;
}

// Simulate an AJAX request with a delay using setTimeout
function simulateAjaxRequest() {
  if (validateForm()) {
    showLoader(); // Show the loader

    setTimeout(function() {
      // Simulate a delay of 2 seconds
      hideLoader(); // Hide the loader after 2 seconds
      showSuccessMessage(); // Show the success message after the loader is hidden
    }, 2000);
  }
}

// Example usage: Call the simulateAjaxRequest function when you want to submit data
$('.submit-button').on('click', function() {
  simulateAjaxRequest();
});



  });


