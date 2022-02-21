const time=document.querySelector(".time") // Gets the class with the name added
    curTime = time.querySelector("h1") //Gets the child element of the class name added with the tag inside.

function getTime() {
      const date = new Date(); /* Gets the details about the date including time */
      const hours = date.getHours(); /* Gets hours specifically */
      const minutes = date.getMinutes(); /* Gets minutes specifically */
      curTime.innerText = `${
        hours < 10 ? `0${hours}` : hours}:${ //If hours is lesser than 10 add 0 before the current hour
        minutes < 10 ? `0${minutes}` : minutes}`; //If minutes is lesser than 10 add 0 before the current minute
}

function init() {
  getTime();
  setInterval(getTime, 60000); // Tells the function to repeat itself every 60 seconds
}

init(); //Runs function to start clock