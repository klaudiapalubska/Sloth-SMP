import { initNavigation } from "./navigation";
import { initCopy } from "./copy";
import { initExternalLinks } from "./discord-btn";

document.addEventListener("DOMContentLoaded", () => {
  initNavigation();
  initCopy();
  initExternalLinks();
});
