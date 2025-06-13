const arr = [10, 20, 30, 40, 55];
console.log("length: ", arr.length);

arr.forEach(function (item, idx) {
  console.log(`item: ${item}, index: ${idx}`);
});

const myArr = {
  0: 10,
  1: 20,
  2: 30,
  3: 40,
  4: 50,
  length: 5,
  forEach: function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i);
    }
  },
};
console.log("my-length: ", myArr.length);

console.log("my-length:", myArr.length);
myArr.forEach(function (item, idx) {
  console.log(`item: ${item}, idx ${idx}`);
});

//forEach를 이용하여 arr의 모든 값들을 더한 결과값
const myArr2 = {
  0: 10,
  1: 20,
  2: 30,
  3: 40,
  4: 50,
  length: 5,
  forEach: function (cb) {
    for (let i = 0; i < this.length; i++) {
      cb(this[i], i);
    }
  },
};

let sum = 0;
myArr2.forEach(function (val) {
  sum += val;
});

console.log("myArr2 sum:" + sum);
