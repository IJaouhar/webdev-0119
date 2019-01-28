// old way
function CounterOld() {
  this.count = 1;
}

Counter.prototype.countUp = function () {
  setInterval(() => {
    console.log(this.count++); 
  }, 1000);
}

// new way
class CounterNew {
  constructor() {
    this.count = 1;
  }

  countUp() {
    setInterval(() => {
      console.log(this.count++); // 
    }, 1000);
  }
}

let myCounterOld = new CounterOld();
let myCounterNew = new CounterNew();
myCounterOld.countUp();
myCounterNew.countUp();
