const myArray = ["A", "B", "C", "D"];

console.log("Array.isArray(myArray)", Array.isArray(myArray));

for (const item of myArray) {
  console.log(item);
}

//유사배열

const myArray2 = {
  0: "A",
  1: "B",
  2: "C",
  3: "D",
  length: 4,
};
