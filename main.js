// Angry Puffin Games — signup form
// Three states: idle -> submitting -> success (or error).
//
// TODO before real launch: set SIGNUP_ENDPOINT to a real list provider
// (Buttondown, Mailchimp, Formspree, or a Cloudflare Worker in front of one).
// GitHub Pages is static, so this form can't send email on its own —
// it needs a working endpoint here to actually collect addresses.
const SIGNUP_ENDPOINT = ""; // e.g. "https://formspree.io/f/xxxxxxx"

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
