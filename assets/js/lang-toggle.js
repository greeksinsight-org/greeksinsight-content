document.addEventListener("DOMContentLoaded", function () {
  const enBtn = document.getElementById("enBtn");
  const esBtn = document.getElementById("esBtn");
  const currentLang = document.documentElement.lang || "en";

  function redirectTo(lang) {
    let pathParts = window.location.pathname.split("/").filter(Boolean);
    // Example: ["ai", "en", "gamma_exposure_explained"]

    // Find if current path already contains a language segment
    const langIndex = pathParts.findIndex((p) => p === "en" || p === "es");

    if (langIndex !== -1) {
      // Replace the current language with the target language
      pathParts[langIndex] = lang;
    } else {
      // If no language folder, insert after the first segment (topic)
      if (pathParts.length > 0) {
        pathParts.splice(1, 0, lang);
      } else {
        pathParts.push(lang);
      }
    }

    let newPath = "/" + pathParts.join("/");

    // ✅ Add trailing slash ONLY for language folders like "/ai/en" or "/ai/es"
    if (newPath.endsWith("/en") || newPath.endsWith("/es")) {
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
