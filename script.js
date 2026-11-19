// Reveal elements when they enter the screen

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
        }
    });
}, {
    threshold: 0.12
});

document.querySelectorAll(".reveal").forEach((element) => {
    observer.observe(element);
});


// Slight mouse-follow effect on desktop

const glow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (event) => {
    if (window.innerWidth > 768) {
        glow.style.left = event.clientX + "px";
        glow.style.top = event.clientY + "px";
    }
});


// Current year in footer

const footer = document.querySelector("footer");

footer.innerHTML = footer.innerHTML.replace(
    "2026",
    new Date().getFullYear()
);