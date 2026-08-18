const c = window.SALES_CONFIG;

function renderModels() {
  const grid = document.getElementById("models-grid");
  grid.innerHTML = c.models.map(model => `
    <article class="model-card">
      <div class="model-preview">
        <img src="${model.image}" alt="${model.name}">
        <span class="model-category">${model.category}</span>
      </div>
      <div class="model-body">
        <h3>${model.name}</h3>
        <p>${model.description}</p>
        <div class="model-actions">
          <a class="demo-link" href="${model.url}${window.DRAGONBORN_LANG === "en" ? "?lang=en" : ""}" target="_blank" rel="noopener">${window.DRAGONBORN_LANG === "en" ? "Open live demo" : "Öppna live-demo"}</a>
          <a class="btn btn-small" href="#kontakt">${window.DRAGONBORN_LANG === "en" ? "Choose this design" : "Välj modellen"}</a>
        </div>
      </div>
    </article>
  `).join("");
}

function applyConfig() {
  document.querySelectorAll("[data-brand]").forEach(el => el.textContent = c.brand);
  document.querySelector("[data-site-price]").textContent = c.sitePrice;
  document.querySelector("[data-hosting-price]").textContent = c.hostingPrice;
  document.querySelector("[data-copyright]").textContent = `© ${new Date().getFullYear()} ${c.brand}`;
  renderModels();
}

const toggle = document.querySelector(".menu-toggle");
const nav = document.querySelector(".main-nav");
toggle.addEventListener("click", () => {
  const open = nav.classList.toggle("open");
  toggle.setAttribute("aria-expanded", String(open));
});
nav.querySelectorAll("a").forEach(a => a.addEventListener("click", () => nav.classList.remove("open")));

const contactForm = document.getElementById("contact-form");
const formStatus = document.getElementById("form-status");

contactForm.addEventListener("submit", async (event) => {
  event.preventDefault();
  formStatus.textContent = window.DRAGONBORN_LANG === "en" ? "Sending..." : "Skickar...";

  try {
    const response = await fetch(contactForm.action, {
      method: "POST",
      body: new FormData(contactForm),
      headers: { "Accept": "application/json" }
    });

    if (response.ok) {
      formStatus.textContent = window.DRAGONBORN_LANG === "en" ? "Thank you! Your inquiry has been sent." : "Tack! Din förfrågan har skickats.";
      contactForm.reset();
    } else {
      formStatus.textContent = window.DRAGONBORN_LANG === "en" ? "The message could not be sent. Please try again." : "Meddelandet kunde inte skickas. Försök igen.";
    }
  } catch (error) {
    formStatus.textContent = window.DRAGONBORN_LANG === "en" ? "The message could not be sent. Please try again." : "Meddelandet kunde inte skickas. Försök igen.";
  }
});

applyConfig();
