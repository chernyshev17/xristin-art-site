document.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll("[data-slideshow]");

  slideshows.forEach((slideshow) => {
    const slides = Array.from(slideshow.querySelectorAll(".slide"));
    if (!slides.length) return;

    const thumbs = Array.from(
      slideshow.querySelectorAll(".slideshow-thumb")
    );

    let currentIndex = 0;

    const showSlide = (index, scrollThumb) => {
      currentIndex = index;

      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });

      if (thumbs.length) {
        thumbs.forEach((thumb, i) => {
          thumb.classList.toggle("active", i === index);
        });

        // прокручиваем панель миниатюр ТОЛЬКО по действию пользователя
        if (scrollThumb) {
          const activeThumb = thumbs[index];
          if (activeThumb && activeThumb.scrollIntoView) {
            activeThumb.scrollIntoView({
              behavior: "smooth",
              block: "nearest",
              inline: "center",
            });
          }
        }
      }
    };

    const nextBtn = slideshow.querySelector("[data-next]");
    const prevBtn = slideshow.querySelector("[data-prev]");

    const goNext = (fromUser = false) => {
      const nextIndex = (currentIndex + 1) % slides.length;
      showSlide(nextIndex, fromUser);
    };

    const goPrev = (fromUser = false) => {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      showSlide(prevIndex, fromUser);
    };

    if (nextBtn) nextBtn.addEventListener("click", () => goNext(true));
    if (prevBtn) prevBtn.addEventListener("click", () => goPrev(true));

    thumbs.forEach((thumb, i) => {
      thumb.addEventListener("click", () => showSlide(i, true));
    });

    // свайпы по основной картине (тач), с отключением горизонтального скролла
    const mainArea = slideshow.querySelector(".slideshow-main");
    if (mainArea) {
      let startX = null;
      let startY = null;
      let isSwiping = false;

      mainArea.addEventListener(
        "touchstart",
        (e) => {
          if (e.touches.length !== 1) return;
          const touch = e.touches[0];
          startX = touch.clientX;
          startY = touch.clientY;
          isSwiping = false;
        },
        { passive: true }
      );

      mainArea.addEventListener(
        "touchmove",
        (e) => {
          if (startX === null || startY === null) return;
          const touch = e.touches[0];
          const dx = touch.clientX - startX;
          const dy = touch.clientY - startY;

          // определяем, что пользователь делает горизонтальный свайп
          if (!isSwiping) {
            if (Math.abs(dx) > 20 && Math.abs(dx) > Math.abs(dy)) {
              isSwiping = true;
            } else if (Math.abs(dy) > 20) {
              // вертикальный скролл — выходим, не блокируем
              startX = null;
              startY = null;
              return;
            }
          }

          if (isSwiping) {
            // блокируем горизонтальный скролл страницы
            e.preventDefault();
          }
        },
        { passive: false }
      );

      mainArea.addEventListener(
        "touchend",
        (e) => {
          if (startX === null || startY === null) {
            startX = null;
            startY = null;
            isSwiping = false;
            return;
          }

          const touch = e.changedTouches[0];
          const dx = touch.clientX - startX;
          const dy = touch.clientY - startY;

          if (isSwiping && Math.abs(dx) > 50 && Math.abs(dx) > Math.abs(dy)) {
            if (dx < 0) {
              goNext(true);
            } else {
              goPrev(true);
            }
          }

          startX = null;
          startY = null;
          isSwiping = false;
        },
        { passive: true }
      );
    }

    // стартуем с первой, БЕЗ прокрутки страницы к миниатюре
    showSlide(0, false);
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
