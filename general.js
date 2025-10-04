const buttons = document.querySelectorAll('.product button');

// Add event listener to each button
buttons.forEach(button => {
  button.addEventListener('click', () => {
    // Get the product details
    const productName = button.parentNode.querySelector('.product-name').textContent;
    const productPrice = button.parentNode.querySelector('.product-price').textContent;

    // WhatsApp number (replace with your client's number)
    const phoneNumber = '+27782894950'; // Make sure to include the country code

    // Message to be sent
    const message = `I'm interested in ordering ${productName} for ${productPrice}`;

    // URL to open WhatsApp
    const url = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

    // Open WhatsApp
    window.open(url, '_blank');
  });
});
