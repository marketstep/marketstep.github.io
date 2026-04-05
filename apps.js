// Application catalog for MarketSTEP
// Add new applications to this array

const APPS = [
    {
        name: "Cyberduck",
        version: "9.1.0",
        description: "File transfer client supporting FTP, SFTP, WebDAV, Amazon S3, and cloud storage services.",
        category: "internet",
        platforms: ["devuan", "freebsd"],
        runtime: "native",
        icon: "icons/cyberduck.png"
    },
    {
        name: "Inkscape",
        version: "1.4.0",
        description: "Professional vector graphics editor for illustrations, diagrams, icons, and complex drawings.",
        category: "graphics",
        platforms: ["devuan", "freebsd"],
        runtime: "native",
        icon: "icons/inkscape.svg"
    },
    {
        name: "GIMP",
        version: "2.10.38",
        description: "Full-featured raster image editor with advanced photo retouching, composition, and painting tools.",
        category: "graphics",
        platforms: ["devuan", "freebsd"],
        runtime: "native",
        icon: "icons/gimp.svg"
    },
    {
        name: "Chromium",
        version: "124.0",
        description: "Open-source web browser providing a fast, secure, and stable browsing experience.",
        category: "internet",
        platforms: ["devuan", "freebsd"],
        runtime: "x11",
        icon: "icons/chromium.svg"
    },
    {
        name: "Quassel",
        version: "0.14.0",
        description: "Distributed IRC client with a central core component and detachable client interface.",
        category: "internet",
        platforms: ["devuan", "freebsd"],
        runtime: "x11",
        icon: "icons/quassel.svg"
    },
    {
        name: "Visual Studio Code",
        version: "1.96.0",
        description: "Source code editor with debugging, syntax highlighting, Git integration, and extensions.",
        category: "development",
        platforms: ["devuan", "freebsd"],
        runtime: "x11",
        icon: "icons/vscode.png"
    },
    {
        name: "Steam",
        version: "1.0",
        description: "Digital distribution platform for purchasing, downloading, and playing PC games.",
        category: "wine",
        platforms: ["devuan", "freebsd"],
        runtime: "wine",
        icon: "icons/steam.svg"
    },
    {
        name: "Battle.net",
        version: "1.0",
        description: "Blizzard Entertainment's game launcher for World of Warcraft, Diablo, Overwatch, and more.",
        category: "wine",
        platforms: ["devuan", "freebsd"],
        runtime: "wine",
        icon: "icons/battlenet.svg"
    },
    {
        name: "REAPER",
        version: "7.0",
        description: "Professional digital audio workstation for multitrack recording, editing, mixing, and mastering.",
        category: "wine",
        platforms: ["devuan", "freebsd"],
        runtime: "wine",
        icon: "icons/reaper.svg"
    }
];
