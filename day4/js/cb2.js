const div = function (n1, n2) {
  console.log(`${n1} / ${n2} = ${n1 / n2}`);
};

function sum(n1, n2) {
  console.log(`${n1} + ${n2} = ${n1 + n2}`);
}

const calc = function (cb, n1, n2) {
  cb(n1, n2);
};

calc(sum, 10, 20);
calc(div, 10, 2);

calc(
  function (n1, n2) {
    console.log(n1 * n2);
  },
  30,
  2
);

// findMax 함수 정의
function findMax(n1, n2) {
  console.log(n1 > n2 ? n1 : n2);
}

// calc2 함수 정의
function calc2(fn, n1, n2) {
  fn(n1, n2);
}

calc2(findMax, 10, 20); // 20 출력
calc2(findMax, 70, 20); // 70 출력
