/* ============================================================
   The King's Academy JH Math Team — interactions & rendering
   Depends on data.js (LINKS, TIMELINE, HOUSES, GRADE_LABEL,
   COACHES, ADVISOR, JV_COACHES).
   ============================================================ */

(function () {
  "use strict";

  const $  = (sel, ctx = document) => ctx.querySelector(sel);
  const $$ = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
  const houseByKey = key => HOUSES.find(h => h.key === key) || { name: key, accent: "var(--current)" };
  const initials = name => name.split(/\s+/).map(w => w[0]).join("").slice(0, 2).toUpperCase();

  /* ---------- Wire up external links ---------- */
  function wireLinks() {
    const apply = [ $("#applyBtn") ];
    apply.forEach(a => a && (a.href = LINKS.application));
    [ $("#absenceBtn"), $("#footerAbsence") ].forEach(a => a && (a.href = LINKS.absence));
    // Nav "Absence Form" points at the on-page section, which links out — keep as anchor.
  }

  /* ---------- Houses ---------- */
  function renderHouses() {
    const grid = $("#houses-grid");
    if (!grid) return;
    grid.innerHTML = HOUSES.map(house => {
      const members = COACHES.filter(c => c.house === house.key)
        .sort((a, b) => b.grade - a.grade || a.name.localeCompare(b.name));
      const items = members.map(m =>
        `<li><span>${m.name}</span><span class="grade">${GRADE_LABEL[m.grade] || ""}</span></li>`
      ).join("");
      return `
        <article class="house reveal" style="--a:${house.accent}">
          <div class="house__top">
            <div class="house__jelly">🪼</div>
            <div class="house__name">${house.name}</div>
          </div>
          <ul class="house__members">${items}</ul>
        </article>`;
    }).join("");
  }

  /* ---------- Coaches ---------- */
  function photoMarkup(person) {
    const src = `assets/coaches/${person.photo}`;
    // Try the real photo; if it fails to load, fall back to an initials tile.
    return `
      <img class="coach__photo" src="${src}" alt="${person.name}" loading="lazy"
           onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'coach__photo coach__photo--placeholder',textContent:'${initials(person.name)}'}))" />`;
  }

  function coachCard(c) {
    const house = houseByKey(c.house);
    const bio = c.bio
      ? `<p class="coach__bio">${c.bio}</p>`
      : `<p class="coach__bio is-empty">Bio coming soon.</p>`;
    return `
      <article class="coach reveal" data-house="${c.house}">
        ${photoMarkup(c)}
        <div class="coach__body">
          <div class="coach__namerow">
            <h3 class="coach__name">${c.name}</h3>
            <span class="coach__grade">${GRADE_LABEL[c.grade] || ""}</span>
          </div>
          <span class="coach__house" style="background:${house.accent}">🪼 ${house.name}</span>
          ${bio}
        </div>
      </article>`;
  }

  /* JV coaches have no house — simpler card, but still show grade/role when known. */
  function jvCoachCard(c) {
    const bio = c.bio
      ? `<p class="coach__bio">${c.bio}</p>`
      : `<p class="coach__bio is-empty">Bio coming soon.</p>`;
    const gradeLabel = c.grade ? GRADE_LABEL[c.grade] || "" : "";
    const roleLine = c.role ? `<span class="coach__role">${c.role}</span>` : "";
    return `
      <article class="coach reveal">
        ${photoMarkup(c)}
        <div class="coach__body">
          <div class="coach__namerow">
            <h3 class="coach__name">${c.name}</h3>
            <span class="coach__grade">${gradeLabel}</span>
          </div>
          <span class="coach__house" style="background:var(--current)">🪼 JV</span>
          ${roleLine}
          ${bio}
        </div>
      </article>`;
  }

  function renderAdvisor() {
    const wrap = $("#advisor");
    if (!wrap || typeof ADVISOR === "undefined") return;
    const bio = ADVISOR.bio
      ? `<p class="coach__bio">${ADVISOR.bio}</p>`
      : `<p class="coach__bio is-empty">Bio coming soon.</p>`;
    wrap.innerHTML = `
      <article class="coach reveal">
        ${photoMarkup(ADVISOR)}
        <div class="coach__body">
          <div class="coach__namerow">
            <h3 class="coach__name">${ADVISOR.name}</h3>
          </div>
          <span class="coach__house advisor__badge">${ADVISOR.role}</span>
          ${bio}
        </div>
      </article>`;
  }

  function renderCoaches() {
    const grid = $("#coaches-grid");
    if (!grid) return;
    // Default (unfiltered) order: by grade / age (seniors first), then alphabetically.
    const ordered = [...COACHES].sort((a, b) =>
      b.grade - a.grade || a.name.localeCompare(b.name));
    grid.innerHTML = ordered.map(coachCard).join("");
  }

  function renderJVCoaches() {
    const grid = $("#jv-coaches-grid");
    if (!grid || typeof JV_COACHES === "undefined") return;
    const ordered = [...JV_COACHES].sort((a, b) =>
      (b.grade || 0) - (a.grade || 0) || a.name.localeCompare(b.name));
    grid.innerHTML = ordered.map(jvCoachCard).join("");
  }

  function renderFilters() {
    const bar = $("#filters");
    if (!bar) return;
    const btns = HOUSES.map(h =>
      `<button class="filter" data-house="${h.key}">${h.name}</button>`).join("");
    bar.insertAdjacentHTML("beforeend", btns);

    bar.addEventListener("click", e => {
      const btn = e.target.closest(".filter");
      if (!btn) return;
      $$(".filter", bar).forEach(b => b.classList.remove("is-active"));
      btn.classList.add("is-active");
      const key = btn.dataset.house;
      $$(".coach", $("#coaches-grid")).forEach(card => {
        const show = key === "all" || card.dataset.house === key;
        card.style.display = show ? "" : "none";
      });
    });
  }

  /* ---------- Timeline ---------- */
  function renderTimeline() {
    const ol = $("#timeline");
    if (!ol) return;
    ol.innerHTML = TIMELINE.map(t => `
      <li class="reveal">
        <div class="t-date">${t.date}</div>
        <div class="t-title">${t.title}</div>
        <div class="t-detail">${t.detail}</div>
      </li>`).join("");
  }

  /* ---------- Nav (mobile toggle + shrink) ---------- */
  function wireNav() {
    const nav = $("#nav");
    const toggle = $("#navToggle");
    if (toggle) {
      toggle.addEventListener("click", () => {
        const open = nav.classList.toggle("is-open");
        toggle.setAttribute("aria-expanded", String(open));
      });
      $$(".nav__links a").forEach(a =>
        a.addEventListener("click", () => nav.classList.remove("is-open")));
    }
  }

  /* ---------- Reveal on scroll ---------- */
  function wireReveal() {
    const els = $$(".reveal");
    if (!("IntersectionObserver" in window)) {
      els.forEach(el => el.classList.add("is-visible"));
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach(en => {
        if (en.isIntersecting) { en.target.classList.add("is-visible"); io.unobserve(en.target); }
      });
    }, { threshold: 0.12 });
    els.forEach(el => io.observe(el));
  }

  /* ---------- Ocean animation: bubbles + jellyfish ---------- */
  const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Deterministic pseudo-random so layout is stable but varied.
  function seeded(i) {
    const x = Math.sin(i * 12.9898) * 43758.5453;
    return x - Math.floor(x);
  }

  function makeBubbles() {
    const wrap = $("#bubbles");
    if (!wrap || prefersReduced) return;
    const n = window.innerWidth < 640 ? 14 : 26;
    let html = "";
    for (let i = 0; i < n; i++) {
      const size = 6 + seeded(i) * 26;
      const left = seeded(i + 100) * 100;
      const dur = 9 + seeded(i + 200) * 14;
      const delay = -seeded(i + 300) * dur;
      html += `<span class="bubble" style="width:${size}px;height:${size}px;left:${left}%;animation-duration:${dur}s;animation-delay:${delay}s"></span>`;
    }
    wrap.innerHTML = html;
  }

  function jellySVG(hue) {
    // A small stylized jellyfish with a pulsing bell and wavy tentacles.
    return `
      <svg width="90" height="130" viewBox="0 0 90 130" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g class="bell">
          <path d="M8 46 C8 20 82 20 82 46 C82 58 72 64 66 64 L24 64 C18 64 8 58 8 46 Z"
                fill="${hue}" fill-opacity="0.85"/>
          <ellipse cx="45" cy="40" rx="30" ry="18" fill="#ffffff" fill-opacity="0.18"/>
        </g>
        <g stroke="${hue}" stroke-opacity="0.75" stroke-width="3" stroke-linecap="round" fill="none">
          <path d="M26 64 q -6 22 2 44"/>
          <path d="M38 66 q 4 24 -2 48"/>
          <path d="M52 66 q -4 24 2 48"/>
          <path d="M64 64 q 6 22 -2 44"/>
          <path d="M45 66 q 0 26 0 50"/>
        </g>
      </svg>`;
  }

  function makeJellies() {
    const wrap = $("#jellies");
    if (!wrap || prefersReduced) return;
    const hues = ["#7d6fd1", "#5fb8d8", "#cedaef", "#339cc6"];
    const n = window.innerWidth < 640 ? 3 : 5;
    let html = "";
    for (let i = 0; i < n; i++) {
      const left = 6 + seeded(i + 11) * 84;
      const top = 8 + seeded(i + 22) * 74;
      const scale = 0.55 + seeded(i + 33) * 0.9;
      const dur = 7 + seeded(i + 44) * 6;
      const pdur = 2.4 + seeded(i + 55) * 2;
      const delay = -seeded(i + 66) * dur;
      const hue = hues[i % hues.length];
      html += `<div class="jelly" style="left:${left}%;top:${top}%;transform:scale(${scale});
                 animation-duration:${dur}s;animation-delay:${delay}s;opacity:${0.5 + seeded(i + 77) * 0.35}">
                 ${jellySVG(hue)}</div>`;
    }
    wrap.innerHTML = html;
    // apply pulse duration per-jelly bell
    $$(".jelly .bell", wrap).forEach((bell, i) => {
      bell.style.animationDuration = (2.4 + seeded(i + 55) * 2) + "s";
    });
  }

  /* ---------- Init ---------- */
  document.addEventListener("DOMContentLoaded", () => {
    wireLinks();
    renderHouses();
    renderAdvisor();
    renderCoaches();
    renderJVCoaches();
    renderFilters();
    renderTimeline();
    wireNav();
    makeBubbles();
    makeJellies();
    wireReveal();
  });
})();
