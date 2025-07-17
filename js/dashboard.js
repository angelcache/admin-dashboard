/**
 * Dashboard functionality
 * Changes labels and boxes
 */

import { setupLineListener, addGoldLine } from './main.js';

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
      generateSection("project", 6);
      break;
    case "Experiences":
      generateSection("project", 2);
      break;
    case "Certificates":
      generateSection("", 0);
      break;
    case "Messages":
      addMessagesSection("", 0);
      break;
  }
  tabTitle.innerText = activeButton.innerText;

}

function generateSection(section, boxesNumber) {
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

    const zoomIcon = document.createElement("img");
    zoomIcon.classList.add("zoom-icon");
    zoomIcon.src = "assets/img/zoom-icon.png";
    zoomIcon.alt = "zoom icon";

    box.appendChild(line);
    box.appendChild(overlay);
    box.appendChild(zoomIcon);
    box.appendChild(img);
    gridBoxesSection.appendChild(box);
    setupLineListener(); // Reset event listeners for main
  }
}

function addProjectsSection() {
  gridBoxesSection.innerHTML = "";

  for (let i = 1; i <= 6; i++) {
    const projectBox = document.createElement("div");
    projectBox.classList.add("grid-box");

    const line = document.createElement("div");
    line.classList.add("line");

    const projectImg = document.createElement("img");
    projectImg.src = `assets/img/project-${i}.png`;
    projectImg.classList.add("project-image");

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    const zoomIcon = document.createElement("img");
    zoomIcon.classList.add("zoom-icon");
    zoomIcon.src = "assets/img/zoom-icon.png";
    zoomIcon.alt = "zoom icon";

    projectBox.appendChild(line);
    projectBox.appendChild(overlay);
    projectBox.appendChild(zoomIcon);
    projectBox.appendChild(projectImg);
    gridBoxesSection.appendChild(projectBox);
    setupLineListener(); // Reset event listeners for main
  }
}

function addActivitesSection() {
  gridBoxesSection.innerHTML = "";

  for (let i = 1; i <= 3; i++) {
    const experienceBox = document.createElement("div");
    experienceBox.classList.add("grid-box");

    const line = document.createElement("div");
    line.classList.add("line");

    const experienceImg = document.createElement("img");
    experienceImg.src = `assets/img/project-${i}.png`;
    experienceImg.classList.add("project-image");

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    experienceBox.appendChild(line);
    experienceBox.appendChild(overlay);
    experienceBox.appendChild(experienceImg);
    gridBoxesSection.appendChild(experienceBox);
    setupLineListener();
  }
}

function addCertificatesSection() {
  gridBoxesSection.innerHTML = "";

  // for (let i = 1; i <= 1; i++) {
  //   const certificateBox = document.createElement("div");
  //   certificateBox.classList.add("grid-box");

  //   const line = document.createElement("div");
  //   line.classList.add("line");

  //   const certificateImg = document.createElement("img");
  //   certificateImg.src = `assets/img/project-${i}.png`;
  //   certificateImg.classList.add("project-image");

  //   const overlay = document.createElement("div");
  //   overlay.classList.add("overlay");

  //   certificateBox.appendChild(line);
  //   certificateBox.appendChild(overlay);
  //   certificateBox.appendChild(certificateImg);
  //   gridBoxesSection.appendChild(certificateBox);
  //   setupLineListener();
  // }
}

function addMessagesSection() {
  gridBoxesSection.innerHTML = "";
}