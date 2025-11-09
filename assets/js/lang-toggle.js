document.addEventListener("DOMContentLoaded", function () {
  const enBtn = document.getElementById("enBtn");
  const esBtn = document.getElementById("esBtn");
  const currentLang = document.documentElement.lang || "en";

  function redirectTo(lang) {
    let pathParts = window.location.pathname.split("/").filter(p => p);

    // Replace last part if it's a language folder
    if (pathParts[pathParts.length - 1].match(/^(en|es)$/)) {
      pathParts[pathParts.length - 1] = lang;
    } else {
      pathParts.push(lang);
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
