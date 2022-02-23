const topQuote = document.querySelector(".topquote");
var tqContent = topQuote.querySelector("h2");

const quotenum = 6;

const quote = [
  `"Not eveything in life is something you control, but what you can control is yourself"`,
  `"It takes pressure to make diamonds"`,
  `"Do what you need to for survival, just don't forget to live"`,
  `"Failure is just another step towards success"`,
  `"Your problems will only get more overwhelming if it's all you think about"`,
  `"Being weak is not a bad thing, it just means you have more time to grow"`,
];

function genRandom() {
  const number = Math.floor(Math.random() * quotenum);
  tqContent.innerHTML = quote[number];
}

genRandom();
