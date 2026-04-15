/* ============================================
   RWANDA TOURISM WEBSITE - JAVASCRIPT
   ============================================ */

// ---- HAMBURGER MENU ----
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('nav ul');

if (hamburger) {
  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
  });

  // Close menu when a link is clicked
  document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', () => {
      hamburger.classList.remove('active');
      navMenu.classList.remove('active');
    });
  });
}

// ---- IMAGE CAROUSEL ----
let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-slide');
const controls = document.querySelectorAll('.carousel-control');

function showSlide(index) {
  // Wrap around
  if (index >= slides.length) currentSlide = 0;
  if (index < 0) currentSlide = slides.length - 1;

  // Update slides and controls
  slides.forEach(slide => slide.classList.remove('active'));
  controls.forEach(control => control.classList.remove('active'));

  slides[currentSlide].classList.add('active');
  controls[currentSlide].classList.add('active');
}

// Next and previous button functionality
function nextSlide() {
  currentSlide++;
  showSlide(currentSlide);
}

function prevSlide() {
  currentSlide--;
  showSlide(currentSlide);
}

// Auto-scroll carousel every 5 seconds
let carouselInterval;
function startCarouselAutoScroll() {
  carouselInterval = setInterval(() => {
    nextSlide();
  }, 5000);
}

function stopCarouselAutoScroll() {
  clearInterval(carouselInterval);
}

// Attach event listeners to carousel buttons
document.querySelectorAll('.carousel-btn').forEach(btn => {
  btn.addEventListener('click', (e) => {
    if (e.target.classList.contains('next')) nextSlide();
    if (e.target.classList.contains('prev')) prevSlide();
  });
});

// Carousel control dots
controls.forEach((control, index) => {
  control.addEventListener('click', () => {
    currentSlide = index;
    showSlide(currentSlide);
    stopCarouselAutoScroll();
    startCarouselAutoScroll();
  });
});

// Initialize carousel
if (slides.length > 0) {
  showSlide(0);
  startCarouselAutoScroll();

  // Pause on hover, resume on mouse leave
  const carouselContainer = document.querySelector('.carousel-container');
  if (carouselContainer) {
    carouselContainer.addEventListener('mouseenter', stopCarouselAutoScroll);
    carouselContainer.addEventListener('mouseleave', startCarouselAutoScroll);
  }
}

// ---- CONTACT FORM VALIDATION ----
const contactForm = document.querySelector('.contact-form');

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePhone(phone) {
  const phoneRegex = /^[0-9\s\+\-\(\)]{7,}$/;
  return phoneRegex.test(phone);
}

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    // Clear previous error states
    document.querySelectorAll('.form-group').forEach(group => {
      group.classList.remove('error');
    });

    const form = e.target;
    const name = form.querySelector('[name="name"]');
    const email = form.querySelector('[name="email"]');
    const phone = form.querySelector('[name="phone"]');
    const subject = form.querySelector('[name="subject"]');
    const message = form.querySelector('[name="message"]');

    let isValid = true;

    // Validate name
    if (!name.value.trim()) {
      showError(name, 'Name is required');
      isValid = false;
    }

    // Validate email
    if (!email.value.trim()) {
      showError(email, 'Email is required');
      isValid = false;
    } else if (!validateEmail(email.value)) {
      showError(email, 'Please enter a valid email address');
      isValid = false;
    }

    // Validate phone (optional but must be valid if filled)
    if (phone.value.trim() && !validatePhone(phone.value)) {
      showError(phone, 'Please enter a valid phone number');
      isValid = false;
    }

    // Validate subject
    if (!subject.value.trim()) {
      showError(subject, 'Subject is required');
      isValid = false;
    }

    // Validate message
    if (!message.value.trim()) {
      showError(message, 'Message must be at least 10 characters');
      isValid = false;
    } else if (message.value.length < 10) {
      showError(message, 'Message must be at least 10 characters');
      isValid = false;
    }

    if (isValid) {
      // Show success modal
      const modal = document.getElementById('successModal');
      if (modal) {
        modal.classList.add('active');
      }
      
      // Reset form
      form.reset();

      // Close modal after 3 seconds
      setTimeout(() => {
        if (modal) modal.classList.remove('active');
      }, 3000);
    }
  });
}

function showError(input, message) {
  const formGroup = input.closest('.form-group');
  formGroup.classList.add('error');
  const errorMessage = formGroup.querySelector('.error-message');
  if (errorMessage) {
    errorMessage.textContent = message;
  }
}

// ---- MODAL POPUP ----
const modal = document.getElementById('contactModal');
const openModalBtn = document.querySelector('[data-modal="open"]');
const closeModalBtn = document.querySelector('.modal-close');

if (openModalBtn && modal) {
  openModalBtn.addEventListener('click', () => {
    modal.classList.add('active');
  });
}

if (closeModalBtn && modal) {
  closeModalBtn.addEventListener('click', () => {
    modal.classList.remove('active');
  });
}

// Close modal when clicking outside
if (modal) {
  modal.addEventListener('click', (e) => {
    if (e.target === modal) {
      modal.classList.remove('active');
    }
  });
}

// ---- DARK MODE TOGGLE ----
const darkModeToggle = document.querySelector('.dark-mode-toggle');

// Check for saved dark mode preference
const isDarkMode = localStorage.getItem('darkMode') === 'enabled';
if (isDarkMode) {
  document.body.classList.add('dark-mode');
}

if (darkModeToggle) {
  darkModeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');

    // Save preference
    if (document.body.classList.contains('dark-mode')) {
      localStorage.setItem('darkMode', 'enabled');
      darkModeToggle.textContent = '☀️ Light Mode';
    } else {
      localStorage.setItem('darkMode', 'disabled');
      darkModeToggle.textContent = '🌙 Dark Mode';
    }
  });

  // Set initial button text
  if (isDarkMode) {
    darkModeToggle.textContent = '☀️ Light Mode';
  }
}

// ---- GALLERY IMAGE VIEWER ----
const galleryItems = document.querySelectorAll('.gallery-item');
const imageModal = document.getElementById('imageModal');
const modalImage = document.querySelector('.modal img');
const modalDesc = document.querySelector('.modal p');

if (galleryItems.length > 0 && imageModal) {
  galleryItems.forEach(item => {
    item.addEventListener('click', () => {
      const img = item.querySelector('img');
      const overlay = item.querySelector('.gallery-overlay p');
      
      modalImage.src = img.src;
      modalDesc.textContent = overlay ? overlay.textContent : 'Rwanda Tourism Site';
      imageModal.classList.add('active');
    });
  });
}

// ---- SCROLL ANIMATIONS ----
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animation = 'slideUp 0.6s ease forwards';
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe cards and sections
document.querySelectorAll('.card, .blog-post').forEach(element => {
  observer.observe(element);
});

// ---- ACTIVE NAV LINK HIGHLIGHTING ----
const navLinks = document.querySelectorAll('nav a');
const currentPage = window.location.pathname.split('/').pop() || 'index.html';

navLinks.forEach(link => {
  const href = link.getAttribute('href');
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    link.style.color = '#ffd700';
  }
});

// ---- SMOOTH SCROLL FOR ANCHOR LINKS ----
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
      e.preventDefault();
      target.scrollIntoView({
        behavior: 'smooth'
      });
    }
  });
});

// ---- DYNAMIC GREETING ----
function getGreeting() {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good Morning! ☀️';
  if (hour < 18) return 'Good Afternoon! ☁️';
  return 'Good Evening! 🌙';
}

// Display greeting if element exists
const greetingElement = document.getElementById('greeting');
if (greetingElement) {
  greetingElement.textContent = getGreeting();
}

// ---- REAL-TIME CLOCK ----
function updateClock() {
  const clockElement = document.getElementById('clock');
  if (clockElement) {
    const now = new Date();
    const timeString = now.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
      second: '2-digit',
      hour12: true
    });
    clockElement.textContent = timeString;
  }
}

if (document.getElementById('clock')) {
  updateClock();
  setInterval(updateClock, 1000);
}

// ---- LAZY LOADING IMAGES ----
if ('IntersectionObserver' in window) {
  const lazyImages = document.querySelectorAll('img[data-src]');
  
  const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.src = img.dataset.src;
        img.removeAttribute('data-src');
        imageObserver.unobserve(img);
      }
    });
  });

  lazyImages.forEach(img => imageObserver.observe(img));
}

// ---- SMOOTH PAGE TRANSITIONS ----
document.addEventListener('DOMContentLoaded', () => {
  document.body.style.animation = 'fadeIn 0.5s ease';
});
