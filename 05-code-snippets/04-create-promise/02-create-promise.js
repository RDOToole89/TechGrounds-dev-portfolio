const toggle = true;
// A promise is object represents the eventual completion or failure of an async operation

const examplePromise = new Promise((resolve, reject) => {
  if (toggle) {
    setTimeout(() => {
      resolve('SUCCESS!');
    }, 1000);
  } else {
    reject('FAIL!');
  }
});

const resolveOrReject = () => {
  examplePromise.then((response) => console.log(response)).catch((error) => console.log(error));
};

resolveOrReject();
