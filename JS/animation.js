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

const sections2 = document.querySelectorAll(".section-right");

const observer2 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("right-trasform");
    }
  });
});

sections2.forEach((sec) => observer2.observe(sec));

const sections3 = document.querySelectorAll(".section-left");

const observer3 = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("left-trasform");
    }
  });
});

sections3.forEach((sec) => observer3.observe(sec));

function toggleMenu() {
  const nav = document.getElementById("navigation");
  nav.classList.toggle("show");
}
