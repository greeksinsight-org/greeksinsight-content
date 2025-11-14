document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll("header nav a");

  // Remove language prefix from current path
  const normalizedPath = path.replace(/^\/(en|es)/, "");

  navLinks.forEach(link => {
    // Remove language prefix from href
    const baseHref = link.getAttribute("href").replace(/^\/(en|es)/, "");

    // Home tab is active only if normalized path is "/"
    if (baseHref === "/") {
      if (normalizedPath === "/") {
        link.classList.add("active");
      }
      return;
    }

    // Other tabs: startsWith match
    if (normalizedPath.startsWith(baseHref)) {
      link.classList.add("active");
    }
  });
});
