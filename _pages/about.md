---
permalink: /
title: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<div class="portfolio-landing text-center">
  <h1>Harrison F. Squires</h1>
  <p><em>Final Year MPhys Student.</em><br><em>Aiming To Pursue A PhD In Biophysics.</em></p>
  <div class="logo-wrap">
    <img class="edinburgh-logo" src="{{ base_path }}/images/Edinburgh_White.svg" alt="University of Edinburgh logo">
  </div>
</div>

<style>
.portfolio-landing {
  display: grid;
  place-items: center;
  min-height: 70vh;
  text-align: center;
}

.portfolio-landing h1 {
  font-size: clamp(2.75rem, 6vw, 4.5rem);
  margin: 0 0 1rem;
  font-weight: 700;
}

.portfolio-landing p {
  font-size: clamp(1.1rem, 2vw, 1.5rem);
  margin: 0;
}
.logo-wrap {
  margin-top: 1.5rem;
}
.edinburgh-logo {
  width: min(220px, 40vw);
  height: auto;
  display: inline-block;
}
</style>
