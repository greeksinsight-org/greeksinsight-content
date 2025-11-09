document.addEventListener("DOMContentLoaded", function () {
  const enBtn = document.getElementById("enBtn");
  const esBtn = document.getElementById("esBtn");
  const currentLang = document.documentElement.lang || "en"; // fallback

  function redirectTo(lang) {
    const path = window.location.pathname;

    // only redirect if not already on target page
    if (!path.includes(`.${lang}.html`) && !path.endsWith(`/${lang}/`)) {
      const newPath = path.replace(/(\.en|\.es)?\.html/, `.${lang}.html`);
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

  // auto-redirect based on last selection, only if needed
  const savedLang = localStorage.getItem("lang");
  if (savedLang && savedLang !== currentLang) {
    redirectTo(savedLang);
  }
});
