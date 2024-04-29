document.getElementById('survey-form').addEventListener('submit', function(event) {
  event.preventDefault(); // Prevent the form from submitting normally
  
  var formData = new FormData(this);
  var jsonObject = {};
  
  // Convert formData to JSON
  formData.forEach(function(value, key){
    jsonObject[key] = value;
  });
  
  // Send JSON data to Formspree via AJAX
  var xhr = new XMLHttpRequest();
  xhr.open('POST', 'https://formspree.io/f/xleqodzj');
  xhr.setRequestHeader('Content-Type', 'application/json');
  xhr.onload = function() {
    if (xhr.status === 200) {
      alert('Form submitted successfully!');
      // You can redirect the user to a thank you page or perform any other actions here
    } else {
      alert('Form submission failed. Please try again later.');
    }
  };
  xhr.send(JSON.stringify(jsonObject));
});