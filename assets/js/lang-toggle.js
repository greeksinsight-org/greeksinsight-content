document.addEventListener("DOMContentLoaded", function () {
  const enBtn = document.getElementById("enBtn");
  const esBtn = document.getElementById("esBtn");
  const currentLang = document.documentElement.lang || "en";

  function redirectTo(lang) {
    let pathParts = window.location.pathname.split("/").filter(Boolean);
    // Example: ["ai", "es", "gamma_exposure_explained"]

    // Find existing language folder
    const langIndex = pathParts.findIndex((p) => p === "en" || p === "es");

    if (langIndex !== -1) {
      pathParts[langIndex] = lang; // Replace
    } else {
      // Insert language folder after topic (like "ai")
      if (pathParts.length > 0) {
        pathParts.splice(1, 0, lang);
      } else {
        pathParts.push(lang);
      }
    }

    let newPath = "/" + pathParts.join("/");

    // ✅ Add trailing slash ONLY if the path ends in language folder
    if (newPath.match(/\/(en|es)$/)) {
      newPath += "/";
    }

    if (window.location.pathname !== newPath) {
      window.location.href = newPath;
    }
  }

  enBtn?.addEventListener("click", () => {
    localStorage.setItem("lang", "en");
    redirectTo("en");
  });

  esBtn?.addEventListener("click", () => {
    localStorage.setItem("lang", "es");
    redirectTo("es");
  });

  const savedLang = localStorage.getItem("lang");
  if (savedLang && savedLang !== currentLang) {
    redirectTo(savedLang);
  }
});
