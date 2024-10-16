// // How to write promises in JS?

// let p = new Promise(function (resolve, reject) {
//   let a = 4 + 2;
//   if (a === 7) {
//     resolve("Promise fulfilled");
//   } else {
//     reject("Promise rejected");
//   }
// });

// //   How to call or use promise..

// p.then(function (message) {
//   console.log("Success! ", message);
// }).catch(function (error) {
//   console.log("ERROR:", error);
// });

const onMyBirthday = (isKayoSick) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (!isKayoSick) {
        resolve(2);
      } else {
        reject("I am sad");
      }
    }, 2000);
  });
};

onMyBirthday(true)
  .then(function (message) {
    console.log(message);
  })
  .catch(function (message) {
    console.log("Sorry", message);
  })
  .finally(function () {
    console.log("Party going on");
  });
