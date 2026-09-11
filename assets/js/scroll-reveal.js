(function () {
  var revealSelector = [
    ".portfolio-landing > *",
    ".home-panel__inner > *",
    ".snapshot-grid article",
    ".page__content > h1",
    ".page__content > h2",
    ".page__content > h3",
    ".page__content > p",
    ".page__content > ul",
    ".page__content > ol",
    ".archive > h1",
    ".archive > h2",
    ".archive > h3",
    ".archive > p",
    ".archive > ul",
    ".archive > ol",
    ".archive__item",
    ".cv-markdown > h1",
    ".cv-markdown > p",
    ".cv-markdown > ul",
    ".cv-section"
  ].join(", ");

  function initScrollReveal() {
    var items = Array.prototype.slice.call(document.querySelectorAll(revealSelector))
      .filter(function (item) {
        return !item.closest(".masthead, .sidebar, .page__footer");
      });

    if (items.length === 0) {
      return;
    }

    items.forEach(function (item, index) {
      var isCvItem = window.location.pathname.indexOf("/cv") === 0 || item.closest(".cv-container, .cv-markdown");
      var delayStep = isCvItem ? 45 : 110;
      item.classList.add("reveal-on-scroll");
      if (isCvItem) {
        item.classList.add("cv-reveal-item");
      }
      item.style.setProperty("--reveal-delay", Math.min(index % 6, 5) * delayStep + "ms");
    });

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      items.forEach(function (item) {
        item.classList.add("is-visible");
      });
      return;
    }

    var observer = new IntersectionObserver(function (entries, activeObserver) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-visible");
          activeObserver.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.08,
      rootMargin: "0px 0px -14% 0px"
    });

    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  function initCvSectionCue() {
    if (window.location.pathname.indexOf("/cv") !== 0 || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    var headings = Array.prototype.slice.call(document.querySelectorAll(".cv-markdown > h1"));
    if (headings.length === 0) {
      return;
    }

    function setActive(heading) {
      headings.forEach(function (item) {
        item.classList.toggle("is-active-section", item === heading);
      });
    }

    function updateActiveSection() {
      var trigger = window.innerHeight * 0.34;
      var active = headings[0];

      headings.forEach(function (heading) {
        if (heading.getBoundingClientRect().top <= trigger) {
          active = heading;
        }
      });

      setActive(active);
    }

    updateActiveSection();
    window.addEventListener("scroll", updateActiveSection, { passive: true });
    window.addEventListener("resize", updateActiveSection);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      initScrollReveal();
      initCvSectionCue();
    });
  } else {
    initScrollReveal();
    initCvSectionCue();
  }
}());
