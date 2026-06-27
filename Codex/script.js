// Header y menu mobile
const menuToggle = document.querySelector(".menu-toggle");
const navMenu = document.querySelector(".nav-menu");
const navLinks = document.querySelectorAll(".nav-menu a");

function closeMenu() {
  menuToggle.setAttribute("aria-expanded", "false");
  menuToggle.setAttribute("aria-label", "Abrir menu");
  navMenu.classList.remove("is-open");
  document.body.classList.remove("menu-open");
}

function toggleMenu() {
  const isOpen = menuToggle.getAttribute("aria-expanded") === "true";

  if (isOpen) {
    closeMenu();
    return;
  }

  menuToggle.setAttribute("aria-expanded", "true");
  menuToggle.setAttribute("aria-label", "Cerrar menu");
  navMenu.classList.add("is-open");
  document.body.classList.add("menu-open");
}

menuToggle.addEventListener("click", toggleMenu);

navLinks.forEach((link) => {
  link.addEventListener("click", closeMenu);
});

window.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && navMenu.classList.contains("is-open")) {
    closeMenu();
  }
});

window.addEventListener("resize", () => {
  if (window.innerWidth >= 900 && navMenu.classList.contains("is-open")) {
    closeMenu();
  }
});

// Formulario visual
const contactForm = document.querySelector(".contact-form");
const formStatus = document.querySelector(".form-status");

contactForm.addEventListener("submit", (event) => {
  event.preventDefault();
  formStatus.textContent = "Consulta lista para enviar. Gracias por contactar a Pulse Agency.";
  contactForm.reset();
});
