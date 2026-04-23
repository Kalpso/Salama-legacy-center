'use strict';

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Form Validation
const form = document.getElementById('myForm');
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name === '' || email === '') {
        alert('Please fill in all fields.');
        return;
    }
    alert('Form submitted successfully!');
});

// Interactive Features
const button = document.getElementById('interactiveButton');
button.addEventListener('click', function () {
    alert('Button was clicked!');
});