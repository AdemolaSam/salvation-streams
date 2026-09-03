/* ============================================================
   Salvation Streams - Hash router + shared page helpers
   ============================================================ */
(function () {
  "use strict";

  var ROUTES = {
    home: {
      title: "Salvation Streams | Timeless Renewal",
      render: window.renderHome,
      init: window.initHome,
    },
    fellowships: {
      title: "Fellowships - Salvation Streams",
      render: window.renderFellowships,
      init: window.initFellowships,
    },
    missions: {
      title: "Missions - Salvation Streams",
      render: window.renderMissions,
      init: window.initMissions,
    },
    give: {
      title: "Give - Salvation Streams",
      render: window.renderGive,
      init: window.initGive,
    },
  };

  function animateValue(obj, start, end, duration) {
    var startTimestamp = null;
    function step(timestamp) {
      if (!startTimestamp) startTimestamp = timestamp;
      var progress = Math.min((timestamp - startTimestamp) / duration, 1);
      var easeProgress = progress * (2 - progress);
      obj.innerHTML = Math.floor(easeProgress * (end - start) + start) + (end > 10 ? "+" : "");
      if (progress < 1) window.requestAnimationFrame(step);
    }
    window.requestAnimationFrame(step);
  }

  function observeFadeIns() {
    var fadeElements = document.querySelectorAll(".fade-in-section");
    if (!fadeElements.length) return;
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (!entry.isIntersecting) return;
          var stats = entry.target.querySelectorAll(".stat-number");
          stats.forEach(function (stat) {
            var target = parseInt(stat.getAttribute("data-target"), 10);
            animateValue(stat, 0, target, 2000);
            stat.classList.remove("stat-number");
          });
          entry.target.classList.add("is-visible");
          observer.unobserve(entry.target);
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    fadeElements.forEach(function (el) {
      observer.observe(el);
    });
  }

  function updateActiveNav(path) {
    document.querySelectorAll("[data-nav]").forEach(function (link) {
      var isActive = link.getAttribute("data-nav") === path;
      link.classList.toggle("nav-active", isActive);
      link.classList.toggle("text-on-surface-variant", !isActive);
      link.classList.toggle("text-secondary", isActive);
      link.classList.toggle("font-bold", isActive);
      link.classList.toggle("border-b-2", isActive);
      link.classList.toggle("border-secondary", isActive);
      link.classList.toggle("pb-1", isActive);
    });
  }

  function handleRoute() {
    var path = window.location.hash.replace(/^#\/?/, "") || "home";
    var route = ROUTES[path] || ROUTES.home;

    document.title = route.title;
    var main = document.getElementById("page-content");
    main.innerHTML = route.render();

    updateActiveNav(path);
    window.scrollTo(0, 0);
    observeFadeIns();
    if (typeof route.init === "function") route.init();
  }

  window.AppRouter = {
    handleRoute: handleRoute,
  };
})();
