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

// const oldEnough = (age) => {
//   if (age === 115) {
//     console.log('old enough');
//     return 15;
//   }

//   if (age === 16) {
//     console.log('idsjakfsjkfasj');
//     return age + 5;
//   }

//   return age;
// };

// const dayOfTheWeek = (number) => {
//   switch (number) {
//     case 1: {
//       console.log('Monday');
//       break;
//     }
//     case 2: {
//       console.log('Tuesday');
//       break;
//     }
//     case 3: {
//       console.log('Wednesday');
//       break;
//     }
//     case 4: {
//       console.log('Thursday');
//       break;
//     }
//     case 5: {
//       console.log('Friday');
//       break;
//     }
//     case 6: {
//       // console.log('Saturday');
//       return 'Saturday YEYYYYY';
//     }
//     case 7: {
//       console.log('Sunday');
//       break;
//     }
//     default: {
//       break;
//     }
//   }
// };

// const dayOfTheWeekVar = dayOfTheWeek(6);
