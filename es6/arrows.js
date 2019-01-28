// arrow functions

const myFunc = (params) => {
  return 'hola';
}

// ---------------------------
const newArr = [1, 2, 3].map((item) => {
  return item + 1;
});

//----------------------------
function Counter() {
  this.count = 1;
}

Counter.prototype.countUp = function () {
  setInterval(() => {
    console.log(this.count++);
  }, 1000);
  // the arrow functions is auto binding
}
