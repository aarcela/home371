(function () {
  "use strict";

  AOS.init({
    duration: 800,
    easing: "slide",
    once: true,
  });

  // var rellax = new Rellax(".rellax");

  var preloader = function () {
    var loader = document.querySelector(".loader");
    var overlay = document.getElementById("overlayer");

    function fadeOut(el) {
      el.style.opacity = 1;
      (function fade() {
        if ((el.style.opacity -= 0.1) < 0) {
          el.style.display = "none";
        } else {
          requestAnimationFrame(fade);
        }
      })();
    }

    window.onload = function () {
      fadeOut(loader);
      fadeOut(overlay);
    };

    setTimeout(function () {
      fadeOut(loader);
      fadeOut(overlay);
    }, 200);
  };
  preloader();

  var lightbox = function () {
    var lightboxVideo = GLightbox({
      selector: ".glightbox",
    });
  };
  lightbox();
})();

const cards = document.getElementById("all-cards");
const marketing = document.getElementById("marketing");
const design = document.getElementById("design");
const develop = document.getElementById("develop");
const uiux = document.getElementById("uiux");

var hideCards = function() {
  marketing.style.display = "none";
  design.style.display = "none";
  develop.style.display = "none";
  uiux.style.display = "none";
}
hideCards();

var cardSelected = function(type) {
  cards.style.display = "none";
  switch (type) {
    case "marketing":
      hideCards();
      marketing.style.display = "flex";
      break;
    case "design":
      hideCards();
      design.style.display = "flex";
      break;
    case "develop":
      hideCards();
      develop.style.display = "flex";
      break;
    case "uiux":
      hideCards();
      uiux.style.display = "flex";
      break;

    default:
      break;
  }
}
window.onload = function () {
  var msnry = new Masonry(".masonry_container", {
    // options
  });
};
