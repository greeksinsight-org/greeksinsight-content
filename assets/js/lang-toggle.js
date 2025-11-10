document.addEventListener("DOMContentLoaded", function () {
  const enBtn = document.getElementById("enBtn");
  const esBtn = document.getElementById("esBtn");
  const currentLang = document.documentElement.lang || "en";

  function redirectTo(lang) {
    let pathParts = window.location.pathname.split("/").filter(Boolean);
    // Example pathParts: ["ai", "es", "gamma_exposure_explained"]

    // Find if "en" or "es" exists after "ai"
    const aiIndex = pathParts.indexOf("ai");
    if (aiIndex !== -1 && pathParts.length > aiIndex + 1 && ["en", "es"].includes(pathParts[aiIndex + 1])) {
      // Replace existing language folder
      pathParts[aiIndex + 1] = lang;
    } else {
      // Fallback if no language folder — append it
      pathParts.splice(aiIndex + 1, 0, lang);
    }

    const newPath = "/" + pathParts.join("/") + "/";
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
