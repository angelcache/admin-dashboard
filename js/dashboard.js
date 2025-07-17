/**
 * Dashboard functionality
 * Since this is a mockup will only
 * change the label at the top
 */

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
    case "Project":
      addProjectsSection();
      break;
    case "Experiences":
      addActivitesSection();
      break;
    case "Certificates":
      addCertificatesSection();
      break;
    case "Messages":
      addMessagesSection();
      break;
  }
  if (section == "Projects") {
    addProjectsSection();
  } 
  tabTitle.innerText = activeButton.innerText;

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

    projectBox.appendChild(line);
    projectBox.appendChild(overlay);
    projectBox.appendChild(projectImg);
    gridBoxesSection.appendChild(projectBox);
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
  }
}

function addCertificatesSection() {
  gridBoxesSection.innerHTML = "";

  for (let i = 1; i <= 1; i++) {
    const certificateBox = document.createElement("div");
    certificateBox.classList.add("grid-box");

    const line = document.createElement("div");
    line.classList.add("line");

    const certificateImg = document.createElement("img");
    certificateImg.src = `assets/img/project-${i}.png`;
    certificateImg.classList.add("project-image");

    const overlay = document.createElement("div");
    overlay.classList.add("overlay");

    certificateBox.appendChild(line);
    certificateBox.appendChild(overlay);
    certificateBox.appendChild(certificateImg);
    gridBoxesSection.appendChild(certificateBox);
  }
}

function addMessagesSection() {
  gridBoxesSection.innerHTML = "";
}