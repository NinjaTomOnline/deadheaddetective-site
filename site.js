(() => {
  const galleryTabs = document.querySelectorAll("[data-gallery-tab]");
  const galleryPanels = document.querySelectorAll("[data-gallery-panel]");

  function activateGallery(device) {
    galleryTabs.forEach((tab) => {
      const isActive = tab.dataset.galleryTab === device;
      tab.classList.toggle("active", isActive);
      tab.setAttribute("aria-selected", isActive ? "true" : "false");
    });

    galleryPanels.forEach((panel) => {
      panel.hidden = panel.dataset.galleryPanel !== device;
    });
  }

  galleryTabs.forEach((tab) => {
    tab.addEventListener("click", () => activateGallery(tab.dataset.galleryTab || "iphone"));
  });

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
