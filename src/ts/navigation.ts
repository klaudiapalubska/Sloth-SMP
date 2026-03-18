export function initNavigation() {
  const links = document.querySelectorAll<HTMLAnchorElement>(".nav__link");
  const sections = document.querySelectorAll<HTMLElement>("[data-section]");

  links.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();

      const target = e.currentTarget as HTMLAnchorElement;
      const targetId = target.dataset.target;

      if (!targetId) return;

      sections.forEach((section) => {
        section.classList.add("hidden");
      });

      const activeSection = document.getElementById(targetId);
      activeSection?.classList.remove("hidden");
    });
  });
}
