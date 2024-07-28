// script.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    
    navLinks.forEach(link => {
      link.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        window.scrollTo({
          top: target.offsetTop - document.querySelector('header').offsetHeight,
          behavior: 'smooth'
        });
      });
    });
  
    // Optionally, add more JS for animations or interactions
  });
  