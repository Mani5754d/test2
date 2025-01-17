let currentSlide = 0;
const slides = document.querySelectorAll(".slide");
const popup = document.getElementById("size-chart-popup");

function changeSlide(direction) {
  slides[currentSlide].classList.remove("active");
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  slides[currentSlide].classList.add("active");
}

function filterColor(color) {
  slides.forEach(slide => {
    slide.classList.remove("active");
    if (slide.classList.contains(color)) {
      slide.classList.add("active");
    }
  });
  currentSlide = 0;
}

function selectSize(button) {
  document.querySelectorAll(".size-btn").forEach(btn => btn.classList.remove("selected"));
  button.classList.add("selected");
}

function showSizeChart() {
  popup.style.display = "flex";
}

function hideSizeChart() {
  popup.style.display = "none";
}

// Initialize first slide
slides[0].classList.add("active");
