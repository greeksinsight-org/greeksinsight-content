document.addEventListener("DOMContentLoaded", function () {
  const enBtn = document.getElementById("enBtn");
  const esBtn = document.getElementById("esBtn");
  const currentLang = document.documentElement.lang || "en";

  function redirectTo(lang) {
    let pathParts = window.location.pathname.split("/").filter(Boolean);
    // Example: ["ai", "es", "gamma_exposure_explained"]

    const langIndex = pathParts.findIndex((p) => p === "en" || p === "es");

    if (langIndex !== -1) {
      // Replace existing language folder
      pathParts[langIndex] = lang;
    } else {
      // Insert language after the first folder (like "ai")
      if (pathParts.length > 0) {
        pathParts.splice(1, 0, lang);
      } else {
        pathParts.push(lang);
      }
    }

    const newPath = "/" + pathParts.join("/");
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
