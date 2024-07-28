import { gsap } from "gsap";

const menuIcon = document.getElementById("mobile-menu-toggle");
const menuIconClose = document.getElementById("mobile-menu-close");
const mobileMenu = document.getElementById("mobile-menu");
const mobileNav = document.getElementById("mobile-nav");
const mobileNavLinks = mobileNav.getElementsByClassName("nav-link");

if (mobileMenu) {
  menuIcon.addEventListener("click", (e) => {
    gsap.to(mobileMenu, {
      display: "block",
      x: 0,
      opacity: 1,
      duration: 0.3,
    });
  });

  menuIconClose.addEventListener("click", (e) => {
    gsap.to(mobileMenu, {
      display: "none",
      x: 500,
      opacity: "0",
      duration: 0.3,
    });
  });

  for (const mobileNavLink in mobileNavLinks) {
    if (mobileNavLinks.hasOwnProperty.call(mobileNavLinks, mobileNavLink)) {
      const element = mobileNavLinks[mobileNavLink];
      element.addEventListener("click", (e) => {
        gsap.to(mobileMenu, {
          display: "none",
          x: 500,
          opacity: "0",
          duration: 0.3,
        });
      });
    }
  }
}
