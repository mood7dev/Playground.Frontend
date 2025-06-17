// 444444promise.js

function fnA(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("A");
      resolve("B");
    }, 3000);
  });
}

function fnB(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(item); // "B"
      resolve("C");
    }, 2000);
  });
}

function fnC(item) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log(item); // "C"
      resolve("Done");
    }, 2000);
  });
}

// then 체이닝 방식
fnA()
  .then((item) => fnB(item))
  .then((item) => fnC(item))
  .then((result) => {
    console.log("Final result:", result);
  });

/*
console.log("-------------------------");
// async/await 방식
async function start() {
  const item = await fnA(); // "A" 출력 후 "B" 반환
  const item2 = await fnB(item); // "B" 출력 후 "C" 반환
  const item3 = await fnC(item2); // "C" 출력 후 "Done" 반환
  console.log("Final result:", item3);
}
start();
*/
