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

window.onload = function () {
  var msnry = new Masonry(".masonry_container", {
    // options
  });
};
