const navOpen = document.querySelector("#nav-open");
const closeMenu = document.querySelector("#close-menu");
const mobileNav = document.querySelector("#mobile-nav");
const navLinkClose = document.querySelectorAll(".nav-link-close");

const closeMobileNav = () => {
  mobileNav.style.display = "none";
  document.body.style.overflow = "auto";
};

closeMenu.addEventListener("click", closeMobileNav);

navLinkClose.forEach((link) => {
  link.addEventListener("click", closeMobileNav);
});
