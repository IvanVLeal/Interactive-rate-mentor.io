//variables

const selectionBtn = document.querySelectorAll(".rating-btn");
const submitBtn = document.querySelector(".submit-btn");
const userSelection = document.querySelector(".user-selection");
const rateContainer = document.getElementById("rate-container");
const tyContainer = document.getElementById("ty-container");

let value;

//Event listeners

selectionBtn.forEach((selection) => {
  selection.addEventListener("click", (e) => {
    value = selection.value;
  });
});

submitBtn.addEventListener("click", () => {
  userSelection.innerText = value;

  rateContainer.classList.remove("display");
  rateContainer.classList.add("no-display");
  tyContainer.classList.remove("no-display");
  tyContainer.classList.add("display");
});
