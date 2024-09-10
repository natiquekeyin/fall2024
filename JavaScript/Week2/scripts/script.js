// // console.log("Welcome to week2");
// // console.log("Hope you understand");

// // // semi colon is called "Statement Terminator"

// // // customerCount IS NOT SAME AS  CustomerCount
// // // Both are considered different...
// // /*
// // Thios is multiline comment
// // */

// // if (x > 10) {
// //   // body of if statment
// // } else {
// //   // body of else...
// // }

// // let name = "Noman Atique";
// // let name1 = "Noman Atique";

// // let x;
// // x = 10;
// // x = "Noman";

// // var y;
// // const z = 10;

// // // int x; IN C-FAMILY

// // let t = 10;

// // let x911 = 10;

// // let y = 14;
// // let z = y%3;

// let x = 10;

// let y = x + 10;
// //  y+=10;
// Increment/Decrement:

// ++ , --

// Pre-increment & Post-increment

// let x = 10;
// console.log(x++); //internally x will become 11
// console.log(x); // output will be
// console.log(--x); //??
// console.log(x--); //??
// console.log(x);

// Lists in Python... Arrys in JavaScript!..

// let x = [1, 2, 3];
// let i = 0;

// console.log(x[i++]); //1
// console.log(x[++i]); //2

// Stict equal operator??

// Coercion:automatic conversion of data type in comparison..

// Strict equality operator : ===  ... to avoid "coercion"

// let x = 10;
// if (x === "10") {
//   console.log("yes");
// } else {
//   console.log("No");
// }

// let x;
// x = 10;
// console.log(typeof x);
// x = "Noman";
// console.log(typeof x);

// Binary Operators: + , -  , * , / ... THEY REQUIRE TWO OPERANDS... X+
// Uniary Operators: ++, -- , !true, !x ... x!=4

// Ternary Operator: is an operator that requires 3 operands...

//   ?:

// syntax:        condition ? Value_if_true:value_if_false;

// let age = 10;
// let message;

// // age > 18 ? console.log("Adult") : console.log("Child");
// // It is a short form of if else... BUT some places in REACT.. it is ONLY allowed and we can't use if else there...

// message = age > 18 ? "Adult" : "Child";
// console.log(message);

// let name1 = "Alan SMith";
// let age = 20;

// console.log("Welcome " + name1 + ". Your age is " + age);

// template literals

// console.log(`Welcome ${name1[0].toTitleCase()}. Your age is ${age + 20}`);

// Try to always use backticks...

// let name1 = "Alan SMith";
// let age = 20;
// console.log("hello");
// console.log("something");
// age > 18 ? console.log("Adult") : console.log("Child");

// for (let i = 0; i < 3; i++) {
//   for (let j = 0; j < 3; j++) {
//     console.log(`(${i},${j})`);
//   }
// }

for (let i = 0; i < 3; i++) {
  for (let j = 0; j < i; j++) {
    console.log(`${i},${j}`);
  }
  console.log("\n");
}
