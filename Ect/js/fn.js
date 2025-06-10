function sum(n1, n2) {
  console.log("sum메소드 호출!!");
  console.log(`${n1}+${n2} = ${n1 + n2}`);
}

sum(1, 2);

const copySum = sum;
copySum(1, 2);

console.log("sum === copySum", sum === copySum);

// 소괄호 생략 가능, 파라미터가 하나일 때
const abs = (val) => {
  return val < 0 ? -val : val;
};
console.log("abs:", abs(-10));
console.log("abs:", abs(11));

// 중괄호 생략 가능, 코드가 한 줄일 때
const abs2 = (val) => console.log("(2)val:", val < 0 ? -val : val);
abs2(-11);
abs2(3);

// return 생략 가능, 코드가 한 줄일 때 (중괄호도 없어야 한다.)
const abs3 = (val) => (val < 0 ? -val : val);

console.log("abs3:", abs3(-10));
console.log("abs3:", abs3(11));
