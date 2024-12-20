// JavaScript for responsive navigation

// Select the mobile toggle button and the nav links
const mobileToggle = document.createElement('div');
mobileToggle.classList.add('mobile-toggle');
mobileToggle.innerHTML = '&#9776;'; // Hamburger menu icon

// Add the mobile toggle button to the navbar
const navbar = document.querySelector('.navbar');
navbar.appendChild(mobileToggle);

// Get the nav links container
const navLinks = document.querySelector('.nav-links');

// Add click event listener for the toggle button
mobileToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active'); // Toggle the "active" class
});

// Close the nav menu when clicking outside of it
window.addEventListener('click', (e) => {
    if (!navbar.contains(e.target)) {
        navLinks.classList.remove('active'); // Remove the "active" class
    }
});

// Automatically close the menu on resizing the window
window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.classList.remove('active'); // Ensure the menu is closed
    }
});
// JavaScript to handle product selection
document.addEventListener('DOMContentLoaded', () => {
    // Get all product items
    const productItems = document.querySelectorAll('.product-item');

    // Add click event listeners to each product item
    productItems.forEach(item => {
        item.addEventListener('click', () => {
            alert(`You selected: ${item.innerText}`);
        });
    });
});