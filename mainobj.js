const form = document.querySelector(".mainobj"),
  input = form.querySelector("input"),
  objective = document.querySelector(".js-maingoal");

const CurObj = "currentObjective",
  SHOWING_CN = "showing";

function saveGoal(text) {
  localStorage.setItem(CurObj, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = input.value;
  displayGoal(currentValue);
  saveGoal(currentValue);
}

function askForGoal() {
  form.addEventListener("submit", handleSubmit);
}

function displayGoal(text) {
  objective.classList.add(SHOWING_CN);
  objective.innerText = `Today you're going to ${text}!`;
}

function loadGoal() {
  const currentObjective = localStorage.getItem(CurObj);
  if (currentObjective === null) {
    askForGoal();
  } else {
    displayGoal(currentObjective);
  }
}

function init() {
  loadGoal();
}

init();
