// ("")은 ('') 입니다.
const $screen = document.querySelector("#screen");
const $toggleButton = document.querySelector("#button");
let timeInterval;
let stopWatchOn = false;
let seconds = 0;

console.log("screen:", $screen);
console.log("toggleButton:", $toggleButton);

if ($screen && $toggleButton) {
  $toggleButton.addEventListener("click", () => {
    stopWatchOn = !stopWatchOn;
  });
}
