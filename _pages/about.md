---
permalink: /
title: ""
author_profile: false
redirect_from:
  - /about/
  - /about.html
---

<div class="home-scroll" data-snap-home>
  <section class="home-panel portfolio-landing text-center" id="home-intro">
    <div class="home-panel__inner">
      <div class="home-identity">
        <div class="home-portrait-wrap" aria-hidden="true">
          <img class="home-portrait" src="{{ base_path }}/images/HarrisonSquires_Headshot.jpg" alt="">
        </div>
        <div class="home-copy">
          <p class="home-kicker">University of Edinburgh</p>
          <h1 class="home-title">Harrison F. Squires</h1>
          <p class="home-subtitle"><em>Experimental Biophysics PhD Student.</em><br><em>Nucleic acid nanotechnology, soft matter, and experimental physics.</em></p>
          <div class="landing-actions">
            <a class="btn btn--primary" href="{{ '/cv/' | relative_url }}"><i class="fas fa-file-lines" aria-hidden="true"></i> View CV</a>
          </div>
        </div>
      </div>
      <a class="scroll-cue" href="#research-snapshot" aria-label="Scroll to research snapshot">
        <i class="fas fa-chevron-down" aria-hidden="true"></i>
      </a>
    </div>
  </section>

  <section class="home-panel research-snapshot" id="research-snapshot">
    <div class="home-panel__inner">
      <p class="home-kicker">Current Direction</p>
      <h2>Highly interested in applying DNA nanotechnology to rare earth element recycling and biosensing.</h2>
      <div class="snapshot-grid">
        <article>
          <span>01</span>
          <h3>PhD Research</h3>
          <p>Towards machine olfaction as a new ISR modality, with a focus on nucleic acid nanotechnology.</p>
        </article>
        <article>
          <span>02</span>
          <h3>Recent Work</h3>
          <p>DNA nanostars, breath figures, terahertz methods, and carbon fibre electrodes for neural recording.</p>
        </article>
        <article>
          <span>03</span>
          <h3>Methods</h3>
          <p>Experimental design, imaging workflows, FIJI, Python, MATLAB, and statistical data analysis.</p>
        </article>
      </div>
      <div class="logo-wrap">
        <img class="edinburgh-logo" src="{{ base_path }}/images/edinburgh-official.svg" alt="University of Edinburgh logo">
      </div>
    </div>
  </section>
</div>

<script>
document.addEventListener("DOMContentLoaded", function () {
  var home = document.querySelector(".home-scroll");
  var hero = document.getElementById("home-intro");
  if (!home || !hero || window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return;
  }

  function updateHero() {
    var progress = Math.min(Math.max(window.scrollY / 260, 0), 1);
    home.style.setProperty("--hero-progress", progress.toFixed(3));
    home.classList.toggle("is-hero-scrolled", progress > 0.18);
  }

  updateHero();
  window.addEventListener("scroll", updateHero, { passive: true });
});
</script>

<style>
html {
  scroll-behavior: smooth;
}

.archive,
.page {
  background: transparent;
  border: 0;
  box-shadow: none;
  padding: 0;
}

.home-panel {
  min-height: calc(100vh - 7rem);
  display: grid;
  place-items: center;
  padding: clamp(2rem, 5vw, 4rem) 1rem;
}

.home-panel__inner {
  width: min(980px, 100%);
  margin: 0 auto;
  text-align: center;
}

.portfolio-landing {
  min-height: calc(112vh - 7rem);
}

.portfolio-landing .home-panel__inner {
  position: sticky;
  top: clamp(5.5rem, 18vh, 8rem);
  transform: translateY(calc(var(--hero-progress, 0) * -0.4rem)) scale(calc(1 - (var(--hero-progress, 0) * 0.08)));
  transform-origin: center;
  transition: transform 360ms cubic-bezier(0.16, 1, 0.3, 1);
}

.home-identity {
  display: grid;
  justify-items: center;
  gap: clamp(1.2rem, 3vw, 2rem);
}

.home-portrait-wrap {
  width: clamp(8.5rem, 18vw, 14rem);
  aspect-ratio: 1;
  padding: 0.38rem;
  background: var(--global-bg-color);
  border: 2px solid var(--global-dark-border-color);
  border-radius: 50%;
}

.home-portrait {
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: center;
  border-radius: 50%;
}

.home-copy {
  max-width: 960px;
}

.portfolio-landing .home-title {
  font-size: clamp(2.8rem, 7vw, 5.25rem);
  margin: 0 0 1rem;
  font-weight: 800;
  line-height: 0.95;
}

.portfolio-landing .home-subtitle,
.research-snapshot p {
  font-size: clamp(1.05rem, 1.7vw, 1.35rem);
  margin: 0;
  color: var(--global-text-color-light);
}

.home-kicker {
  color: var(--global-link-color) !important;
  font-size: 0.78rem !important;
  font-weight: 800;
  letter-spacing: 0.12em;
  margin-bottom: 1rem !important;
  text-transform: uppercase;
}

.portfolio-landing .landing-actions {
  justify-content: center;
}

.scroll-cue {
  display: inline-grid;
  place-items: center;
  width: 2.75rem;
  height: 2.75rem;
  margin-top: 2rem;
  color: var(--global-link-color);
  background: var(--global-thead-color);
  border: 1px solid var(--global-dark-border-color);
  border-radius: 999px;
  box-shadow: 0 10px 24px rgba(31, 45, 53, 0.12);
  opacity: 0;
  transform: translateY(0.75rem) scale(0.88);
  text-decoration: none;
  transition:
    opacity 720ms ease,
    transform 900ms cubic-bezier(0.18, 1.35, 0.28, 1),
    box-shadow 340ms ease;
}

.home-scroll:not(.is-hero-scrolled) .scroll-cue {
  opacity: 0;
  pointer-events: none;
  transform: translateY(0.75rem) scale(0.88);
  animation: none;
}

.home-scroll.is-hero-scrolled .scroll-cue {
  opacity: 1;
  transform: translateY(0) scale(1);
  animation: cue-pulse 3.8s ease-in-out infinite;
}

.scroll-cue:hover {
  box-shadow: 0 14px 32px rgba(31, 45, 53, 0.16);
}

.research-snapshot {
  border-top: 1px solid var(--global-dark-border-color);
}

.research-snapshot .reveal-on-scroll {
  transform: translateY(1.75rem) scale(0.91);
  transition:
    opacity 1000ms ease,
    transform 1450ms cubic-bezier(0.15, 1.75, 0.28, 1);
}

.research-snapshot .reveal-on-scroll.is-visible {
  transform: translateY(0) scale(1);
}

.research-snapshot h2 {
  max-width: 820px;
  margin: 0 auto 2rem;
  color: var(--global-base-color);
  font-size: clamp(1.8rem, 3.6vw, 3.15rem);
  line-height: 1.08;
}

.snapshot-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1rem;
  margin: 2rem 0;
  text-align: left;
}

.snapshot-grid article {
  min-height: 13rem;
  padding: 1.25rem;
  background: var(--global-thead-color);
  border: 1px solid var(--global-dark-border-color);
  border-radius: 8px;
  box-shadow: 0 14px 35px rgba(31, 45, 53, 0.07);
}

.snapshot-grid span {
  color: var(--global-link-color);
  font-weight: 800;
  font-size: 0.82rem;
}

.snapshot-grid h3 {
  margin-top: 0.75rem;
  color: var(--global-text-color);
}

.snapshot-grid p {
  font-size: 0.98rem;
}

.logo-wrap {
  margin-top: 1.5rem;
}

.edinburgh-logo {
  width: min(250px, 48vw);
  height: auto;
  display: inline-block;
}

@keyframes cue-pulse {
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(0.35rem);
  }
}

@media (max-width: 760px) {
  .home-panel {
    min-height: auto;
    padding: 3rem 0;
  }

  .portfolio-landing {
    min-height: 78vh;
  }

  .portfolio-landing .home-panel__inner {
    position: relative;
    top: auto;
  }

  .home-identity {
    gap: 1.15rem;
  }

  .home-portrait-wrap {
    width: min(52vw, 10.5rem);
  }

  .portfolio-landing .home-title {
    font-size: clamp(2.65rem, 14vw, 4rem);
  }

  .portfolio-landing .home-subtitle {
    font-size: clamp(1.05rem, 6vw, 1.45rem);
  }

  .snapshot-grid {
    grid-template-columns: 1fr;
  }

  .snapshot-grid article {
    min-height: auto;
  }
}

@media (prefers-reduced-motion: reduce) {
  html {
    scroll-behavior: auto;
  }

  .scroll-cue {
    opacity: 1;
    transform: none;
    animation: none;
  }

  .portfolio-landing .home-panel__inner {
    transform: none;
    transition: none;
  }
}
</style>
