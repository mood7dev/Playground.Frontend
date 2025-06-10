//for_in.js
//객체에 사용

const person2 = {
  name: "김달순",
  age: 23,
  language: ["한국어", "영어", "프랑스어"],
  education: {
    school: "한국대",
    major: ["컴퓨터공학", "전자공학"],
    graduated: true,
  },
};

for (const item in person2) {
  console.log(item);
}

console.log("------------------------------");

for (const key in person2) {
  console.log(key, ":", person2[key]);
}
