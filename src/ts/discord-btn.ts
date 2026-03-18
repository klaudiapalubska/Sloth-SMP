export function initExternalLinks() {
  const discordBtns =
    document.querySelectorAll<HTMLButtonElement>(".discordBtn");

  discordBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const link = btn.dataset.link;
      if (!link) return;

      window.open(link, "_blank", "noopener,noreferrer");
    });
  });
}
