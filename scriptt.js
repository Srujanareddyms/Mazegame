// Theme toggle for dark mode
const themeToggleButton = document.getElementById('themeToggle');
themeToggleButton.addEventListener('click', function () {
    document.body.classList.toggle('dark-mode');
});

// Search Modal
const searchToggleButton = document.querySelector('.search-toggle');
const searchModal = document.getElementById('searchModal');
const closeSearchButton = document.getElementById('closeSearch');

searchToggleButton.addEventListener('click', function () {
    searchModal.style.display = 'flex';
});

closeSearchButton.addEventListener('click', function () {
    searchModal.style.display = 'none';
});

// Carousel functionality
let currentSlide = 1;
const slides = document.querySelectorAll('.carousel-slide');
const prevButton = document.getElementById('prevBtn');
const nextButton = document.getElementById('nextBtn');

function showSlide(index) {
    if (index > slides.length) currentSlide = 1;
    if (index < 1) currentSlide = slides.length;
    slides.forEach((slide, idx) => {
        slide.style.display = idx + 1 === currentSlide ? 'block' : 'none';
    });
}

prevButton.addEventListener('click', function () {
    currentSlide--;
    showSlide(currentSlide);
});

nextButton.addEventListener('click', function () {
    currentSlide++;
    showSlide(currentSlide);
});

showSlide(currentSlide);

// Form Validation and Submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for contacting us, ' + name + '!');
        contactForm.reset();
    } else {
        alert('Please fill out all fields.');
    }
});
