// MarketSTEP - Main application logic

const ICON_COLORS = {
    development: "#2d8a5e",
    graphics: "#8a2d7a",
    internet: "#2d6e8a",
    multimedia: "#8a5a2d",
    office: "#3d5a8e",
    system: "#5a5a5a",
    utilities: "#6e8a2d"
};

function createAppCard(app) {
    const card = document.createElement("div");
    card.className = "app-card";
    card.dataset.category = app.category;
    card.dataset.platforms = app.platforms.join(",");

    const bgColor = ICON_COLORS[app.category] || "#666";

    const platformTags = app.platforms
        .sort((a, b) => a === "devuan" ? -1 : 1)
        .map(p => `<span class="platform-tag ${p}">${p === "freebsd" ? "FreeBSD" : "Devuan"}</span>`)
        .join("");

    const runtimeTag = app.runtime === "native"
        ? '<span class="runtime-tag native">Native</span>'
        : '<span class="runtime-tag x11">X11</span>';

    card.innerHTML = `
        <div class="app-card-header">
            <img class="app-icon" src="${app.icon}" alt="${app.name} icon">
            <div>
                <h3>${app.name}</h3>
                <span class="app-version">v${app.version}</span>
            </div>
            ${runtimeTag}
        </div>
        <p class="app-description">${app.description}</p>
        <div class="app-meta">
            <span class="app-category">${app.category}</span>
            <div class="app-platforms">${platformTags}</div>
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
    const showFreeBSD = document.getElementById("filter-freebsd").checked;
    const showDevuan = document.getElementById("filter-devuan").checked;

    const filtered = APPS.filter(app => {
        // Category filter
        if (activeCategory !== "all" && app.category !== activeCategory) return false;

        // Platform filter
        const hasFreeBSD = app.platforms.includes("freebsd");
        const hasDevuan = app.platforms.includes("devuan");
        if (!showFreeBSD && hasFreeBSD && !hasDevuan) return false;
        if (!showDevuan && hasDevuan && !hasFreeBSD) return false;
        if (!showFreeBSD && !showDevuan) return false;
        if (!showFreeBSD && hasFreeBSD && hasDevuan) {
            // Show only if devuan is checked
        }
        if (!showDevuan && hasDevuan && hasFreeBSD) {
            // Show only if freebsd is checked
        }

        // Search filter
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

// Event listeners
document.getElementById("search-box").addEventListener("input", renderApps);
document.getElementById("filter-freebsd").addEventListener("change", renderApps);
document.getElementById("filter-devuan").addEventListener("change", renderApps);

document.getElementById("category-nav").addEventListener("click", function (e) {
    if (e.target.classList.contains("category-btn")) {
        document.querySelectorAll(".category-btn").forEach(btn => btn.classList.remove("active"));
        e.target.classList.add("active");
        renderApps();
    }
});

// Initial render
renderApps();
