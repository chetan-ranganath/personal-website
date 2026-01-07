const navToggle = document.getElementById("nav-toggle");
const navMenu = document.getElementById("nav-menu");

navToggle.addEventListener("click", () => {
  navToggle.classList.toggle("active");
  navMenu.classList.toggle("active");
});

const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach((link) => {
  link.addEventListener("click", () => {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
  });
});

document.addEventListener("click", (e) => {
  if (!navToggle.contains(e.target) && !navMenu.contains(e.target)) {
    navToggle.classList.remove("active");
    navMenu.classList.remove("active");
  }
});

document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
});

const header = document.getElementById("header");

window.addEventListener("scroll", () => {
  if (window.scrollY > 50) {
    header.style.boxShadow = "0 2px 20px rgba(0, 0, 0, 0.3)";
  } else {
    header.style.boxShadow = "none";
  }
});
