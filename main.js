// JavaScript for Carousel (optional, basic setup)

let index = 0;
const slides = document.querySelectorAll('.carousel img');

function showSlide() {
    slides.forEach((slide, idx) => {
        slide.style.display = idx === index ? 'block' : 'none';
    });
    index = (index + 1) % slides.length;
}

setInterval(showSlide, 3000); // Change slide every 3 seconds

document.querySelectorAll('.photo p').forEach(function(p) {
    p.addEventListener('click', function() {
        var imgSrc = this.getAttribute('data-src');
        document.getElementById('lightbox-img').src = imgSrc;
        document.getElementById('lightbox').style.display = 'flex';
    });
});

document.getElementById('lightbox-close').addEventListener('click', function() {
    document.getElementById('lightbox').style.display = 'none';
});

// Optionally close the lightbox when clicking outside the image
document.getElementById('lightbox').addEventListener('click', function(e) {
    if (e.target === this) {
        this.style.display = 'none';
    }
});
document.getElementById('booking-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Collect form data
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const mobile = document.getElementById('mobile').value;
    const travelDates = document.getElementById('travel-dates').value;

    // Simple validation
    if (!name || !email || !mobile || !travelDates) {
        alert('Please fill out all fields.');
        return;
    }

    // Create result message
    const resultMessage = `
        <h3>Booking Confirmation</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Mobile Number:</strong> ${mobile}</p>
        <p><strong>Travel Dates:</strong> ${travelDates}</p>
        <p>Thank you for booking with us! We will contact you soon with further details.</p>
    `;

    // Display booking result
    document.getElementById('booking-result').innerHTML = resultMessage;
});

