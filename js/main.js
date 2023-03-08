// Colorful Colors Start Code

// Load Colors from Text File
let colors;
fetch("web-colors.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (colors = strData.split(/\r?\n/)));

// Output Variable
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("go-btn").addEventListener("click", goBtnClicked);

function goBtnClicked() {
  // Get Menu Selection
  let selection = document.getElementById("menu-select").value;

  // Process Menu Selection
  if (selection === "all") {
    displayAll();
  } else if (selection === "start-letter") {
    displayStartingLetter();
  } else if (selection === "random") {
    randomColor();
  }
}

// Menu Functions
function displayAll() {
  outputEl.innerHTML = "Display All";
}

function displayStartingLetter() {
  outputEl.innerHTML = "Display Starting Letter";
}

function randomColor() {
  outputEl.innerHTML = "Random Color";
}
