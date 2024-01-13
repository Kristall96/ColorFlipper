let mainContent = document.getElementById("section-main");
let btnDiv = document.getElementById("btnDiv-id");
let btnTextColor = document.getElementById("text-color");
let rgbColor = document.getElementById("hex-color");
let changeColor = document.getElementById("change-color");
let content = document.getElementById("content");
let h1 = document.getElementById("heading");

function getBackgroundColor(ContentBackgroundColor) {
  const contentBackground = window.getComputedStyle(ContentBackgroundColor);
  return contentBackground.backgroundColor;
}

btnTextColor.addEventListener("click", function (e) {
  const bgColor = getBackgroundColor(mainContent);
  h1.textContent = `Keep Generatting Color: ${bgColor}`;
  mainContent.style.backgroundColor = randomColor();
});

rgbColor.addEventListener("click", function (e) {
  const bgColor = getBackgroundColor(mainContent);
  h1.textContent = `Background Color: ${bgColor}`;

  console.log(h1.textContent);
});

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

changeColor.addEventListener("click", function (e) {
  mainContent.style.backgroundColor = randomColor();
  h1.textContent = `Color-Flipper`;
});
