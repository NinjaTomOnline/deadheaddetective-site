(() => {
  const lightbox = document.getElementById("screenshot-lightbox");
  if (!lightbox) return;

  const image = document.getElementById("lightbox-image");
  const title = document.getElementById("lightbox-title");
  const caption = document.getElementById("lightbox-caption");
  const triggers = document.querySelectorAll("[data-lightbox-image]");
  const closers = lightbox.querySelectorAll(".lightbox-backdrop, .lightbox-close");

  function closeLightbox() {
    lightbox.hidden = true;
    document.body.classList.remove("lightbox-open");
    image.removeAttribute("src");
    image.setAttribute("alt", "");
    title.textContent = "";
    caption.textContent = "";
  }

  function openLightbox(trigger) {
    image.src = trigger.dataset.lightboxImage || "";
    image.alt = trigger.querySelector("img")?.alt || "";
    title.textContent = trigger.dataset.lightboxTitle || "";
    caption.textContent = trigger.dataset.lightboxCaption || "";
    lightbox.hidden = false;
    document.body.classList.add("lightbox-open");
  }

  triggers.forEach((trigger) => {
    trigger.addEventListener("click", () => openLightbox(trigger));
  });

  closers.forEach((closer) => {
    closer.addEventListener("click", closeLightbox);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && !lightbox.hidden) {
      closeLightbox();
    }
  });
})();
