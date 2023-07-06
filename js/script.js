function validateForm(event) {
    event.preventDefault();
  
    const nameInput = document.getElementById('name');
    const emailInput = document.getElementById('email');
    const phoneInput = document.getElementById('phone');
    const messageInput = document.getElementById('message');
  
    const name = nameInput.value.trim();
    const email = emailInput.value.trim();
    const phone = phoneInput.value.trim();
    const message = messageInput.value.trim();
  
    if (!name || !email || !phone || !message) {
      alert('Please fill out all the fields.');
      return;
    }
  
    if (!isValidEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    if (!isValidPhone(phone)) {
      alert('Please enter a valid phone number.');
      return;
    }
  
    // If all validations pass, you can submit the form or handle the data accordingly.
    // For simplicity, we'll just show an alert here:
    alert('Form submitted successfully!');
  }
  
  function isValidEmail(email) {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }
  
  function isValidPhone(phone) {
    // Basic phone number validation (only digits, 10 characters)
    const phonePattern = /^\d{10}$/;
    return phonePattern.test(phone);
  }
  