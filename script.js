let btnDiv = document.getElementById("btnDiv-id");
let colorHex = document.getElementById("hex-color");
let rgbColor = document.getElementById("rgb-color");
let changeColor = document.getElementById("change-color");
let content = document.getElementById("content");
let h1 = document.getElementById("heading");
let mainContent = document.getElementById("section-main");

function randomColor() {
  let hex = ["#"];
  let letter = ["A", "B", "C", "D", "E", "F"];
  let numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  let randomLetters = letter.sort(() => Math.random() - 0.5).slice(0, 2);
  let randomFirstNumbers = numbers.sort(() => Math.random() - 0.5).slice(0, 2);
  let randomSecondNumbers = numbers.sort(() => Math.random() - 0.5).slice(0, 2);
  let createTheColor = hex
    .concat(randomLetters)
    .concat(randomFirstNumbers)
    .concat(randomSecondNumbers)
    .join("");
  console.log(randomLetters);
  console.log(randomFirstNumbers);
  console.log(randomSecondNumbers);
  console.log(createTheColor);
  return createTheColor;
}

changeColor.addEventListener("click", function () {
  mainContent.style.backgroundColor = randomColor();
  h1.textContent = `Color-Flipper`;
});
function getBackgroundColor(contentBackgroundColor) {
  const contentBackground = window.getComputedStyle(contentBackgroundColor);
  return contentBackground.backgroundColor;
}
rgbColor.addEventListener("click", function () {
  mainContent.style.backgroundColor = randomColor();
  const bgColor = getBackgroundColor(mainContent);
  h1.textContent = `Background Color: ${bgColor}`;

  console.log(h1.textContent);
});

colorHex.addEventListener("click", function () {
  const newColor = randomColor();
  mainContent.style.backgroundColor = newColor;
  h1.textContent = `Background Color: ${newColor}`;
});
