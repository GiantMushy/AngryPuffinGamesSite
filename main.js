// Angry Puffin Games — signup form
// Three states: idle -> submitting -> success (or error).
//
// GitHub Pages is static and can't send email on its own, so signups go
// through Formspree, which forwards each submission to a real inbox.
//
// >>> ACTIVATION (one step, no code): <<<
//   1. Create a free form at https://formspree.io and set its recipient to
//      Bjarki@angrypuffingames.com (or a dedicated list inbox).
//   2. Paste the form's endpoint URL below (looks like
//      "https://formspree.io/f/xxxxxxx").
// Until an endpoint is set, the form runs in demo mode: it shows the success
// state but does NOT collect the address anywhere.
const SIGNUP_ENDPOINT = "https://formspree.io/f/mdenlqqb";

(function () {
  const form = document.getElementById("signup-form");
  const emailInput = document.getElementById("signup-email");
  const submitBtn = document.getElementById("signup-submit");
  const errorBox = document.getElementById("signup-error");
  const successBox = document.getElementById("signup-success");

  if (!form) return;

  form.addEventListener("submit", async function (e) {
    e.preventDefault();
    errorBox.classList.add("hidden");

    const email = emailInput.value.trim();
    if (!email) return;

    submitBtn.disabled = true;
    submitBtn.textContent = "Sending…";

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
        // during development so the flow can be reviewed before a
        // backend is wired up.
        await new Promise((resolve) => setTimeout(resolve, 500));
      }

      form.classList.add("hidden");
      successBox.classList.remove("hidden");
    } catch (err) {
      errorBox.classList.remove("hidden");
      submitBtn.disabled = false;
      submitBtn.textContent = "Sign me up";
    }
  });
})();
