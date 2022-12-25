const mainContainer = document.querySelector(".main-container");
const secondaryContainer = document.querySelector(".secondary-container");
const buttonsContainer = document.querySelector(".buttons");
const submitButton = document.getElementById("submit");

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none";
  secondaryContainer.style.display = "block"
});

