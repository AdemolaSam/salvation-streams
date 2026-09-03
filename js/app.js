/* ============================================================
   Salvation Streams - App bootstrap
   ============================================================ */
(function () {
  "use strict";

  function closeMobileMenu() {
    var menu = document.getElementById("mobile-menu");
    var btn = document.getElementById("menu-btn");
    if (menu) menu.classList.add("hidden");
    if (btn) btn.innerHTML = '<span class="material-symbols-outlined">menu</span>';
  }

  document.addEventListener("DOMContentLoaded", function () {
    var menuBtn = document.getElementById("menu-btn");
    var mobileMenu = document.getElementById("mobile-menu");

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", function () {
        var open = mobileMenu.classList.contains("hidden");
        if (open) {
          mobileMenu.classList.remove("hidden");
          menuBtn.innerHTML = '<span class="material-symbols-outlined">close</span>';
        } else {
          closeMobileMenu();
        }
      });
      mobileMenu.querySelectorAll("[data-close-menu], a[data-nav]").forEach(function (el) {
        el.addEventListener("click", closeMobileMenu);
      });
    }

    var navbar = document.getElementById("main-nav");
    window.addEventListener("scroll", function () {
      navbar.classList.toggle("nav-scrolled", window.scrollY > 50);
    });

    window.addEventListener("hashchange", function () {
      closeMobileMenu();
      if (window.AppRouter) window.AppRouter.handleRoute();
    });

    if (window.AppRouter) window.AppRouter.handleRoute();
  });
})();
