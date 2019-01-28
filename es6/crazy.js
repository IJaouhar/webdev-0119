// high order functions

function addNumbers(num1, num2) {
  return num1 + num2;
}

const makeAddNumFunction = (num1) => (num2) => addNumbers(num1, num2)

// const makeAddNumFunction = function (num1) {
//   return function (num2) {
//     return addNumbers(num1, num2);
//   }
// }

const myInnerFunction = makeAddNumFunction(2);

console.log(myInnerFunction);

console.log(myInnerFunction(3));

console.log(makeAddNumFunction(5)(5));