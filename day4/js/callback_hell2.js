//222222콜백 지옥222222
setTimeout(() => {
  console.log("A");
  setTimeout(() => {
    console.log("B");
    setTimeout(() => {
      console.log("C");
    }, 1000);
  }, 2000);
}, 3000);
