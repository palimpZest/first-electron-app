// This file is required by the index.html file and will
// be executed in the renderer process for that window.
// All of the Node.js APIs are available in this process.

function clock() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  minutes = check(minutes);
  seconds = check(seconds);
  document.getElementById("demo").innerHTML = `${hours}:${minutes}:${seconds}`;
}
let time = setInterval(clock, 500);
function check(i) {
  if (i < 10) {
    i = "0" + i;
  }
  return i;
}
