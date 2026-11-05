/* =========================================================
   WINTEC FOAM — builds the page from /content/*.js
   You normally do not need to edit this file.
   To change text or images, edit content/en.js, vi.js, zh.js
   ========================================================= */
(function () {
  "use strict";

  var CONTENT = window.SITE_CONTENT || {};
  var LANGS = ["en", "vi", "zh"].filter(function (l) { return CONTENT[l]; });
  var SECTIONS = ["about", "technology", "products", "certifications", "services", "markets", "why", "contact"];
  var state = { lang: pickLang(), product: 0 };

  /* ---------- small helpers ---------- */
  function esc(s) {
    return String(s == null ? "" : s).replace(/[&<>"']/g, function (c) {
      return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c];
    });
  }
  function list(arr, fn) { return (arr || []).map(fn).join(""); }
  function $(sel, root) { return (root || document).querySelector(sel); }
  function $$(sel, root) { return Array.prototype.slice.call((root || document).querySelectorAll(sel)); }
  function store(key, val) { try { if (val === undefined) return localStorage.getItem(key); localStorage.setItem(key, val); } catch (e) { return null; } }

  function pickLang() {
    var q = new URLSearchParams(location.search).get("lang");
    if (q && CONTENT[q]) return q;
    var saved = store("wintec-lang");
    if (saved && CONTENT[saved]) return saved;
    var nav = (navigator.language || "en").toLowerCase();
    if (nav.indexOf("vi") === 0 && CONTENT.vi) return "vi";
    if (nav.indexOf("zh") === 0 && CONTENT.zh) return "zh";
    return "en";
  }

  /* ---------- icons ---------- */
  var ICONS = {
    arrow: '<path d="M5 12h14M13 6l6 6-6 6"/>',
    down: '<path d="M12 5v14M6 13l6 6 6-6"/>',
    up: '<path d="M12 19V5M6 11l6-6 6 6"/>',
    cut: '<circle cx="6" cy="6" r="3"/><circle cx="6" cy="18" r="3"/><path d="M20 4L8.1 15.9M14.5 14.5L20 20M8.1 8.1L12 12"/>',
    clock: '<circle cx="12" cy="12" r="9"/><path d="M12 7v5l3 2"/>',
    tag: '<path d="M20.6 13.4l-7.2 7.2a2 2 0 01-2.8 0L3 13V3h10l7.6 7.6a2 2 0 010 2.8z"/><circle cx="7.5" cy="7.5" r="1.5"/>',
    sofa: '<path d="M4 11V8a3 3 0 013-3h10a3 3 0 013 3v3"/><path d="M2 13a2 2 0 014 0v2h12v-2a2 2 0 014 0v4a2 2 0 01-2 2H4a2 2 0 01-2-2z"/><path d="M5 19v2M19 19v2"/>',
    bed: '<path d="M3 18V6M3 14h18v4M21 18v-6a3 3 0 00-3-3h-7v5"/><circle cx="7" cy="10.5" r="2"/>',
    wave: '<path d="M2 16c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5"/><path d="M2 20c2 0 2-1.5 4-1.5s2 1.5 4 1.5 2-1.5 4-1.5 2 1.5 4 1.5 2-1.5 4-1.5"/><circle cx="16" cy="7" r="3"/>',
    car: '<path d="M5 16l1.5-5A2 2 0 018.4 9.5h7.2a2 2 0 011.9 1.5L19 16"/><rect x="3" y="15" width="18" height="4" rx="1.5"/><path d="M6 19v2M18 19v2"/>',
    medical: '<rect x="3" y="3" width="18" height="18" rx="5"/><path d="M12 8v8M8 12h8"/>',
    box: '<path d="M21 8l-9-5-9 5v8l9 5 9-5z"/><path d="M3 8l9 5 9-5M12 13v8"/>',
    pin: '<path d="M12 21s-7-6.2-7-11.5a7 7 0 0114 0C19 14.8 12 21 12 21z"/><circle cx="12" cy="9.5" r="2.5"/>',
    phone: '<path d="M22 16.9v3a2 2 0 01-2.2 2 19.8 19.8 0 01-8.6-3.1 19.5 19.5 0 01-6-6A19.8 19.8 0 012.1 4.2 2 2 0 014.1 2h3a2 2 0 012 1.7c.1 1 .4 1.9.7 2.8a2 2 0 01-.5 2.1L8 9.9a16 16 0 006 6l1.3-1.3a2 2 0 012.1-.4c.9.3 1.8.6 2.8.7a2 2 0 011.7 2z"/>',
    mail: '<rect x="2" y="4" width="20" height="16" rx="3"/><path d="M22 7l-10 6L2 7"/>',
    globe: '<circle cx="12" cy="12" r="9"/><path d="M3 12h18M12 3a14 14 0 010 18M12 3a14 14 0 000 18"/>',
    external: '<path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5"/>'
  };
  function icon(name) {
    return '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">' + (ICONS[name] || ICONS.box) + "</svg>";
  }
  function tile(img, cap, cls) {
    return '<button type="button" class="tile ' + (cls || "") + '" data-zoom="' + esc(img) + '" data-cap="' + esc(cap) + '">' +
      '<img src="' + esc(img) + '" alt="' + esc(cap) + '" loading="lazy"><span class="cap">' + esc(cap) + "</span></button>";
  }
  function head(sec, center) {
    return '<div class="section-head reveal' + (center ? " center" : "") + '"><span class="kicker">' + esc(sec.kicker) + "</span><h2>" + esc(sec.title) + "</h2>" +
      (sec.intro ? '<p class="lead">' + esc(sec.intro) + "</p>" : "") + "</div>";
  }

  /* wing shape inspired by the logo */
  var WING = '<svg class="hero-wing" viewBox="0 0 600 400" aria-hidden="true"><path fill="#E7791A" d="M70 40c120 10 260 30 360 70l-150 10c60 60 150 140 290 250C420 300 260 220 160 140 110 100 80 70 70 40z"/></svg>';

  /* ---------- section builders ---------- */
  function buildHero(c) {
    var h = c.hero;
    var lines = list(h.titleLines, function (t, i) { return '<span class="' + (i === h.highlight ? "hl" : "dim") + '">' + esc(t) + "</span>"; });
    var grades = (c.stats[1] || {});
    return '<section class="hero" id="hero">' + WING +
      '<div class="container hero-grid">' +
        '<div class="hero-copy"><span class="eyebrow">' + esc(h.eyebrow) + "</span><h1>" + lines + "</h1>" +
          '<p class="hero-text">' + esc(h.text) + "</p>" +
          '<div class="hero-cta"><a class="btn btn-primary" href="#products">' + esc(c.ui.explore) + icon("arrow") + "</a>" +
          '<a class="btn btn-ghost" href="#contact">' + esc(c.ui.quote) + "</a></div></div>" +
        '<div class="hero-visual">' +
          '<div class="foam-stack" aria-hidden="true"><div class="slab"></div><div class="slab"></div><div class="slab"></div><div class="slab"></div><div class="slab"></div></div>' +
          '<figure class="hero-photo" data-zoom="' + esc(h.image) + '" data-cap="' + esc(h.imageCaption) + '"><img src="' + esc(h.image) + '" alt="' + esc(h.imageCaption) + '"><figcaption>' + esc(h.imageCaption) + "</figcaption></figure>" +
          '<div class="hero-chip"><b>' + esc(grades.value) + esc(grades.suffix) + "</b><span>" + esc(grades.label) + "</span></div>" +
        "</div>" +
      "</div>" +
      '<div class="stats"><div class="container stats-grid">' +
        list(c.stats, function (s) {
          return '<div class="stat"><b><em>' + esc(s.prefix || "") + '</em><span class="count" data-to="' + Number(s.value) + '">0</span><em>' + esc(s.suffix || "") + "</em></b><span>" + esc(s.label) + "</span></div>";
        }) +
      "</div></div></section>";
  }

  function buildAbout(c) {
    var a = c.about;
    return '<section class="section" id="about"><div class="container about-grid">' +
      '<div class="about-text">' + head(a) + '<div class="reveal">' + list(a.paragraphs, function (p) { return "<p>" + esc(p) + "</p>"; }) + "</div></div>" +
      '<div class="mosaic reveal">' + list(a.gallery, function (g) { return tile(g.image, g.caption); }) + "</div>" +
      "</div></section>";
  }

  function buildTech(c) {
    var t = c.technology;
    return '<section class="section alt" id="technology"><div class="container">' + head(t) +
      '<div class="systems">' + list(t.systems, function (s) {
        return '<article class="system reveal"><span class="tag">' + esc(s.tag) + "</span><h3><small>" + esc(s.tag) + "</small>" + esc(s.name) + "</h3><p>" + esc(s.text) + "</p></article>";
      }) + "</div>" +
      '<div class="tech-row"><div class="features">' + list(t.features, function (f) {
        return '<div class="feature reveal"><div class="ico">' + icon(f.icon) + "</div><div><h4>" + esc(f.title) + "</h4>" +
          (f.text ? "<p>" + esc(f.text) + "</p>" : "") + (f.list ? "<ul>" + list(f.list, function (li) { return "<li>" + esc(li) + "</li>"; }) + "</ul>" : "") + "</div></div>";
      }) + "</div>" +
      (t.image ? '<button type="button" class="tech-photo tile reveal" data-zoom="' + esc(t.image) + '" data-cap="' + esc(t.imageCaption) + '"><img src="' + esc(t.image) + '" alt="' + esc(t.imageCaption) + '" loading="lazy"><span class="cap">' + esc(t.imageCaption) + "</span></button>" : "") +
      "</div></div></section>";
  }

  function buildProducts(c) {
    var p = c.products;
    return '<section class="section" id="products"><div class="container">' + head(p) +
      '<div class="products reveal"><div class="p-tabs" role="tablist">' +
      list(p.items, function (it, i) {
        return '<button type="button" role="tab" class="p-tab" data-product="' + i + '" aria-selected="false"><img src="' + esc(it.image) + '" alt="" loading="lazy"><span><b>' + esc(it.name) + "</b><small>" + esc(it.tagline) + '</small></span><span class="num">0' + (i + 1) + "</span></button>";
      }) +
      '</div><div class="p-panel-wrap" id="productPanel"></div></div></div></section>';
  }

  function productPanel(c, i) {
    var p = c.products, it = p.items[i];
    if (!it) return "";
    var max = p.densityMax || 80, d = it.density;
    var density = d ? '<div class="density"><div class="density-top"><span>' + esc(c.ui.density) + "</span><em>" + d[0] + "–" + d[1] + ' kg/m³</em></div>' +
      '<div class="density-track"><div class="density-fill" style="left:' + (d[0] / max * 100) + "%;width:" + ((d[1] - d[0]) / max * 100) + '%"></div></div>' +
      '<div class="density-scale"><span>0</span><span>' + Math.round(max / 4) + "</span><span>" + Math.round(max / 2) + "</span><span>" + Math.round(max * 3 / 4) + "</span><span>" + max + "</span></div></div>" : "";
    return '<article class="p-panel" role="tabpanel">' +
      '<button type="button" class="p-media" data-zoom="' + esc(it.image) + '" data-cap="' + esc(it.caption) + '"><img src="' + esc(it.image) + '" alt="' + esc(it.name) + '"><span class="cap">' + esc(it.caption) + "</span></button>" +
      '<div class="p-body"><h3>' + esc(it.name) + '</h3><p class="tagline">' + esc(it.tagline) + "</p><p>" + esc(it.text) + "</p>" + density +
      "<h4>" + esc(c.ui.keyFeatures) + '</h4><ul class="checks">' + list(it.bullets, function (b) { return "<li>" + esc(b) + "</li>"; }) + "</ul></div></article>";
  }

  function buildCerts(c) {
    var s = c.certifications;
    return '<section class="section alt" id="certifications"><div class="container">' + head(s, true) +
      '<div class="certs">' + list(s.items, function (it) {
        return '<article class="cert reveal"><span class="badge">' + esc(it.badge) + "</span><h3>" + esc(it.title) + "</h3><ul>" + list(it.points, function (p) { return "<li>" + esc(p) + "</li>"; }) + "</ul></article>";
      }) + '</div><p class="note reveal">' + esc(s.note) + "</p></div></section>";
  }

  function buildServices(c) {
    var s = c.services;
    return '<section class="section" id="services"><div class="container">' + head(s) +
      '<div class="services">' + list(s.items, function (it) {
        return '<article class="service reveal"><button type="button" class="thumb" data-zoom="' + esc(it.image) + '" data-cap="' + esc(it.title) + '"><img src="' + esc(it.image) + '" alt="' + esc(it.title) + '" loading="lazy"></button><div class="s-body"><h3>' + esc(it.title) + "</h3><p>" + esc(it.text) + "</p></div></article>";
      }) + "</div></div></section>";
  }

  function buildMarkets(c) {
    var s = c.markets;
    return '<section class="section alt" id="markets"><div class="container">' + head(s, true) +
      '<div class="markets">' + list(s.items, function (it) {
        return '<article class="market reveal"><div class="ico">' + icon(it.icon) + "</div><h3>" + esc(it.title) + "</h3><ul>" + list(it.points, function (p) { return "<li>" + esc(p) + "</li>"; }) + "</ul></article>";
      }) + "</div></div></section>";
  }

  function buildWhy(c) {
    var s = c.why;
    return '<section class="section dark" id="why"><div class="container">' + head(s) +
      '<div class="why-grid">' + list(s.items, function (it, i) {
        return '<article class="why-card reveal"><span class="n">0' + (i + 1) + "</span><h3>" + esc(it.title) + "</h3><ul>" + list(it.points, function (p) { return "<li>" + esc(p) + "</li>"; }) + "</ul></article>";
      }) + '</div><div class="why-photos reveal">' + list(s.images, function (g) { return tile(g.image, g.caption); }) + "</div></div></section>";
  }

  function buildContact(c) {
    var s = c.contact, ui = c.ui, L = s.labels;
    var phones = list(s.phones, function (p) { return '<a href="tel:' + esc(p.split(/[–-]/)[0].replace(/[^\d+]/g, "")) + '">' + esc(p) + "</a>"; });
    var map = "https://www.google.com/maps/search/?api=1&query=" + encodeURIComponent(s.mapQuery || s.address);
    var site = s.website ? (/^https?:/.test(s.website) ? s.website : "https://" + s.website) : "";
    return '<section class="section" id="contact"><div class="container">' + head(s) +
      '<div class="contact-grid"><div class="contact-card reveal"><h3>' + esc(s.company) + '</h3><p class="entity">' + esc(s.entity) + "</p>" +
        '<div class="c-row"><div class="ico">' + icon("pin") + "</div><div><small>" + esc(L.address) + "</small><span>" + esc(s.address) + "</span></div></div>" +
        '<div class="c-row"><div class="ico">' + icon("phone") + "</div><div><small>" + esc(L.phone) + "</small>" + phones + "</div></div>" +
        '<div class="c-row"><div class="ico">' + icon("mail") + "</div><div><small>" + esc(L.email) + '</small><a href="mailto:' + esc(s.email) + '">' + esc(s.email) + "</a></div></div>" +
        (site ? '<div class="c-row"><div class="ico">' + icon("globe") + "</div><div><small>" + esc(L.web) + '</small><a href="' + esc(site) + '" target="_blank" rel="noopener">' + esc(s.website) + "</a></div></div>" : "") +
        '<a class="map-link" href="' + esc(map) + '" target="_blank" rel="noopener">' + esc(ui.openMap) + icon("external") + "</a></div>" +
      '<form class="form reveal" id="enquiry"><div class="row2"><label>' + esc(ui.formName) + '<input name="name" required autocomplete="name"></label><label>' + esc(ui.formCompany) + '<input name="company" autocomplete="organization"></label></div>' +
        "<label>" + esc(ui.formEmail) + '<input name="email" type="email" required autocomplete="email"></label>' +
        "<label>" + esc(ui.formMessage) + '<textarea name="message" required></textarea></label>' +
        '<button class="btn btn-primary" type="submit">' + esc(ui.send) + icon("arrow") + '</button><p class="hint">' + esc(ui.formNote) + "</p></form>" +
      "</div></div></section>";
  }

  function buildFooter(c) {
    var full = c.footer.tagline, m = full.match(/^(.+?[.。])\s*(.+)$/);
    var tag = m ? esc(m[1]) + " <em>" + esc(m[2]) + "</em>" : esc(full);
    return '<div class="container"><div class="footer-top"><a href="#hero" class="brand"><img src="assets/img/logo.png" alt="Wintec logo"><span class="brand-text"><strong>WINTEC</strong><small>FOAM ENTERPRISE</small></span></a>' +
      '<p class="footer-tag">' + tag + "</p></div>" +
      '<nav class="footer-nav">' + navLinks(c) + "</nav>" +
      '<div class="footer-bottom"><span>© ' + new Date().getFullYear() + " " + esc(c.contact.company) + " · " + esc(c.contact.entity) + ". " + esc(c.ui.rights) + '</span><a href="#hero">' + esc(c.ui.backToTop) + " ↑</a></div></div>";
  }

  function navLinks(c) {
    return list(SECTIONS, function (id) { return c.ui.nav[id] ? '<a href="#' + id + '" data-nav="' + id + '">' + esc(c.ui.nav[id]) + "</a>" : ""; });
  }

  /* ---------- render ---------- */
  function render() {
    var c = CONTENT[state.lang];
    document.documentElement.lang = c.htmlLang || state.lang;
    document.title = c.pageTitle;
    var md = $('meta[name="description"]'); if (md) md.setAttribute("content", c.metaDescription);

    $("#mainNav").innerHTML = navLinks(c);
    $("#app").innerHTML = buildHero(c) + buildAbout(c) + buildTech(c) + buildProducts(c) + buildCerts(c) + buildServices(c) + buildMarkets(c) + buildWhy(c) + buildContact(c);
    $("#footer").innerHTML = buildFooter(c);
    $(".lightbox-close").setAttribute("aria-label", c.ui.close);
    $("#menuToggle").setAttribute("aria-label", c.ui.menu);
    $$("#langSwitch button").forEach(function (b) { var on = b.dataset.lang === state.lang; b.classList.toggle("active", on); b.setAttribute("aria-pressed", on); });

    selectProduct(Math.min(state.product, c.products.items.length - 1), false);
    observe();
  }

  function selectProduct(i, scroll) {
    var c = CONTENT[state.lang];
    state.product = i;
    $("#productPanel").innerHTML = productPanel(c, i);
    $$(".p-tab").forEach(function (t) { var on = +t.dataset.product === i; t.classList.toggle("active", on); t.setAttribute("aria-selected", on); });
    if (scroll && window.innerWidth <= 1040) {
      var tab = $('.p-tab[data-product="' + i + '"]');
      if (tab) tab.scrollIntoView({ behavior: "smooth", inline: "center", block: "nearest" });
    }
  }

  /* ---------- scroll effects ---------- */
  var revealObs, navObs;
  function observe() {
    if (revealObs) revealObs.disconnect();
    if (navObs) navObs.disconnect();
    if (!("IntersectionObserver" in window)) { $$(".reveal").forEach(function (el) { el.classList.add("in"); }); return; }

    revealObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { e.target.classList.add("in"); revealObs.unobserve(e.target); } });
    }, { threshold: .12, rootMargin: "0px 0px -40px 0px" });
    $$(".reveal").forEach(function (el) { revealObs.observe(el); });

    navObs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) {
        if (e.isIntersecting) $$("[data-nav]").forEach(function (a) { a.classList.toggle("active", a.dataset.nav === e.target.id); });
      });
    }, { rootMargin: "-45% 0px -50% 0px" });
    SECTIONS.forEach(function (id) { var s = document.getElementById(id); if (s) navObs.observe(s); });
    var hero = $("#hero"); if (hero) navObs.observe(hero);

    countUp();
  }

  function countUp() {
    var nf = new Intl.NumberFormat(state.lang === "vi" ? "vi-VN" : "en-US");
    $$(".count").forEach(function (el) {
      var to = +el.dataset.to, start = null, dur = 1600;
      if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) { el.textContent = nf.format(to); return; }
      function step(ts) {
        if (!start) start = ts;
        var p = Math.min(1, (ts - start) / dur), v = Math.round(to * (1 - Math.pow(1 - p, 3)));
        el.textContent = nf.format(v);
        if (p < 1) requestAnimationFrame(step);
      }
      requestAnimationFrame(step);
    });
  }

  /* ---------- lightbox ---------- */
  var lb = $("#lightbox");
  function openLightbox(src, cap) {
    $("img", lb).src = src; $("img", lb).alt = cap || ""; $("figcaption", lb).textContent = cap || "";
    lb.hidden = false; document.body.style.overflow = "hidden"; $(".lightbox-close").focus();
  }
  function closeLightbox() { lb.hidden = true; document.body.style.overflow = ""; }

  /* ---------- events (delegated, so they survive re-render) ---------- */
  document.addEventListener("click", function (e) {
    var langBtn = e.target.closest("[data-lang]");
    if (langBtn) {
      state.lang = langBtn.dataset.lang; store("wintec-lang", state.lang);
      var url = new URL(location.href); url.searchParams.set("lang", state.lang); history.replaceState(null, "", url);
      var y = window.scrollY; render(); window.scrollTo(0, y);
      $$(".reveal").forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var tab = e.target.closest("[data-product]");
    if (tab) { selectProduct(+tab.dataset.product, true); return; }
    var z = e.target.closest("[data-zoom]");
    if (z) { e.preventDefault(); openLightbox(z.dataset.zoom, z.dataset.cap); return; }
    if (e.target === lb || e.target.closest(".lightbox-close")) { closeLightbox(); return; }
    if (e.target.closest(".main-nav a")) document.body.classList.remove("menu-open");
  });

  $("#menuToggle").addEventListener("click", function () {
    var open = document.body.classList.toggle("menu-open");
    this.setAttribute("aria-expanded", open);
  });

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") { closeLightbox(); document.body.classList.remove("menu-open"); }
    var t = e.target.closest && e.target.closest(".p-tab");
    if (t && (e.key === "ArrowDown" || e.key === "ArrowRight" || e.key === "ArrowUp" || e.key === "ArrowLeft")) {
      e.preventDefault();
      var n = CONTENT[state.lang].products.items.length, dir = (e.key === "ArrowDown" || e.key === "ArrowRight") ? 1 : -1;
      var next = (state.product + dir + n) % n; selectProduct(next, true); $('.p-tab[data-product="' + next + '"]').focus();
    }
  });

  document.addEventListener("submit", function (e) {
    if (e.target.id !== "enquiry") return;
    e.preventDefault();
    var f = e.target, c = CONTENT[state.lang];
    var subject = "Enquiry — " + f.name.value + (f.company.value ? " (" + f.company.value + ")" : "");
    var body = f.message.value + "\n\n— " + f.name.value + (f.company.value ? ", " + f.company.value : "") + "\n" + f.email.value;
    location.href = "mailto:" + c.contact.email + "?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
  });

  // header style + back-to-top button
  var toTop = document.createElement("button");
  toTop.className = "to-top"; toTop.type = "button"; toTop.innerHTML = icon("up");
  toTop.addEventListener("click", function () { window.scrollTo({ top: 0, behavior: "smooth" }); });
  document.body.appendChild(toTop);
  function onScroll() {
    var y = window.scrollY;
    $(".site-header").classList.toggle("scrolled", y > 40);
    toTop.classList.toggle("show", y > 800);
    toTop.setAttribute("aria-label", CONTENT[state.lang].ui.backToTop);
  }
  window.addEventListener("scroll", onScroll, { passive: true });

  render();
  onScroll();
})();
