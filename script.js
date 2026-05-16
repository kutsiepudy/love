let text = document.getElementById("paragraph");
let picture = document.getElementById("image");
let music = document.getElementById("romanticMusic")
let startButton = document.getElementById("startButton");
let prevButton = document.getElementById("prevSlide");
let nextButton = document.getElementById("nextSlide");
let slideIndex = 0;

const slides = [
  {text: "Hey...", img: "shy.png"},
  {text: "So....", img: "shy.png"},
  {text: "I told you before...", img: "nervous.png"},
  {text: "I think you're cool...", img: "blush.png"},
  {text: "And cute...", img: "rizzy.png"},
  {text: "Wanna be my girlfriend?", img: "proposal.png"}
];

music.volume = 0.3

function loadSlide(index) {

  let slide = slides[index];

  text.textContent = slide.text;
  picture.src = slide.img;
}

nextButton.addEventListener("click", () => {

  slideIndex++;

  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  loadSlide(slideIndex);

});

prevButton.addEventListener("click", () => {

  slideIndex--;

  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }

  loadSlide(slideIndex);

});

document.addEventListener("keydown", (e) => {

  if (e.key === "ArrowRight") {

    slideIndex++;

    if (slideIndex >= slides.length) {
      slideIndex = 0;
    }

    loadSlide(slideIndex);

  }

  if (e.key === "ArrowLeft") {

    slideIndex--;

    if (slideIndex < 0) {
      slideIndex = slides.length - 1;
    }

    loadSlide(slideIndex);

  }

});

if (startButton) {
  startButton.addEventListener("click", () => {
    music.play();
    startButton.style.display = "none";
  });
}

loadSlide(slideIndex);
