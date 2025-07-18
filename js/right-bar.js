/**
 * Adds Speaker and Theme Functionality
 */
const speakerIcon = document.querySelector(".speaker-icon");
const lofiMusic = document.querySelector(".lofi-bg-music")

const themeIcon = document.querySelector(".theme-icon");
const bodyElement = document.body;

speakerIcon.addEventListener('click', () => {
  speakerIcon.classList.toggle("on");

  if (speakerIcon.classList.contains("on")) {
    speakerIcon.src = "./assets/img/gold-speaker-icon.png";
    lofiMusic.play();
  } else {
    speakerIcon.src = "./assets/img/speaker-icon.png";
    lofiMusic.pause();
  }
});

themeIcon.addEventListener('click', () => {
  themeIcon.classList.toggle("on");
  bodyElement.classList.toggle("light-mode")

  if (themeIcon.classList.contains("on")) {
    themeIcon.src = "./assets/img/sun-icon.png";
  } else {
    themeIcon.src = "./assets/img/moon-icon.png";
  }
})
