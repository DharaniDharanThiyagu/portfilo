// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const target = document.getElementById(targetId);

        if (target) {
            window.scrollTo({
                top: target.offsetTop - 50, // Adjust the offset if you have a fixed header
                behavior: 'smooth',
            });
        }
    });
});

// You can add more JavaScript functionality as needed for your portfolio.
