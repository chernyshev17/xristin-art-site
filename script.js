// ---------- FADE-IN ON SCROLL ----------
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll(".fade-section");
  if (faders.length) {
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );
    faders.forEach((el) => observer.observe(el));
  }
});

// ---------- SLIDESHOWS ON GALLERY ----------
document.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll("[data-slideshow]");
  slideshows.forEach((slideshow) => {
    const slides = slideshow.querySelectorAll(".slide");
    const thumbs = slideshow.querySelectorAll(".slideshow-thumb");
    const prevBtn = slideshow.querySelector("[data-prev]");
    const nextBtn = slideshow.querySelector("[data-next]");

    let current = 0;

    function showSlide(index) {
      if (!slides.length) return;
      current = (index + slides.length) % slides.length;

      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === current);
      });
      thumbs.forEach((thumb, i) => {
        thumb.classList.toggle("active", i === current);
      });
      // центрируем активную миниатюру
      const activeThumb = thumbs[current];
      if (activeThumb && activeThumb.scrollIntoView) {
        activeThumb.scrollIntoView({
          block: "nearest",
          inline: "center",
        });
      }
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => showSlide(current - 1));
    }
    if (nextBtn) {
      nextBtn.addEventListener("click", () => showSlide(current + 1));
    }

    thumbs.forEach((thumb) => {
      const idx = parseInt(thumb.dataset.index, 10);
      thumb.addEventListener("click", () => showSlide(idx));
    });

    // старт
    showSlide(0);

    // свайпы по основной картинке
    const main = slideshow.querySelector(".slideshow-main");
    if (main) {
      let startX = null;

      main.addEventListener("touchstart", (e) => {
        if (e.touches.length === 1) {
          startX = e.touches[0].clientX;
        }
      });

      main.addEventListener("touchmove", (e) => {
        // блокируем горизонтальную прокрутку страницы
        if (startX !== null) {
          e.preventDefault();
        }
      });

      main.addEventListener("touchend", (e) => {
        if (startX === null) return;
        const endX = e.changedTouches[0].clientX;
        const delta = endX - startX;
        const threshold = 40; // минимальный свайп
        if (delta > threshold) {
          showSlide(current - 1);
        } else if (delta < -threshold) {
          showSlide(current + 1);
        }
        startX = null;
      });
    }
  });
});

// ---------- LIGHTBOX (GALLERY + AVAILABLE) ----------
document.addEventListener("DOMContentLoaded", () => {
  const lightbox = document.querySelector(".lightbox");
  if (!lightbox) return;

  const img = lightbox.querySelector("img");
  const closeBtn = lightbox.querySelector(".lightbox-close");

  function openLightbox(src) {
    img.src = src;
    lightbox.classList.add("open");
  }

  function closeLightbox() {
    lightbox.classList.remove("open");
    img.src = "";
  }

  // from gallery slides
  document.querySelectorAll(".slide img").forEach((image) => {
    image.addEventListener("click", () => {
      const full =
        image.dataset.full ||
        image.src; /* dataset full if we ever add separate big file */
      openLightbox(full);
    });
  });

  // from available grid
  document
    .querySelectorAll(".available-item img")
    .forEach((image) => {
      image.addEventListener("click", () => {
        const full = image.dataset.full || image.src;
        openLightbox(full);
      });
    });

  closeBtn.addEventListener("click", closeLightbox);
  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      closeLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("open")) {
      closeLightbox();
    }
  });
});

// ---------- AVAILABLE FILTERS ----------
document.addEventListener("DOMContentLoaded", () => {
  const filterButtons = document.querySelectorAll("[data-filter-series]");
  const items = document.querySelectorAll("[data-series]");

  if (!filterButtons.length || !items.length) return;

  filterButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.dataset.filterSeries; // 'all' or series name

      filterButtons.forEach((b) => b.classList.remove("active"));
      btn.classList.add("active");

      items.forEach((item) => {
        const series = item.dataset.series;
        if (value === "all" || series === value) {
          item.style.display = "";
        } else {
          item.style.display = "none";
        }
      });
    });
  });
});
