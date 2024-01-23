// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Simple form validation
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', function (e) {
    const emailInput = document.getElementById('email');
    const messageInput = document.getElementById('message');

    if (!isValidEmail(emailInput.value)) {
        alert('Please enter a valid email address.');
        e.preventDefault();
    }

    if (messageInput.value.trim() === '') {
        alert('Please enter a message.');
        e.preventDefault();
    }
});

function isValidEmail(email) {
    // Simple email validation using a regular expression
    const emailRegex = /\S+@\S+\.\S+/;
    return emailRegex.test(email);
}
