function sum(n1, n2) {
  return n1 + n2;
}

function sub(n1, n2) {
  return n1 - n2;
}

function calc(cb, n1, n2) {
  const result = cb(n1, n2);
  console.log(result);
}

console.log("sum: " + sum(10, 20));
console.log("sub: " + sub(20, 12));

//축약형 화살표

const sum1 = (n1, n2) => n1 + n2;
const sub1 = (n1, n2) => n1 - n2;

const calc1 = (cb, n1, n2) => console.log(cb(n1, n2));
console.log("sum: " + sum1(10, 20));
console.log("sub: " + sub1(20, 12));
