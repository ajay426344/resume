// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        // Scroll to the corresponding section smoothly
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Visitor Counter Script (using localStorage to track visits)
document.addEventListener("DOMContentLoaded", () => {
    let count = localStorage.getItem("visitorCount") || 0;
    count++;
    localStorage.setItem("visitorCount", count);
    document.getElementById("visitor-count").textContent = count;
});
