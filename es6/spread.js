
// spread operators with arrays
const parts = ['shoulders', 'knees'];
const lyrics = ['head', 'and', 'toes'];
const results = [...parts, ...lyrics];

console.log(results);

// spread operators with objects
const student = {
  name: 'Paco',
  lastName: 'firstLastName',
}

const lastName = {
  lastName: 'LastName',
  middleName: 'MiddleName',
  otherLevel: {
    a: 0,
  }
}

const studentWithLastNames = {
  ...student,
  ...lastName,
}

// spread operators makes shallow copy
studentWithLastNames.otherLevel.a = 5;
console.log(studentWithLastNames);
console.log(lastName);