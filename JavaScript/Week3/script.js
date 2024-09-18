// console.log("Welcome to week3 of JS");
// the functions will crash in other lanuguages while you call them with abnormal parameters...
// function overloading - in C++ family

// function myLog(a) {
//   console.log(a);
// }

// myLog("Hello");
// myLog("Hello", "World");
// myLog();

// arguments is an implicit object in EVERY function

// function myLog(a) {
//   console.log(arguments.length, a, arguments[1]);
// }

// myLog("Hello");
// myLog("Hello", "World");
// myLog();

// function sum() {
//   let count = arguments.length;
//   let total = 0;
//   for (let i = 0; i < count; i++) {
//     total += arguments[i];
//   }

//   return total;
// }

// console.log(sum());
// console.log(sum(1, 2)); //3
// console.log(sum(1, 2, 3, 4, 5)); //

// Paramters and ... (rest parameter)
// ... rest paramter is very important in context of REACT too...
// that accepts multiple values, and checks how many occurences are there of the first number...

// function sum(a, ...numbers) {
//   let total = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     total += numbers[i];
//     console.log(a);
//   }
//   return total;
// }

// // console.log(sum());
// // console.log(sum(1, 2)); //3
// // console.log(sum(1, 2, 3, 4, 5)); //
// console.log(sum(5, 1, 2, 3, 5, 3, 6, 3));

// Dealing with optional or missing arguments
// bonus .... either truthy or falsy

// function updateScore(currentScore, value, bonus) {
//   return bonus ? currentScore + value * bonus : currentScore + value;
// }

// function updateScore(currentScore, value, bonus) {
//   bonus = bonus || 1;
//   return currentScore + value * bonus;
// }

// function updateScore(currentScore, value, bonus) {
//   return currentScore + value * (bonus || 1);
// }

// default parameter to a function
// function updateScore(currentScore, value, bonus = 1) {
//   return currentScore + value * bonus;
// }

// console.log(updateScore(10, 3));
// console.log(updateScore(10, 3, 2));

// Pre-defined functions:
// A lot of built-in global funcitons ...

// parseInt();
// parseFloat();
// isNaN();

// let x = "123.4cm";
// let y = 123.4;
// // console.log(parseInt(x));
// // console.log(parseFloat(x));

// console.log(isNaN(x));
// console.log(isNaN(y));

// console:

// console.log("Hello world");
// console.warn("Hello world");
// console.error("Error here");

// Math...
// Math.abs()
// Math.max()
// Math.random();
// Math.round

// Date..

// Date.now()
// Date.getTime()

// scope:

// function myFunction() {
//   {
//     var name = "Alan Smith";
//   }
//   console.log(name);
// }

// myFunction();

// function f() {
//   //var x;    Hoisting
//   y = x + z + 1;
//   console.log(y);
//   var x = 2;
//   var z = 3;
// }

// console.log(y);
// f();

// function f() {
//   // var x;
//   x = 2; // `x` is assigned a value, but not declared
//   return x + 1;
// }

// f();

// let ..

// function f() {
//   {
//     let i = 10;
//     const j = 20;

//     console.log(j);
//   }
//   // console.log(j);
//   // console.log(i);
// }
// f();

// let str = "The best sound is. this world, is. your .name";

// // function addPeriod(s) {
// //   return s + ".";
// // }

// // function addPeriod(s) {
// //   if (s.endsWith(".")) {
// //     return s;
// //   } else {
// //     return `${s}.`;
// //   }
// // }

// function addPeriod(s) {
//   //let lastPos = s.length - 1;
//   return s.lastIndexOf(".") === s.length - 1 ? s : `${s}.`;
// }

// console.log(addPeriod("Hello."));
// console.log(str);

// Arrays:

// let nums = [1, 2, 3, 4];
// console.log(nums[0]);

// let list = [0, "1", "Alan", true];

// let position = [43.3402, -89.2334];
// // index notation ...
// // let lat = position[0];
// // let lng = position[1];

// // destructure..

// let [lat, lng] = position;

// let dateString = `19/09/2024`;
// let [day, month, year] = dateString.split("/");
// console.log(`Today is ${day} date of ${month} in the year ${year}`);

// let emailAddress = "noman.atique@keyin.com";
// let [domainName] = emailAddress.split("@");
// console.log(domainName);

// let dateString = `19/09/2024`;
// let [day, , year] = dateString.split("/");
// console.log(`Today is date of ${day} in the year ${year}`);

// let nums = [44, 22, 23, 88];
// push() inserts a number at the end

// console.log(nums);
// nums.push(100);
// console.log(nums);

// pop() deletes a number from the end...
// nums.pop();
// console.log(nums);
// nums.unshift(100);
// console.log(nums);
// nums.unshift(200);
// console.log(nums);

// // shift .. to remove something from the beginning...
// nums.shift();
// console.log(nums);
// nums.shift();
// console.log(nums);

// .join() is the opposite of .split method..
// split splits a string on given character...
// join joins a string to make it array by using given character...

// let nums = [2, 1, 4, 6, 7];

// for loop:
// for (let i = 0; i < nums.length; i++) {
//   console.log(nums[i] + 3);
// }

//

let nums = [3, 2, 6, 7];

let listCopy = [];
nums.forEach(function (element) {
  listCopy.push(element + 3);
});

let nums1 = [3, 2, 6, 7];

let listCopy1 = nums.map((element) => element + 3);
console.log(listCopy1);
