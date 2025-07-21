var typed = new Typed(".multiple-text", {
  strings: [
    "Frontend Developer.",
    "Computer Engineer.",
    "And a React Developer.",
  ],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true,
});

const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("animation-trasform");
    }
  });
});

sections.forEach((sec) => observer.observe(sec));
