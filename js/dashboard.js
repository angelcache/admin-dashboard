/**
 * Dashboard functionality
 * Changes labels and boxes
 */

import { setupLineListener } from './main.js';

const projectLinks = [
  'https://angelcache.github.io/odin-landing-page/',
  'https://angelcache.github.io/wizard-duel-rps/',
  'https://angelcache.github.io/etch-a-sketch/',
  'https://angelcache.github.io/calculator/',
  'https://angelcache.github.io/sign-up-form/',
]

const dashboardButton = document.querySelectorAll(".menu button");
const tabTitle = document.querySelector(".tab-title");
const gridBoxesSection = document.querySelector(".grid-boxes");

dashboardButton.forEach((button) => {
  button.addEventListener('click', () => {
    addActiveButton(button);
  });
});

function addActiveButton(activeButton) {
  dashboardButton.forEach((button) => {
    if (button.classList.contains("active")) {
      button.classList.remove("active");
    }
  });
  activeButton.classList.add("active");
  const section = activeButton.innerText;

  switch (section) {
    case "Projects":
      generateSection("project", projectLinks, 6);
      break;
    case "Experiences":
      generateSection("experiences", projectLinks, 2);
      break;
    case "Certificates":
      generateSection("", 0);
      break;
    case "Messages":
      generateSection("", 0);
      break;
  }
  tabTitle.innerText = activeButton.innerText;

}

function generateSection(section, link, boxesNumber) {
  /**
   * Takes the section and generates the
   * number of boxes in it.
   */

  gridBoxesSection.innerHTML = "";

  for (let i = 1; i <= boxesNumber; i++) {
    const box = document.createElement("div");
    box.classList.add("grid-box");

    const line = document.createElement("div");
    line.classList.add("line");

    const img = document.createElement("img");
    img.src = `assets/img/${section}-${i}.png`;
    img.classList.add("box-image");

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const zoomLink = document.createElement("a");
    zoomLink.href = link[i - 1];
    zoomLink.target = "_blank";
    zoomLink.rel = "noopener noreferrer";

    const zoomIcon = document.createElement("img");
    zoomIcon.classList.add("zoom-icon");
    zoomIcon.src = "assets/img/zoom-icon.png";
    zoomIcon.alt = "zoom icon";

    if (i === 6 || (
      section === "experiences" && !document.body.classList.contains("light-mode")
    )) {
      zoomLink.href = "/";
      zoomIcon.classList.remove("zoom-icon");
      zoomIcon.classList.add("zoom-icon-2");
      zoomIcon.src = "assets/img/gold-zoom-icon.png";
    }

    box.appendChild(line);
    box.appendChild(overlay);
    zoomLink.appendChild(zoomIcon);
    box.appendChild(zoomLink);
    box.appendChild(img);
    gridBoxesSection.appendChild(box);
    setupLineListener(); // Reset event listeners for main
  }
}