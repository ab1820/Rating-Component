const mainContainer = document.querySelector(".main-container");
const secondaryContainer = document.querySelector(".secondary-container");
const buttonsContainer = document.querySelector(".buttons");
const submitButton = document.getElementById("submit");
const rating = document.getElementById("rating");
const rates = document.querySelectorAll(".btn");

submitButton.addEventListener("click", () => {
  mainContainer.style.display = "none";
  secondaryContainer.style.display = "block"
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    rating.innerHTML = rate.innerHTML
  })
})

