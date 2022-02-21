// Get the name added on the start page to be displayed on main page
var greet = document.getElementById("greet");

var queryString = window.location.search;
var parameters = new URLSearchParams(queryString);
var username = parameters.get("username");

var domName = document.querySelector("[data-username]");


if (username) {
  domName.textContent = "Hello " + username + "!";
}


var goal = document.getElementById("mainobj");
var upQuote = document.getElementById("newquote");