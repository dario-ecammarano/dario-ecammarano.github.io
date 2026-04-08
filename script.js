(function () {
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
