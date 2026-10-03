// Prépa JBS – navigation (site multi-pages)
document.addEventListener("DOMContentLoaded", () => {
  const header = document.querySelector(".site-header");
  const toggle = document.querySelector(".nav-toggle");
  const nav = document.getElementById("menu-principal");

  // 1. Menu mobile : ouverture / fermeture
  const setMenu = (open) => {
    toggle.setAttribute("aria-expanded", String(open));
    nav.classList.toggle("is-open", open);
    toggle.querySelector(".visually-hidden").textContent =
      open ? "Fermer le menu" : "Ouvrir le menu";
  };

  toggle.addEventListener("click", () => {
    setMenu(toggle.getAttribute("aria-expanded") !== "true");
  });

  // Fermer avec la touche Échap
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      setMenu(false);
      toggle.focus();
    }
  });

  // Fermer si on clique en dehors du menu
  document.addEventListener("click", (e) => {
    if (nav.classList.contains("is-open") && !header.contains(e.target)) {
      setMenu(false);
    }
  });

  // 2. Page active dans le menu (sécurité si aria-current est oublié)
  const current = location.pathname.split("/").pop() || "index.html";
  nav.querySelectorAll("a").forEach((link) => {
    if (link.getAttribute("href") === current) {
      link.setAttribute("aria-current", "page");
    }
  });

  // 3. Ombre sous l'en-tête quand on fait défiler
  const onScroll = () => header.classList.toggle("is-scrolled", window.scrollY > 10);
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();

  // 4. Année automatique dans le pied de page
  const year = document.getElementById("annee");
  if (year) year.textContent = new Date().getFullYear();
});
