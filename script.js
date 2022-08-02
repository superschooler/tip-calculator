// Declaring Variables
let tipValue = 0;
let billValue = 0;
let partySize = 1;
const tip5 = document.getElementById("tip-5");
const tip10 = document.getElementById("tip-10");
const tip15 = document.getElementById("tip-15");
const tip25 = document.getElementById("tip-25");
const tip50 = document.getElementById("tip-50");
const tipCustom = document.getElementById("tip-custom");
const reset = document.getElementById("reset");
const tipAmount = document.getElementById("tip-amount");
const totalAmount = document.getElementById("total-amount");
const billInput = document.getElementById("bill");
const partyInput = document.getElementById("party");

// Calling Functions from Click or Change
reset.addEventListener("click", resetInputs);
tip5.addEventListener("click", activeButton5);
tip10.addEventListener("click", activeButton10);
tip15.addEventListener("click", activeButton15);
tip25.addEventListener("click", activeButton25);
tip50.addEventListener("click", activeButton50);
// tipCustom.addEventListener("click", activeButtonCustom);
billInput.addEventListener("input", updateValues);
partyInput.addEventListener("input", updateValues);

// Getting Updated Bill & Party Size Values
function updateValues() {
  billValue = billInput.value;
  partySize = partyInput.value;
  activateResetButton();
  calculate();
}

// Function to Reset Active Tip Button
function resetButtons() {
  //   ? Is it possible to create a loop through class names instead of listing them all individually?
  tip5.classList.remove("text-cyan-900", "bg-teal-400");
  tip5.classList.add("bg-cyan-900", "text-white");
  tip10.classList.remove("text-cyan-900", "bg-teal-400");
  tip10.classList.add("bg-cyan-900", "text-white");
  tip15.classList.remove("text-cyan-900", "bg-teal-400");
  tip15.classList.add("bg-cyan-900", "text-white");
  tip25.classList.remove("text-cyan-900", "bg-teal-400");
  tip25.classList.add("bg-cyan-900", "text-white");
  tip50.classList.remove("text-cyan-900", "bg-teal-400");
  tip50.classList.add("bg-cyan-900", "text-white");
  tipCustom.classList.remove(
    "text-cyan-900",
    "bg-white",
    "border-1",
    "border-teal-400"
  );
  tipCustom.classList.add("bg-slate-100", "text-slate-500");
  reset.classList.remove("text-cyan-900", "bg-teal-400", "cursor-pointer");
  reset.classList.add("bg-cyan-800", "text-cyan-900");
}

function activateResetButton() {
  reset.classList.remove("bg-cyan-800", "text-cyan-900");
  reset.classList.add("text-cyan-900", "bg-teal-400", "cursor-pointer");
}

function resetInputs() {
  resetButtons();
  billInput.value = "";
  partyInput.value = "";
  tipAmount.innerHTML = 0;
  totalAmount.innerHTML = 0;
}

// Function to Set Active Tip Button
function activeButton5() {
  resetButtons();
  tip5.classList.remove("bg-cyan-900", "text-white");
  tip5.classList.add("text-cyan-900", "bg-teal-400");
  activateResetButton();
  tipValue = 0.05;
  updateValues();
}

function activeButton10() {
  resetButtons();
  tip10.classList.remove("bg-cyan-900", "text-white");
  tip10.classList.add("text-cyan-900", "bg-teal-400");
  activateResetButton();
  tipValue = 0.1;
  updateValues();
}

function activeButton15() {
  resetButtons();
  tip15.classList.remove("bg-cyan-900", "text-white");
  tip15.classList.add("text-cyan-900", "bg-teal-400");
  activateResetButton();
  tipValue = 0.15;
  updateValues();
}

function activeButton25() {
  resetButtons();
  tip25.classList.remove("bg-cyan-900", "text-white");
  tip25.classList.add("text-cyan-900", "bg-teal-400");
  activateResetButton();
  tipValue = 0.25;
  updateValues();
}

function activeButton50() {
  resetButtons();
  tip50.classList.remove("bg-cyan-900", "text-white");
  tip50.classList.add("text-cyan-900", "bg-teal-400");
  activateResetButton();
  tipValue = 0.5;
  updateValues();
}

// Tip Calculator Function
function calculate() {
  if (billValue > 0 && partySize > 0) {
    tipAmount.innerHTML = ((billValue * tipValue) / partySize).toFixed(2);
    totalAmount.innerHTML = ((billValue * (1 + tipValue)) / partySize).toFixed(
      2
    );
  }
}
