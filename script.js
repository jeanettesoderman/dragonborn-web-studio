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
          <a class="demo-link" href="${model.url}" target="_blank" rel="noopener">Öppna live-demo</a>
          <a class="btn btn-small" href="#kontakt">Välj modellen</a>
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

function handleDemoForm(event) {
  event.preventDefault();
  document.getElementById("form-status").textContent =
    "Demoformulär. Här kopplar vi in Formspree, Netlify Forms eller annan mottagning innan sidan lanseras.";
  event.target.reset();
  return false;
}

applyConfig();
