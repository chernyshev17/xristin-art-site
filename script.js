document.addEventListener("DOMContentLoaded", () => {
  const slideshows = document.querySelectorAll("[data-slideshow]");

  slideshows.forEach((slideshow) => {
    const slides = Array.from(slideshow.querySelectorAll(".slide"));
    if (slides.length === 0) return;

    let currentIndex = 0;

    const showSlide = (index) => {
      slides.forEach((slide, i) => {
        slide.classList.toggle("active", i === index);
      });
    };

    showSlide(currentIndex);

    const nextBtn = document.querySelector("[data-next]");
    const prevBtn = document.querySelector("[data-prev]");

    if (nextBtn) {
      nextBtn.addEventListener("click", () => {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
      });
    }

    if (prevBtn) {
      prevBtn.addEventListener("click", () => {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        showSlide(currentIndex);
      });
    }
  });
});
