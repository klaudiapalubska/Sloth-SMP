export function initCopy() {
  const copyElements = document.querySelectorAll<HTMLElement>("[data-copy]");

  copyElements.forEach((el) => {
    const originalText = el.textContent || "";

    el.addEventListener("click", () => {
      const textToCopy = el.getAttribute("data-copy");
      if (!textToCopy) return;

      navigator.clipboard
        .writeText(textToCopy)
        .then(() => {
          el.textContent = "Skopiowano do schowka!";
          setTimeout(() => {
            el.textContent = originalText;
          }, 2000);
        })
        .catch((err) => {
          console.error("Couldn't copy", err);
        });
    });
  });
}
