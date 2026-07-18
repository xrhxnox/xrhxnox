const grid = document.getElementById("grid");
const emptyState = document.getElementById("emptyState");
const filterButtons = document.querySelectorAll(".filter-btn");
const yearSelect = document.getElementById("year");
const searchInput = document.getElementById("searchInput");
const pagination = document.getElementById("pagination");

const PAGE_SIZE = 9;

let activeFilter = "todos";
let activeYear = "todos";
let activeSearch = "";
let currentPage = 1;

function metaTagsMarkup(entry) {
  if (entry.categoria === "videojuego" && entry.plataformas && entry.plataformas.length) {
    const tags = entry.plataformas.map(key => {
      const label = PLATFORM_LABELS[key] || key;
      const color = PLATFORM_COLORS[key] || "#9aa1ac";
      const text = PLATFORM_TEXT_COLORS[key] || "#ffffff";
      return `<span class="platform-tag" style="--platform-color:${color};--platform-text:${text}">${label}</span>`;
    }).join("");
    return `<div class="platform-tags">${tags}</div>`;
  }
  if ((entry.generos && entry.generos.length) || entry.tipo) {
    const color = `var(--cat-${entry.categoria})`;
    const tipoTag = entry.tipo
      ? `<span class="platform-tag" style="--platform-color:${color};--platform-text:#1f1f1e">${MUSIC_TYPE_LABELS[entry.tipo] || entry.tipo}</span>`
      : "";
    const genreTags = (entry.generos || []).map(g =>
      `<span class="platform-tag" style="--platform-color:${color};--platform-text:#1f1f1e">${g}</span>`
    ).join("");
    return `<div class="platform-tags">${tipoTag}${genreTags}</div>`;
  }
  return "";
}

function cardMarkup(entry) {
  const year = entry.fecha ? entry.fecha.slice(0, 4) : "";
  const fechaLegible = entry.fecha
    ? new Date(entry.fecha + "T00:00:00").toLocaleDateString("es-MX", { day: "numeric", month: "short", year: "numeric" })
    : "";

  return `
    <article class="card" data-categoria="${entry.categoria}" data-year="${year}" tabindex="0">
      <span class="badge ${entry.categoria}"><i class="${CATEGORY_ICONS[entry.categoria] || 'fa-solid fa-tag'}"></i> ${CATEGORY_LABELS[entry.categoria] || entry.categoria}</span>
      <img src="${entry.imagen}" alt="${entry.titulo}" loading="lazy">
      ${metaTagsMarkup(entry)}
      <div class="title-bar">${entry.titulo}</div>
      <div class="overlay">
        <div class="overlay-title">${entry.titulo}</div>
        <div class="stars" aria-label="Puntuación ${entry.puntuacion} de 5">${starsMarkup(entry.puntuacion)}</div>
        ${entry.resena ? `<div class="resena">${entry.resena}</div>` : ""}
        ${fechaLegible ? `<div class="fecha">${DATE_LABEL_BY_CATEGORY[entry.categoria] || "Publicado el"} ${fechaLegible}</div>` : ""}
      </div>
    </article>
  `;
}

function populateYears() {
  const years = [...new Set(entries.map(e => e.fecha ? e.fecha.slice(0, 4) : null).filter(Boolean))].sort((a, b) => b - a);
  yearSelect.innerHTML = `<option value="todos">Todos</option>` + years.map(y => `<option value="${y}">${y}</option>`).join("");
}

function renderPagination(totalPages) {
  if (totalPages <= 1) {
    pagination.innerHTML = "";
    return;
  }
  pagination.innerHTML = `
    <button type="button" id="prevPageBtn" ${currentPage === 1 ? "disabled" : ""} aria-label="Página anterior"><i class="fa-solid fa-chevron-left"></i></button>
    <span class="page-label">Página ${currentPage} de ${totalPages}</span>
    <button type="button" id="nextPageBtn" ${currentPage === totalPages ? "disabled" : ""} aria-label="Página siguiente"><i class="fa-solid fa-chevron-right"></i></button>
  `;
  document.getElementById("prevPageBtn").addEventListener("click", () => {
    currentPage -= 1;
    render();
  });
  document.getElementById("nextPageBtn").addEventListener("click", () => {
    currentPage += 1;
    render();
  });
}

function render() {
  const filtered = entries.filter(e => {
    const matchCat = activeFilter === "todos" || e.categoria === activeFilter;
    const matchYear = activeYear === "todos" || (e.fecha && e.fecha.slice(0, 4) === activeYear);
    const matchSearch = !activeSearch || foldAccents(e.titulo.toLowerCase()).includes(activeSearch);
    return matchCat && matchYear && matchSearch;
  });

  filtered.sort((a, b) => (b.fecha || "").localeCompare(a.fecha || ""));

  const totalPages = Math.max(1, Math.ceil(filtered.length / PAGE_SIZE));
  currentPage = Math.min(currentPage, totalPages);
  const pageItems = filtered.slice((currentPage - 1) * PAGE_SIZE, currentPage * PAGE_SIZE);

  grid.innerHTML = pageItems.map(cardMarkup).join("");
  emptyState.hidden = filtered.length !== 0;
  renderPagination(totalPages);
}

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    activeFilter = btn.dataset.filter;
    currentPage = 1;
    render();
  });
});

yearSelect.addEventListener("change", () => {
  activeYear = yearSelect.value;
  currentPage = 1;
  render();
});

searchInput.addEventListener("input", () => {
  activeSearch = foldAccents(searchInput.value.trim().toLowerCase());
  currentPage = 1;
  render();
});

populateYears();
render();

document.getElementById("copyrightYear").textContent = new Date().getFullYear();

function renderProfileStats() {
  const statsEl = document.getElementById("profileStats");
  if (!statsEl || !entries.length) return;

  const count = entries.length;
  const avg = entries.reduce((sum, e) => sum + e.puntuacion, 0) / count;
  const years = entries.map(e => e.fecha ? Number(e.fecha.slice(0, 4)) : null).filter(Boolean);

  const parts = [`${count} ${count === 1 ? "reseña" : "reseñas"}`, `${avg.toFixed(1)}★ promedio`];
  if (years.length) parts.push(`desde ${Math.min(...years)}`);

  statsEl.textContent = parts.join(" · ");
  statsEl.hidden = false;
}
renderProfileStats();

const themeToggle = document.getElementById("themeToggle");
const THEME_KEY = "ricstars_theme";

function updateThemeIcon() {
  const theme = document.documentElement.getAttribute("data-theme");
  themeToggle.innerHTML = theme === "light" ? '<i class="fa-solid fa-bolt"></i>' : '<i class="fa-solid fa-moon"></i>';
}
updateThemeIcon();

themeToggle.addEventListener("click", () => {
  const next = document.documentElement.getAttribute("data-theme") === "light" ? "dark" : "light";
  document.documentElement.setAttribute("data-theme", next);
  localStorage.setItem(THEME_KEY, next);
  updateThemeIcon();
});
