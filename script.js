// Dark mode toggle functionality
const themeToggle = document.getElementById('themeToggle');
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});

// Form validation and submission
const contactForm = document.getElementById('contactForm');
contactForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you for your message, ' + name + '! We will get back to you soon.');
        contactForm.reset();
    } else {
        alert('Please fill in all fields.');
    }
});

// Adding more interactivity with services
const service1 = document.getElementById('service1');
const service2 = document.getElementById('service2');
const service3 = document.getElementById('service3');

service1.addEventListener('mouseover', () => {
    service1.style.backgroundColor = '#f0f0f0';
});
service1.addEventListener('mouseout', () => {
    service1.style.backgroundColor = 'white';
});

service2.addEventListener('mouseover', () => {
    service2.style.backgroundColor = '#f0f0f0';
});
service2.addEventListener('mouseout', () => {
    service2.style.backgroundColor = 'white';
});

service3.addEventListener('mouseover', () => {
    service3.style.backgroundColor = '#f0f0f0';
});
service3.addEventListener('mouseout', () => {
    service3.style.backgroundColor = 'white';
});

// Adding functionality to the about image
const aboutImage = document.getElementById('aboutImage');
aboutImage.addEventListener('click', () => {
    alert('Thank you for clicking the image!');
});
