document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
            top: target.offsetTop,
            behavior: 'smooth',
            duration: 2000 // Slow down scrolling (2000 ms = 2 seconds)
        });
    });
});
document.getElementById('contact-form').addEventListener('submit', function(event) {
event.preventDefault(); // Prevent the form from submitting

const name = document.getElementById('name').value;
const email = document.getElementById('email').value;
const message = document.getElementById('message').value;

if (name && email && message) {
alert("Message sent successfully!");
document.getElementById('contact-form').reset(); // Clear the form
} else {
alert("Please fill in all fields.");
}
});
document.addEventListener('DOMContentLoaded', function () {
const navbar = document.querySelector('nav');
const navLinks = document.querySelectorAll('nav ul li a'); // Select all the nav links
const homeSection = document.querySelector('#home');
const aboutUsSection = document.querySelector('#about-us');
const contactSection = document.querySelector('#contact');

function updateNavbarColor() {
const homeBottom = homeSection.offsetTop + homeSection.offsetHeight;
const aboutUsBottom = aboutUsSection.offsetTop + aboutUsSection.offsetHeight;

if (window.scrollY >= homeBottom && window.scrollY < aboutUsBottom) {
    // Change navbar text and link colors to black in 'About Us' section
    navbar.style.color = 'black';
    navLinks.forEach(link => {
        link.style.color = 'black'; // Change each link color to black
    });
} else if (window.scrollY >= aboutUsBottom) {
    // Change navbar text and link colors back to white in 'Contact' section
    navbar.style.color = 'white';
    navLinks.forEach(link => {
        link.style.color = 'white'; // Change each link color to white
    });
} else {
    // Default navbar text and link colors for other sections
    navbar.style.color = 'white';
    navLinks.forEach(link => {
        link.style.color = 'white'; // Change each link color to white
    });
}
}

// Update navbar color when the page is scrolled
window.addEventListener('scroll', updateNavbarColor);

// Smooth scroll behavior when clicking navigation links
const links = document.querySelectorAll('nav a');
links.forEach(link => {
link.addEventListener('click', function (e) {
    e.preventDefault();
    const targetId = this.getAttribute('href');
    document.querySelector(targetId).scrollIntoView({
        behavior: 'smooth'
    });
});
});
});
let prevScrollPos = window.pageYOffset;
const navbar = document.querySelector(".navbar");
let isScrolling;

// Detect scroll and hide the navbar when scrolling down or up
window.addEventListener('scroll', () => {
let currentScrollPos = window.pageYOffset;

// Hide navbar when scrolling (down or up)
navbar.style.top = "-80px"; // Adjust this value to match your navbar's height

prevScrollPos = currentScrollPos;

// Clear the previous timeout if scrolling continues
clearTimeout(isScrolling);

// Set a timeout to show the navbar after scrolling stops
isScrolling = setTimeout(() => {
navbar.style.top = "0"; // Show navbar after user stops scrolling
}, 200); // Adjust the delay based on preference
});