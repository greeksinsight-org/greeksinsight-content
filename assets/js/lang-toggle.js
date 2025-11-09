document.addEventListener("DOMContentLoaded", function () {
  const enBtn = document.getElementById("enBtn");
  const esBtn = document.getElementById("esBtn");
  const currentLang = document.documentElement.lang;

  function redirectTo(lang) {
    const path = window.location.pathname;
    const newPath = path.replace(/(\.en|\.es)?\.html/, `.${lang}.html`);
    window.location.href = newPath;
  }

  enBtn?.addEventListener("click", () => {
    localStorage.setItem("lang", "en");
    redirectTo("en");
  });

  esBtn?.addEventListener("click", () => {
    localStorage.setItem("lang", "es");
    redirectTo("es");
  });

  // Auto-redirect based on last selection
  const savedLang = localStorage.getItem("lang");
  if (savedLang && savedLang !== currentLang) {
    redirectTo(savedLang);
  }
});
