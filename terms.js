// Mobile nav toggle
const navToggle = document.querySelector(".nav-toggle");
const mainNav = document.querySelector(".main-nav");

if (navToggle && mainNav) {
  navToggle.addEventListener("click", () => {
    mainNav.classList.toggle("open");
  });
}

// Smooth scroll for same-page links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", (e) => {
    const href = anchor.getAttribute("href");
    if (!href || href === "#") return;

    const target = document.querySelector(href);
    if (target) {
      e.preventDefault();
      const rect = target.getBoundingClientRect();
      const offset = window.scrollY + rect.top - 90; // header offset
      window.scrollTo({ top: offset, behavior: "smooth" });
    }
  });
});

// Back to top button
const backToTop = document.querySelector(".back-to-top");

function updateBackToTop() {
  if (!backToTop) return;

  if (window.scrollY > 300) {
    backToTop.classList.add("show");
  } else {
    backToTop.classList.remove("show");
  }
}

if (backToTop) {
  backToTop.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });

  window.addEventListener("scroll", updateBackToTop);
  updateBackToTop();
}
