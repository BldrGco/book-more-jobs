// Set CTA hrefs to Calendly link
const ctaButtons = document.querySelectorAll('.cta-button');
ctaButtons.forEach(button => {
    button.href = 'https://calendly.com/jezlpstuart/30min'; // Updated to your Calendly link
});

// Smooth scroll (if you add internal links later)
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Fade-in animation for Solution section
window.addEventListener('scroll', () => {
    const solutionSection = document.querySelector('#solution');
    const sectionPosition = solutionSection.getBoundingClientRect().top;
    const screenPosition = window.innerHeight / 1.3;

    if (sectionPosition < screenPosition) {
        solutionSection.classList.add('visible');
    }
});
