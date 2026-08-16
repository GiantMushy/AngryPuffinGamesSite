// Angry Puffin Games — signup form, language switcher, screens carousel.
//
// Signups: GitHub Pages is static and can't send email, so submissions go
// through Formspree, which forwards each one to a real inbox.
//
// >>> ACTIVATION (one step, no code): <<<
//   1. Create a free form at https://formspree.io and set its recipient to
//      Bjarki@angrypuffingames.com (or a dedicated list inbox).
//   2. Paste the form's endpoint URL below (looks like
//      "https://formspree.io/f/xxxxxxx").
// Until an endpoint is set, the form runs in demo mode: it shows the success
// state but does NOT collect the address anywhere.
const SIGNUP_ENDPOINT = "https://formspree.io/f/mdenlqqb";

/* ------------------------------------------------------------------ *
 * Language switcher / i18n                                            *
 * Translations + flag art live in i18n.js (window.APG_STRINGS etc).  *
 * ------------------------------------------------------------------ */
(function () {
  const STRINGS = window.APG_STRINGS || {};
  const LANGS = window.APG_LANGS || [];
  const flagSVG = window.APG_FLAG || function () { return ""; };
  const STORE_KEY = "apg-lang";
  const DEFAULT = "en";
  let current = DEFAULT;

  // Translate a key for the active language, falling back to English.
  function t(key) {
    const table = STRINGS[current] || {};
    if (key in table) return table[key];
    return (STRINGS.en && STRINGS.en[key]) || "";
  }
  window.APG_t = t;

  function apply(lang) {
    if (!STRINGS[lang]) lang = DEFAULT;
    current = lang;
    document.documentElement.lang = lang;

    document.querySelectorAll("[data-i18n]").forEach(function (el) {
      const v = t(el.getAttribute("data-i18n"));
      if (v) el.textContent = v;
    });
    document.querySelectorAll("[data-i18n-html]").forEach(function (el) {
      const v = t(el.getAttribute("data-i18n-html"));
      if (v) el.innerHTML = v;
    });
    document.querySelectorAll("[data-i18n-placeholder]").forEach(function (el) {
      const v = t(el.getAttribute("data-i18n-placeholder"));
      if (v) el.setAttribute("placeholder", v);
    });

    // Update the toggle (flag + code) and menu selection state.
    const meta = LANGS.filter(function (l) { return l.code === lang; })[0] || LANGS[0];
    const codeEl = document.getElementById("lang-code");
    const flagEl = document.getElementById("lang-flag");
    if (codeEl) codeEl.textContent = lang.toUpperCase();
    if (flagEl && meta) flagEl.innerHTML = flagSVG(meta.flag, "cur");
    document.querySelectorAll(".lang-option").forEach(function (btn) {
      btn.setAttribute("aria-selected", btn.getAttribute("data-lang") === lang ? "true" : "false");
    });

    // Reset the signup button label unless a request is in flight.
    const submitBtn = document.getElementById("signup-submit");
    if (submitBtn && !submitBtn.disabled) submitBtn.textContent = t("signup-submit");
  }
  window.APG_applyLang = apply;

  function init() {
    const wrap = document.getElementById("lang-switch");
    const toggle = document.getElementById("lang-toggle");
    const menu = document.getElementById("lang-menu");

    function open() { if (wrap) { wrap.classList.add("open"); toggle.setAttribute("aria-expanded", "true"); } }
    function close() { if (wrap) { wrap.classList.remove("open"); toggle.setAttribute("aria-expanded", "false"); } }

    // Build the menu rows (flag + language name).
    if (menu) {
      menu.innerHTML = "";
      LANGS.forEach(function (l) {
        const li = document.createElement("li");
        li.setAttribute("role", "presentation");
        const btn = document.createElement("button");
        btn.type = "button";
        btn.className = "lang-option";
        btn.setAttribute("data-lang", l.code);
        btn.setAttribute("role", "option");
        btn.setAttribute("aria-selected", "false");

        const fl = document.createElement("span");
        fl.className = "lang-flag";
        fl.innerHTML = flagSVG(l.flag, "m-" + l.code);

        const text = document.createElement("span");
        text.className = "lang-text";
        const name = document.createElement("span");
        name.className = "lang-name";
        name.textContent = l.label;
        text.appendChild(name);
        if (l.note) {
          const note = document.createElement("span");
          note.className = "lang-note";
          note.textContent = l.note;
          text.appendChild(note);
        }

        btn.appendChild(fl);
        btn.appendChild(text);
        btn.addEventListener("click", function () {
          apply(l.code);
          try { localStorage.setItem(STORE_KEY, l.code); } catch (e) {}
          close();
        });
        li.appendChild(btn);
        menu.appendChild(li);
      });
    }

    if (toggle && wrap) {
      toggle.addEventListener("click", function (e) {
        e.stopPropagation();
        if (wrap.classList.contains("open")) close(); else open();
      });
      document.addEventListener("click", function (e) {
        if (!wrap.contains(e.target)) close();
      });
      document.addEventListener("keydown", function (e) {
        if (e.key === "Escape") close();
      });
    }

    // Restore a previously chosen language; default English otherwise.
    let lang = DEFAULT;
    try {
      const saved = localStorage.getItem(STORE_KEY);
      if (saved && STRINGS[saved]) lang = saved;
    } catch (e) {}
    apply(lang);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();

/* ------------------------------------------------------------------ *
 * Signup form                                                        *
 * ------------------------------------------------------------------ */
(function () {
  const form = document.getElementById("signup-form");
  const emailInput = document.getElementById("signup-email");
  const submitBtn = document.getElementById("signup-submit");
  const errorBox = document.getElementById("signup-error");
  const successBox = document.getElementById("signup-success");

  if (!form) return;

  const tr = function (key, fallback) {
    return (window.APG_t && window.APG_t(key)) || fallback;
  };

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    errorBox.classList.add("hidden");

    const email = emailInput.value.trim();
    if (!email) return;

    submitBtn.disabled = true;
    submitBtn.textContent = tr("signup-sending", "Sending…");

    try {
      if (SIGNUP_ENDPOINT) {
        const res = await fetch(SIGNUP_ENDPOINT, {
          method: "POST",
          headers: { "Content-Type": "application/json", Accept: "application/json" },
          body: JSON.stringify({ email: email }),
        });
        if (!res.ok) throw new Error("Signup request failed");
      } else {
        // No endpoint configured yet — keep the UI working end-to-end
        // so the flow can be reviewed before a backend is wired up.
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      form.classList.add("hidden");
      successBox.classList.remove("hidden");
    } catch (err) {
      errorBox.classList.remove("hidden");
      submitBtn.disabled = false;
      submitBtn.textContent = tr("signup-submit", "Sign me up");
    }
  });
})();

/* ------------------------------------------------------------------ *
 * Screens carousel                                                   *
 * Drag- and scroll-friendly, with a gentle auto-scroll that runs     *
 * only while idle. The frames are cloned once so scrollLeft can wrap  *
 * by exactly one set width for a seamless loop in either direction.   *
 * ------------------------------------------------------------------ */
(function () {
  const rail = document.querySelector(".rail");
  const track = document.querySelector(".rail-track");
  if (!rail || !track) return;

  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  // Clone the original frames once (marked aria-hidden so screen readers
  // don't announce the screenshots twice).
  const originals = Array.prototype.slice.call(track.children);
  const count = originals.length;
  originals.forEach(function (frame) {
    const clone = frame.cloneNode(true);
    clone.setAttribute("aria-hidden", "true");
    clone.querySelectorAll("img").forEach(function (img) { img.setAttribute("alt", ""); });
    track.appendChild(clone);
  });

  // Width of one original set = distance from the first original frame to
  // the first clone. Measured from layout (frame widths are fixed in CSS),
  // and re-measured on resize.
  let setWidth = 0;
  function measure() {
    const first = track.children[0];
    const firstClone = track.children[count];
    setWidth = firstClone ? firstClone.offsetLeft - first.offsetLeft : 0;
  }
  measure();
  window.addEventListener("resize", measure);

  // Keep scrollLeft within [0, setWidth); jumping by a whole set is invisible
  // because the second copy is identical to the first.
  function wrap() {
    if (setWidth <= 0) return;
    if (rail.scrollLeft >= setWidth) rail.scrollLeft -= setWidth;
    else if (rail.scrollLeft < 0) rail.scrollLeft += setWidth;
  }

  const SPEED = 0.6;        // auto-scroll px per frame (~36px/s at 60fps)
  const IDLE_MS = 1400;     // resume auto-scroll this long after interaction
  const FRICTION = 0.955;   // momentum decay per frame after a flick
  const MAX_FLING = 90;     // cap flick velocity (px/frame) so it stays sane
  let idleUntil = 0;
  let pointerOver = false;
  let dragging = false;
  let velocity = 0;         // active momentum (px/frame)

  function nudgeIdle() { idleUntil = performance.now() + IDLE_MS; }

  rail.addEventListener("pointerenter", function () { pointerOver = true; });
  rail.addEventListener("pointerleave", function () { pointerOver = false; });
  rail.addEventListener("wheel", function () { velocity = 0; nudgeIdle(); }, { passive: true });
  rail.addEventListener("scroll", wrap, { passive: true });
  // Touch uses the browser's own momentum scrolling — just pause the auto-scroll.
  rail.addEventListener("touchstart", function () { nudgeIdle(); }, { passive: true });
  rail.addEventListener("touchmove", function () { nudgeIdle(); }, { passive: true });

  // Mouse/pen drag-to-scroll with flick momentum. (Touch is left to native
  // scrolling, which already has inertia.)
  let startX = 0;
  let startScroll = 0;
  let lastX = 0;
  let lastT = 0;
  let sampledV = 0;         // px per ms, from the most recent move
  rail.addEventListener("pointerdown", function (e) {
    if (e.pointerType === "touch") return;      // let native touch momentum handle it
    if (e.pointerType === "mouse" && e.button !== 0) return;
    dragging = true;
    velocity = 0;
    sampledV = 0;
    startX = e.clientX;
    startScroll = rail.scrollLeft;
    lastX = e.clientX;
    lastT = performance.now();
    rail.classList.add("dragging");
    try { rail.setPointerCapture(e.pointerId); } catch (err) {}
  });
  rail.addEventListener("pointermove", function (e) {
    if (!dragging) return;
    rail.scrollLeft = startScroll - (e.clientX - startX);
    const now = performance.now();
    const dt = now - lastT;
    // Scroll moves opposite the pointer, hence (lastX - clientX).
    if (dt > 0) sampledV = (lastX - e.clientX) / dt;
    lastX = e.clientX;
    lastT = now;
  });
  function endDrag(e) {
    if (!dragging) return;
    dragging = false;
    rail.classList.remove("dragging");
    // Only fling if the pointer was still moving at release (not a rest).
    if (performance.now() - lastT < 60) {
      velocity = Math.max(-MAX_FLING, Math.min(MAX_FLING, sampledV * 16.7));
    }
    nudgeIdle();
    try { rail.releasePointerCapture(e.pointerId); } catch (err) {}
  }
  rail.addEventListener("pointerup", endDrag);
  rail.addEventListener("pointercancel", endDrag);

  function frame(now) {
    if (dragging) {
      // Drag updates scrollLeft directly; nothing to animate here.
    } else if (Math.abs(velocity) > 0.15) {
      // Coast: apply momentum with friction, keep auto-scroll suppressed.
      rail.scrollLeft += velocity;
      wrap();
      velocity *= FRICTION;
      idleUntil = now + IDLE_MS;
    } else {
      velocity = 0;
      if (!reduce && !pointerOver && now > idleUntil && setWidth > 0) {
        rail.scrollLeft += SPEED;
        wrap();
      }
    }
    requestAnimationFrame(frame);
  }
  requestAnimationFrame(frame);
})();
