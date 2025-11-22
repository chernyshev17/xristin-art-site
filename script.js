document.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll("[data-slideshow]");

  slideshows.forEach((slideshow) => {
    const slides = Array.from(slideshow.querySelectorAll(".slide"));
    if (!slides.length) return;

    const thumbs = Array.from(
      slideshow.querySelectorAll(".slideshow-thumb")
    );

    let currentIndex = 0;

    const showSlide = (index) => {
      currentIndex = index;

      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });

      if (thumbs.length) {
        thumbs.forEach((thumb, i) => {
          thumb.classList.toggle("active", i === index);
        });

        // автопрокрутка панели миниатюр к активной
        const activeThumb = thumbs[index];
        if (activeThumb && activeThumb.scrollIntoView) {
          activeThumb.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "center",
          });
        }
      }
    };

    const nextBtn = slideshow.querySelector("[data-next]");
    const prevBtn = slideshow.querySelector("[data-prev]");

    const goNext = () => {
      const nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex);
    };

    const goPrev = () => {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(prevIndex);
    };

    if (nextBtn) nextBtn.addEventListener("click", goNext);
    if (prevBtn) prevBtn.addEventListener("click", goPrev);

    thumbs.forEach((thumb, i) => {
      thumb.addEventListener("click", () => showSlide(i));
    });

    // свайпы по основной картине (тач)
    const mainArea = slideshow.querySelector(".slideshow-main");
    if (mainArea) {
      let startX = null;
      let startY = null;

      mainArea.addEventListener(
        "touchstart",
        (e) => {
          if (e.touches.length !== 1) return;
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
        },
        { passive: true }
      );

      mainArea.addEventListener(
        "touchend",
        (e) => {
          if (startX === null || startY === null) return;

          const endX = e.changedTouches[0].clientX;
          const endY = e.changedTouches[0].clientY;
          const dx = endX - startX;
          const dy = endY - startY;

          // горизонтальный свайп, не вертикальный
          if (Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
            if (dx < 0) {
              goNext();
            } else {
              goPrev();
            }
          }

          startX = null;
          startY = null;
        },
        { passive: true }
      );
    }

    // стартуем с первой
    showSlide(0);
  });

  // ===== Лайтбокс =====
  const lightbox = document.getElementById("lightbox");
  const lightboxImage = document.getElementById("lightbox-image");
  const lightboxClose = document.querySelector(".lightbox-close");

  if (lightbox && lightboxImage && lightboxClose) {
    const mainImages = document.querySelectorAll(".slide img");

    mainImages.forEach((img) => {
      img.style.cursor = "zoom-in";
      img.addEventListener("click", () => {
        lightboxImage.src = img.src;
        lightboxImage.alt = img.alt || "";
        lightbox.classList.add("open");
      });
    });

    const closeLightbox = () => {
      lightbox.classList.remove("open");
      lightboxImage.src = "";
    };

    lightboxClose.addEventListener("click", closeLightbox);

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
  }
});
