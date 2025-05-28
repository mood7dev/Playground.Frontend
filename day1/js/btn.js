const screen = document.getElementById("screen");
const toggleButton = document.getElementById("button");

let timeInterval;
let seconds = 0;
let state = 0; // 0: 초기화, 1: 실행 중, 2: 일시정지

toggleButton.addEventListener("click", () => {
  if (state === 0) {
    // 상태: 초기화 → 실행
    state = 1;
    toggleButton.innerHTML = "■";
    toggleButton.style.backgroundColor = "#FFB7C5";

    timeInterval = setInterval(() => {
      seconds++;
      const mm = String(Math.floor(seconds / 6000)).padStart(2, "0");
      const ss = String(Math.floor((seconds % 6000) / 100)).padStart(2, "0");
      const cs = String(seconds % 100).padStart(2, "0");
      screen.innerHTML = `${mm}:${ss}:${cs}`;
    }, 10);
  } else if (state === 1) {
    // 상태: 실행 중 → 일시정지
    state = 2;
    clearInterval(timeInterval);
    toggleButton.innerHTML = "■"; // 다시 시작/초기화
    toggleButton.style.backgroundColor = "#FFB7C5";
  } else {
    // 상태: 일시정지 → 초기화
    state = 0;
    seconds = 0;
    screen.innerHTML = "00:00:00";
    toggleButton.innerHTML = "▶";
    toggleButton.style.backgroundColor = "#1e90ff";
  }
});
