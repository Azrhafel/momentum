const quoteForm = document.querySelector(".customquote"),
  label = quoteForm.querySelector("label"),
  quoteInput = quoteForm.querySelector("input"),
  custquote = document.querySelector(".js-custom");

const CurQuo = "currentQuote",
  showQuote = "showing2";

function saveQuote(text) {
  localStorage.setItem(CurQuo, text);
}

function handleSubmit(event) {
  event.preventDefault();
  const currentValue = quoteInput.value;
  displayQuote(currentValue);
  saveQuote(currentValue);
}

function askForQuote() {
  quoteForm.addEventListener("submit", handleSubmit);
}

function displayQuote(text) {
  custquote.classList.add(showQuote);
  custquote.innerText = `"${text}"`;
  quoteInput.remove();
  label.remove();
}

function loadQuote() {
  const currentQuote = localStorage.getItem(CurQuo);
  if (currentQuote === null) {
    askForQuote();
  } else {
    displayQuote(currentQuote);
  }
}

function init() {
  loadQuote();
}

init();
