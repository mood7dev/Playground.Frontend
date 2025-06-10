/*
const myArray = [true, 3.14, "Hello", { name: "홍길동" }];

console.log("myArray", myArray);
console.log("myArray.length", myArray.length);

console.log("myArray[2]", myArray[2]);

console.log("typeof myArray", typeof myArray);

myArray[5] = "신사임당";
console.log("myArray", myArray);
console.log("myArray.length", myArray.length);
console.log("myArray[4]", myArray[4]);

// console.log('myArray.5', myArray.5); //숫자 속성은 .으로 접근 불가 대괄로호로만 가능!
*/
//배열에 아이템 추가시 psuch메소드를 활용한다.
const myArray2 = [];

myArray2.push("안녕");
myArray2.push(3.14);
myArray2.push(true);

console.log("myArray2", myArray2);
console.log("myArray2.length", myArray2.length);

//pop : 마지막 요소 제거

myArray2.pop();

console.log("myArray2", myArray2);
console.log("myArray2.length", myArray2.length);

// .splice() 메서드 : 선택 요소 제거

myArray2.splice(1, 1);
console.log("myArray2", myArray2);
console.log("myArray2.length", myArray2.length);
