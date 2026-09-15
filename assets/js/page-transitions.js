(function () {
  var transitionMs = 220;
  var transitionKey = "hfs-page-transition";
  var reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (reducedMotion) {
    return;
  }

  document.documentElement.classList.add("has-page-transitions");

  window.addEventListener("pageshow", function () {
    document.body.classList.remove("is-page-leaving");

    try {
      if (sessionStorage.getItem(transitionKey) !== "1") {
        return;
      }

      sessionStorage.removeItem(transitionKey);
    } catch (error) {
      return;
    }

    document.body.classList.add("is-page-entering");

    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        document.body.classList.remove("is-page-entering");
      });
    });
  });

  document.addEventListener("click", function (event) {
    var link = event.target.closest("a");

    if (
      !link ||
      event.defaultPrevented ||
      event.button !== 0 ||
      event.metaKey ||
      event.ctrlKey ||
      event.shiftKey ||
      event.altKey ||
      link.target ||
      link.hasAttribute("download")
    ) {
      return;
    }

    var href = link.getAttribute("href");

    if (!href || href.charAt(0) === "#" || href.indexOf("mailto:") === 0 || href.indexOf("tel:") === 0) {
      return;
    }

    var destination = new URL(href, window.location.href);

    if (destination.origin !== window.location.origin || destination.pathname.match(/\.(pdf|png|jpe?g|svg|webp)$/i)) {
      return;
    }

    if (
      destination.pathname === window.location.pathname &&
      destination.search === window.location.search &&
      destination.hash
    ) {
      return;
    }

    event.preventDefault();
    document.body.classList.add("is-page-leaving");

    try {
      sessionStorage.setItem(transitionKey, "1");
    } catch (error) {
      // Navigation should continue even when storage is unavailable.
    }

    window.setTimeout(function () {
      window.location.href = destination.href;
    }, transitionMs);
  });
})();
