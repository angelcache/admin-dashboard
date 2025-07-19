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

const experienceLinks = [
  'https://www.ualberta.ca/en/index.html',
  'https://www.missionspacewalker.ca',
]

const certificateLinks = [
  'https://certificates.mooc.fi/validate/4csz8mzq2g9',
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
      removeGoldIcons(button);
    }
  });
  activeButton.classList.add("active");

  const buttonImg = activeButton.firstElementChild;
  buttonImg.src = `assets/img/gold-${activeButton.innerText.toLowerCase()}-icon.png`;

  const section = activeButton.innerText;

  switch (section) {
    case "Projects":
      generateSection("project", projectLinks, 6);
      break;
    case "Experiences":
      generateSection("experiences", experienceLinks, 2);
      break;
    case "Certificates":
      generateSection("certificate", certificateLinks, 1);
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
      (section === "experiences" || section === "certificate") && !document.body.classList.contains("light-mode")
    )) {
      zoomIcon.classList.remove("zoom-icon");
      zoomIcon.classList.add("zoom-icon-2");
      zoomIcon.src = "assets/img/gold-zoom-icon.png";
    }

    if (i == 6) {
      zoomLink.href = "/";
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

function removeGoldIcons(button) {
  const buttonImg = button.firstElementChild;

  buttonImg.src = `../assets/img/${button.innerText.toLowerCase()}-icon.png`;
}