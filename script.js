(function () {
  var CONSENT_KEY = "portfolio-cookie-consent";
  var GA_ID = "G-6QL3DFY88N";

  function loadGoogleAnalytics() {
    if (window.__portfolioGA) return;
    window.__portfolioGA = true;
    window.dataLayer = window.dataLayer || [];
    function gtag() {
      window.dataLayer.push(arguments);
    }
    window.gtag = gtag;
    gtag("js", new Date());
    gtag("config", GA_ID);
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
  }

  function cookieBannerEl() {
    return document.getElementById("cookie-consent");
  }

  function hideCookieBanner() {
    var el = cookieBannerEl();
    if (el) el.hidden = true;
  }

  function showCookieBanner() {
    var el = cookieBannerEl();
    if (el) el.hidden = false;
  }

  function initCookieConsent() {
    var acceptBtn = document.querySelector(".js-cookie-accept");
    var rejectBtn = document.querySelector(".js-cookie-reject");
    if (acceptBtn) {
      acceptBtn.addEventListener("click", function () {
        try {
          localStorage.setItem(CONSENT_KEY, "granted");
        } catch (e) {}
        loadGoogleAnalytics();
        hideCookieBanner();
      });
    }
    if (rejectBtn) {
      rejectBtn.addEventListener("click", function () {
        try {
          localStorage.setItem(CONSENT_KEY, "denied");
        } catch (e) {}
        hideCookieBanner();
      });
    }

    var v = null;
    try {
      v = localStorage.getItem(CONSENT_KEY);
    } catch (e) {}
    if (v === "granted") {
      loadGoogleAnalytics();
      return;
    }
    if (v === "denied") {
      return;
    }
    showCookieBanner();
  }

  initCookieConsent();

  var y = document.getElementById("year");
  if (y) y.textContent = String(new Date().getFullYear());

  var toggle = document.querySelector(".nav-toggle");
  var nav = document.querySelector(".nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      nav.classList.toggle("is-open");
    });
    nav.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", function () {
        nav.classList.remove("is-open");
      });
    });
  }
})();
