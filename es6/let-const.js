// let, const vs var

let myVariable = 'myVariable';

function sayHello (name) {
  let str = 'hello' + name;
  if (true) {
    console.log('my str is ', str);
  }
  return str;
}

sayHello('paco');

for (let i = 0; i < 10; i++) {
  console.log(i);
}
console.log('outside', i); /// -> ?

const PI = 3.1415;
const IVA = 21
// PI = 4; // error


const student = {
  name: 'Nico',
}

student.name = 'Edgar'; // i can modify the property

student.lastName = 'Nose'; 

console.log(student);

const newArr = [1,2,3].map(function (item) {
  return item + 1;
});
newArr[0] = 4556;
