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
