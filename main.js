// MarketSTEP - Main application logic

function createAppCard(app) {
    const card = document.createElement("div");
    card.className = "app-card";
    card.dataset.category = app.category;

    card.innerHTML = `
        <div class="app-card-header">
            <img class="app-icon" src="${app.icon}" alt="${app.name} icon">
            <div>
                <h3>${app.name}</h3>
                <span class="app-version">v${app.version}</span>
            </div>
        </div>
        <p class="app-description">${app.description}</p>
        <div class="app-meta">
            <span class="app-category">${app.category}</span>
        </div>
    `;

    return card;
}

function renderApps() {
    const grid = document.getElementById("app-grid");
    const noResults = document.getElementById("no-results");
    const resultCount = document.getElementById("result-count");
    const searchTerm = document.getElementById("search-box").value.toLowerCase().trim();
    const activeCategory = document.querySelector(".category-btn.active").dataset.category;

    const filtered = APPS.filter(app => {
        if (activeCategory !== "all" && app.category !== activeCategory) return false;

        if (searchTerm) {
            const haystack = (app.name + " " + app.description + " " + app.category).toLowerCase();
            return haystack.includes(searchTerm);
        }

        return true;
    });

    grid.innerHTML = "";
    filtered.forEach(app => grid.appendChild(createAppCard(app)));

    resultCount.textContent = `${filtered.length} application${filtered.length !== 1 ? "s" : ""}`;
    noResults.style.display = filtered.length === 0 ? "block" : "none";
}

document.getElementById("search-box").addEventListener("input", renderApps);

document.getElementById("category-nav").addEventListener("click", function (e) {
    if (e.target.classList.contains("category-btn")) {
        document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
        renderApps();
    }
});

renderApps();
