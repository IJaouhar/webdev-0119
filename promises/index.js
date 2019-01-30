function throwTheDice(cb) {
  setTimeout( () => {
    const num = Math.floor(Math.random() * 6 ) + 1;
    console.log(`the number is: ${num}`);
    cb();
  }, 3000)
}

throwTheDice(() => {
  console.log('i finished');
})

function throwTheDiceWithPromise() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const num = Math.floor(Math.random() * 6) + 1;
      console.log(`the number is: ${num}`);
      resolve(num);
      // reject(new Error('something went wrong'))
    }, 3000)
  });
}

throwTheDiceWithPromise()
  .then((num) => {
    console.log('i finished');
  })
  .then(() => {
    console.log('in another then')
  })
  .catch((error) => {
    console.log(error);
  })



// const temp = async () => {
//   const num = await throwTheDiceWithPromise();
//   console.log(num);
// }

// temp();
