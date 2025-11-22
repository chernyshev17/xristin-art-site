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
      }
    };

    const nextBtn = slideshow.querySelector("[data-next]");
    const prevBtn = slideshow.querySelector("[data-prev]");

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        const nextIndex = (currentIndex + 1) % slides.length;
        showSlide(nextIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(prevIndex);
      });
    }

    thumbs.forEach((thumb, i) => {
      thumb.addEventListener("click", () => {
        showSlide(i);
      });
    });

    showSlide(0);
  });

  // Лайтбокс
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
