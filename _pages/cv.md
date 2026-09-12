---
layout: archive
title: ""
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
.page__content .reveal-on-scroll {
  transition:
    opacity 620ms ease,
    transform 700ms cubic-bezier(0.16, 1, 0.3, 1);
}

.page__content .cv-reveal-item {
  opacity: 0;
  transform: translateY(1rem);
  transition:
    opacity 760ms ease,
    transform 860ms cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: var(--reveal-delay, 0ms);
}

.page__content .cv-reveal-item.is-visible {
  opacity: 1;
  transform: translateY(0);
}

.page__content > h1:first-of-type {
  margin-bottom: 0.35rem;
  color: var(--global-text-color);
  font-size: clamp(2.15rem, 4vw, 3.2rem);
  line-height: 1;
}

.page__content > h1:first-of-type + p {
  margin-bottom: 1.25rem;
  color: var(--global-text-color-light);
  font-size: 1.08rem;
}

.cv-markdown {
  margin-top: 2.25rem;
}

.cv-markdown h1 {
  position: relative;
  margin: 3.25rem 0 1.45rem;
  color: var(--global-text-color);
  font-size: clamp(1.65rem, 2.6vw, 2.25rem);
  line-height: 1.05;
  transition:
    color 360ms ease,
    border-color 360ms ease;
}

.cv-markdown h1 {
  padding-top: 1.15rem;
  border-top: 2px solid rgba(183, 0, 56, 0.18);
}

.cv-markdown h1.is-active-section {
  border-top-color: rgba(183, 0, 56, 0.46);
  color: var(--global-base-color);
}

.cv-markdown p:has(> strong:first-child) {
  margin: 2.15rem 0 0.35rem;
  font-size: 1.02rem;
  line-height: 1.45;
}

.cv-markdown p:has(> strong:first-child) strong {
  display: inline-block;
  margin-right: 0.25rem;
  color: var(--global-text-color);
  font-size: 1.18em;
  line-height: 1.2;
}

.cv-markdown p:has(> strong:first-child) em:first-of-type {
  display: inline-block;
  color: var(--global-link-color);
  font-size: 0.96em;
}

.cv-markdown p:has(> strong:first-child) em:not(:first-of-type) {
  display: block;
  margin-top: 0.18rem;
  color: var(--global-text-color-light);
  font-size: 0.98em;
}

.cv-markdown ul {
  margin-bottom: 1.65rem;
}

.cv-markdown li {
  margin-bottom: 0.45rem;
}

@media (max-width: 760px) {
  .page__content {
    padding-inline: 0.2rem;
  }

  .page__content > h1:first-of-type {
    font-size: clamp(2rem, 11vw, 2.7rem);
  }

  .cv-markdown h1 {
    margin-top: 2.45rem;
    font-size: 1.55rem;
  }

  .cv-markdown p:has(> strong:first-child) {
    margin-top: 1.65rem;
    font-size: 1rem;
  }

  .cv-markdown p:has(> strong:first-child) strong,
  .cv-markdown p:has(> strong:first-child) em:first-of-type {
    display: block;
  }
}

@media screen and (max-width: 1180px) {
  #main {
    display: block;
    max-width: min(980px, calc(100vw - 2rem));
    margin-left: auto;
    margin-right: auto;
    padding-left: 0;
    padding-right: 0;
  }

  #main .sidebar,
  #main .archive {
    box-sizing: border-box;
    width: 100%;
    max-width: 980px;
    float: none;
    clear: both;
    margin-left: auto;
    margin-right: auto;
  }

  #main .sidebar {
    max-width: min(760px, 100%);
  }

  #main .sidebar {
    position: relative;
    top: auto;
    -webkit-transform: none;
    transform: none;
    display: grid;
    grid-template-columns: 1fr;
    justify-items: center;
    gap: 0.7rem;
    align-items: center;
    width: 100%;
    height: auto;
    min-height: 0;
    float: none;
    margin: 0 auto clamp(2rem, 4vw, 3rem);
    padding: clamp(1.45rem, 4vw, 2rem) clamp(1rem, 4vw, 1.5rem);
    overflow: visible;
    background: rgba(255, 250, 242, 0.64);
    border: 1px solid var(--global-dark-border-color);
    border-radius: 8px;
  }

  #main .author__avatar {
    display: block;
    width: clamp(96px, 16vw, 118px);
    margin: 0 auto;
  }

  #main .author__avatar img {
    max-width: clamp(96px, 16vw, 118px);
  }

  #main .author__content {
    display: block;
    padding: 0;
    text-align: center;
  }

  #main .sidebar .author__name {
    font-size: clamp(1.5rem, 4.6vw, 2rem);
    line-height: 1.05;
  }

  #main .author__bio {
    max-width: 30rem;
    margin: 0.35rem auto 0;
    font-size: clamp(1rem, 2.8vw, 1.05rem);
    line-height: 1.32;
  }

  #main .author__urls-wrapper {
    margin-top: 0.25rem;
  }

  #main .author__urls {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.55rem;
  }

  #main .author__urls li {
    max-width: none;
  }

  #main .author__urls a {
    align-items: center;
    justify-content: center;
    min-height: 2.25rem;
    margin: 0;
    padding: 0.38rem 0.68rem;
    border: 1px solid var(--global-dark-border-color);
    border-radius: 999px;
    background: rgba(255, 250, 242, 0.82);
    font-size: 1rem;
    line-height: 1;
  }
}

@media screen and (min-width: 925px) and (max-width: 1180px) {
  #main .archive {
    clear: both;
    margin-left: auto;
    margin-right: auto;
    padding: clamp(1.4rem, 3vw, 2rem);
  }
}

@media screen and (max-width: 924px) {
  #main {
    max-width: min(760px, calc(100vw - 1.8rem));
  }

  #main .sidebar,
  #main .archive {
    max-width: 760px;
  }
}

@media screen and (max-width: 600px) {
  #main {
    max-width: none;
    padding-left: 0.9rem;
    padding-right: 0.9rem;
  }

  #main .sidebar {
    margin-bottom: 1.4rem;
  }
}

@media screen and (min-width: 1181px) {
  #main {
    display: grid;
    grid-template-columns: minmax(240px, 300px) minmax(0, 1fr);
    gap: clamp(2rem, 4vw, 3.5rem);
    align-items: start;
    max-width: min(1380px, calc(100vw - 5rem));
  }

  #main .sidebar {
    position: sticky;
    top: 6rem;
    width: 100%;
    max-width: 300px;
    height: auto;
    max-height: calc(100vh - 7rem);
    float: none;
    padding-top: 0;
    overflow-y: auto;
  }

  #main .author__bio {
    max-width: 100%;
    white-space: normal;
    overflow-wrap: normal;
    hyphens: manual;
  }

  #main .archive {
    width: 100%;
    max-width: none;
    float: none;
    margin: 0;
    padding: clamp(1.7rem, 3vw, 2.35rem);
  }
}
</style>

# Harrison F. Squires

Experimental Biophysics PhD Student, University of Edinburgh


**Phone**: [+44 7450 940601](tel:+447450940601)<br>
**Email**: [harrison.squires@ed.ac.uk](mailto:harrison.squires@ed.ac.uk)

<div class="cv-actions">
  <a class="btn btn--primary" href="{{ '/files/cv.pdf' | relative_url }}" download><i class="fas fa-download" aria-hidden="true"></i> Download PDF</a>
</div>

<div class="cv-markdown" markdown="1">

Research Experience
======
**Experimental Biophysics PhD** *(September 2026 – Present)*
*University of Edinburgh, Edinburgh, UK*
- **Project:** "Towards machine olfaction, a new ISR modality", supervised by Prof. Davide Michieletto (academic) and Dr Neal Hopkins (industry; Dstl).
- Research focus: nucleic acid nanotechnology.
- Recipient of SPADS CDT doctoral funding.
- Awarded an additional £10k annual Research Training Support Grant from the OCSA Bio Tech Centre.

**Bridging Research Intern** *(June 2026 – August 2026)*
*University of Edinburgh, Edinburgh, UK*
- Awarded bridging funding to undertake research before commencing PhD studies.
- **Project:** "DNA Nanostars", supervised by Prof. Davide Michieletto and Dr Jenny Harnett.
- Investigated liquid-liquid phase separation in DNA nanostars and its potential application in lanthanide capture.

**MPhys Research Project** *(September 2025 – May 2026)*
*University of Edinburgh, Edinburgh, UK*
- **Project:** “Evaporation of Breath Figures”, supervised by Dr David Fairhurst and Dr Joey Kilbride.
- Extended a [recently published study](https://doi.org/10.1103/6vms-ljj5) by investigating the dynamics of the macroscopic edge effect in respiratory breath figures and its relationship to droplet-size distribution.
- Designed and built an experimental setup for imaging large droplet arrays.
- Developed efficient image, data, and statistical analysis workflows using FIJI and Python.

**Summer Research Intern** *(June 2025 – August 2025)*
*QinetiQ / University of Edinburgh, Edinburgh, UK*
- Produced [“Terahertz Methods for the Characterisation of Materials”]({{ "/files/QinetiQ_Literature_Review___THz_Methods.pdf" | relative_url }}), a literature review advising the company’s future research direction.
- Summarised findings in a final report and developed a comparative table of practical trade-offs.
- Funded by the University of Edinburgh Career Development Scholarship and hosted by QinetiQ.

**Research Intern** *(July 2024 – June 2025)*
*University of Melbourne / Carbon Cybernetics, Melbourne, Australia*
- **Project:** “On the Characterisation of Carbon Fibre Electrodes for Neural Recording”, supervised by Prof. Steven Prawer.
- Contributing author on *Modelling of Intracortical Microwire Electrodes for Brain–Machine Interfaces* (manuscript in preparation).
- Designed and built a benchtop testing system to optimise carbon-fibre microelectrode-array performance.
- Undertook a meta-analysis of *in vivo* datasets to inform optimal array design.
- Automated data acquisition and analysis workflows using MATLAB and Python.
- Delivered weekly research presentations, incorporating group feedback into further development.

Education
======
**University of Edinburgh** *(2021 – 2026)*
*Master of Physics (MPhys), Physics with a Year Abroad — First-Class Honours (75%), Edinburgh, UK*
- Received the [Margaret Campbell-Scott Scholarship](https://www.ed.ac.uk/student-funding/undergraduate/uk-eu/scholarships/science-engineering/physics-and-astronomy) for outstanding entry qualifications.
- Awarded the Career Development Scholarship for a summer project in conjunction with QinetiQ.
- Achieved Certificates of Merit for academic excellence in the first two years.
- Awarded the Junior Honours Class Medal for top performance in the third-year cohort.
- Earned the Edinburgh Award for volunteering contributions to the University Sports Union Jiu Jitsu Club.
- Final-year focus: soft condensed matter (experiment and theory), biological physics, and statistical physics.

Employment History
======
**Academic Tutor** *(March 2025 – June 2025)*
*Newman College, University of Melbourne, Melbourne, Australia*
- Tutored first- and second-year Bachelor of Science students in *Foundations of Physics (PHYC10009)* and *Quantum and Thermal Physics (PHYC20012)*.
- Ran individual consultations and group tutorials, tailoring support to students’ areas of difficulty.
- Designed original resources and problem sets to present physics concepts in novel contexts.

**Cheesemonger** *(June 2023 – December 2023)*
*IJ Mellis, Edinburgh, UK*
- Independently managed shop operations, including opening and closing responsibilities.
- Completed specialised training in product knowledge and food safety.
- Developed expert knowledge of artisanal and regional cheeses.

Volunteering
======
**English as a Second Language Tutor** *(March 2025 – June 2025)*
*Jesuit Worldwide Learning, Remote*
- Supported a refugee student in Kenya in developing English-language skills through personalised, one-to-one conversation practice.

References
======
- [Prof Davide Michieletto](https://www.ph.ed.ac.uk/people/davide-michieletto), University of Edinburgh.
- [Dr David Fairhurst](https://www.ph.ed.ac.uk/people/david-fairhurst), University of Edinburgh.
- [Prof Steven Prawer](https://findanexpert.unimelb.edu.au/profile/14454-steven-prawer), University of Melbourne.

Contact details available on request.

</div>
