function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const button = document.querySelector(".change-color");
const spanColor = document.querySelector(".color");

button.addEventListener("click", () => {
  const newColor = getRandomHexColor();
  document.body.style.background = newColor;
  spanColor.textContent = newColor;
});
