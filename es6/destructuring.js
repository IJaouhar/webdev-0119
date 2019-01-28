const name = "foo";
const lastName = "bar";

const obj1 = {
  name: name,
  lastName: lastName,
}
// or
const obj2 = {
  name, 
  lastName,
};



console.log('obj1: ', obj1);
console.log('obj2: ', obj2);

// destructuring

const person = {
  name: "Ironhacker",
  age: 25,
  favoriteMusic: "Metal",
  address: {
    street: "Super Cool St",
    number: 123,
    city: "Miami"
  }
};

// const age = person.age;
// const { age } = person;

const { 
  age, 
  name = 'anonymous', // with default value if the property doesn't exist in original object will take anonymous as a value
  music = 'pop', 
  address, 
  address: { 
    city, 
    number
  } 
} = person;

console.log(age, name, music, address, city, number );

// with arrays

const roles = ['admin', 'editor', 'guest'];

// const [ admin ] = roles // admin = 'admin'
const [firstElement] = roles // firstElement = 'admin'

const [admin, editor ] = roles; // we declare two variables admin and editor with the values of the first and second position of roles

// if we want to skip the first two elements
const [ , , guest] = roles

console.log(admin, editor, guest);