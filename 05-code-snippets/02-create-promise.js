const examplePromise = new Promise((resolve, reject) => {
  let toggle = true;

  if (toggle) {
    setTimeout(() => {
      resolve('SUCCESS!');
    }, 1000);
  }

  return reject('FAIL!');
});

console.log(examplePromise);
