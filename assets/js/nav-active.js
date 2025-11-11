document.addEventListener("DOMContentLoaded", () => {
  const path = window.location.pathname;
  const navLinks = document.querySelectorAll("header nav a");

  navLinks.forEach(link => {
    const href = link.getAttribute("href");

    // Normalize both paths for comparison
    // Remove the trailing slash if any
    const normalizedPath = path.replace(/\/$/, "");
    const normalizedHref = href.replace(/\/$/, "");

    // Home tab special case
    if (normalizedHref === "/" && normalizedPath === `/${window.location.pathname.split("/")[1]}`) {
      link.classList.add("active");
      return;
    }

    // For other tabs: match base section ignoring language
    // Extract last segment as language
    const pathParts = normalizedPath.split("/");
    const hrefParts = normalizedHref.split("/");

    // Compare section part only (first segment after root)
    if (pathParts[1] === hrefParts[1]) {
      link.classList.add("active");
    }
  });
});
