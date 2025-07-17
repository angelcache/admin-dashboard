/**
 * Main Functionality
 * Selects Project
 */


setupLineListener();

export function setupLineListener() {
  const gridBoxes = document.querySelectorAll(".grid-boxes .grid-box");

  gridBoxes.forEach((gridBox) => {
    gridBox.addEventListener('click', () => {
      let gridLine = gridBox.firstElementChild;

      addGoldLine(gridLine);
    });
  });

  addGoldZoom();
}

export function addGoldLine(gridLine) {
  const gridLines = document.querySelectorAll(".grid-boxes .line")

  gridLines.forEach((line) => {
    if (line.classList.contains("selected-line")) {
      line.classList.remove("selected-line");
    }
  });
  gridLine.classList.add("selected-line");
}

function addGoldZoom() {
  const zoomIcons = document.querySelectorAll(".grid-box .zoom-icon");

  zoomIcons.forEach((zoomIcon) => {
    zoomIcon.addEventListener('mouseenter', () => {
      zoomIcon.src = "./assets/img/gold-zoom-icon.png";
    })
  })

  zoomIcons.forEach((zoomIcon) => {
    zoomIcon.addEventListener('mouseout', () => {
      zoomIcon.src = "./assets/img/zoom-icon.png";
    })
  })
}