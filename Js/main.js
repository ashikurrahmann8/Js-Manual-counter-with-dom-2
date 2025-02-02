//getting all html elements

const counter = document.getElementById("counter");
const btn = document.querySelectorAll(".btn");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");

let count = 0;
let count1 = 0;

btn.forEach((btn) => {
  btn.addEventListener("click", (eachBtn) => {
    let classname = eachBtn.target.className;

    if (classname.includes("increase")) {
      count++;
    } else if (classname.includes("decrease")) {
      count--;
    } else {
      count = 0;
      count1 = 0;
    }
    counter.innerHTML = count;
    counter.innerHTML = count1;
  });
});

/**
 * creating an automatic counter
 */

startBtn.addEventListener("click", () => {
  let interval = setInterval(() => {
    counter.innerHTML = count1++;
  }, 1000);
  stopBtn.addEventListener("click", () => {
    clearInterval(interval);
  });
});
