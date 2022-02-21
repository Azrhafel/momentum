const topQuote = document.querySelector(".topquote");
var tqContent = topQuote.querySelector("h3");

const quotenum = 7;



function getquote() {
    const q1 = tqContent.innerHTML =
    "<h3>Not eveything in life is something you control, but what you can control is yourself</h3>";
    const q2 = tqContent.innerHTML = "<h3> Test2 </h3>";
    const q3 = tqContent.innerHTML = "<h3> Test3 </h3>";
    const q4 = tqContent.innerHTML = "<h3> Test4 </h3>";
    const q5 = tqContent.innerHTML = "<h3> Test5 </h3>";
    const q6 = tqContent.innerHTML = "<h3> Test6 </h3>";
}

// Creates a random number from 1-6 with a q before the number
function genRandom() {
  const number = Math.floor(Math.random() * quotenum);
  return "q"+number
}

genRandom()

function init() {
  const randomNumber = genRandom();
  getquote(randomNumber);
}

init();
