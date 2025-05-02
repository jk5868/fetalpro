// Get modal and buttons for About Us popup
const aboutUsBtn = document.getElementById('aboutUsBtn');
const aboutUsModal = document.getElementById('aboutUsModal');
const closeAboutUsModal = document.getElementById('closeAboutUsModal');

// Open the "About Us" modal when button is clicked
aboutUsBtn.addEventListener('click', () => {
    aboutUsModal.style.display = 'block';
});

// Close the "About Us" modal when the close button (X) is clicked
closeAboutUsModal.addEventListener('click', () => {
    aboutUsModal.style.display = 'none';
});

// Close the "About Us" modal if the user clicks anywhere outside the modal content
window.addEventListener('click', (event) => {
    if (event.target === aboutUsModal) {
        aboutUsModal.style.display = 'none';
    }
});

// Keep the existing login functionality intact
const wrapper = document.querySelector('.wrapper');
const loginBtn = document.querySelector('#loginBtn');
const iconClose = document.querySelector('#closeBtn');
const form = document.querySelector('#loginForm');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');

// Open login popup when Login button is clicked
loginBtn.addEventListener('click', () => {
    wrapper.classList.add('active-popup');
});

// Close login popup when close icon is clicked
iconClose.addEventListener('click', () => {
    wrapper.classList.remove('active-popup');
});

// Handle form submission for login
form.addEventListener('submit', (e) => {
    e.preventDefault();  // Prevent form from submitting the traditional way

    const email = emailInput.value;
    const emailDomain = email.split('@')[1]; // Get the domain after '@'

    // Redirect based on email domain
    if (emailDomain === 'doctor') {
        window.location.href = 'doctor-page.html';  // Redirect to doctor page
    } else if (emailDomain === 'patient') {
        window.location.href = 'patient-page.html';  // Redirect to patient page
    } else if (emailDomain === 'admin') {
        window.location.href = 'admin-page.html';  // Redirect to admin page
    } else {
        alert('Invalid email domain!');
    }
});
