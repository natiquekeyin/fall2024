// let obj = {
//   course: "JavaScript",
//   school: "Keyin College",
//   semester: 2,
// };

// console.log(obj.course); //dot notation...
// console.log(obj["course"]); //index notation...

// let obj1 = {
//   forEach: "something",
// };

// console.log(obj1.forEach); //NOT RIGHT -NOT ALLOWED..
// console.log(obj1["forEach"]); //ALL GOOD...

// let user = {
//   firstName: "First",
//   lastName: "Last",
//   email: "first@gmail.com",
//   loggedIn: false,
//   level: 3,
//   login: function () {
//     this.loggedIn = true;
//   },
//   logout: function () {
//     this.loggedIn = false;
//   },
//   changeName: function (f) {
//     this.firstName = f;
//   },
// };

// console.log(user);
// user.login();
// console.log(user);

// console.log(user);
// user.changeName("Bob");
// console.log(user);

// let user1 = {
//   firstName: "Alan",
//   lastName: "Smith",
//   email: "alan@gmail.com",
//   loggedIn: false,
//   level: 5,
//   login: function () {
//     this.loggedIn = true;
//   },
//   logout: function () {
//     this.loggedIn = false;
//   },
// };

// let user2 = {
//   firstName: "Bob",
//   lastName: "Woolmer",
//   email: "bob@gmail.com",
//   loggedIn: true,
//   level: 2,
//   login: function () {
//     this.loggedIn = true;
//   },
//   logout: function () {
//     this.loggedIn = false;
//   },
// };

// console.log(user1);
// console.log(user2);

// it means to make 100 objects, need copying and pasting 100 times.. NO

// constructor function: is used to construct multiple objects from same function

// function User(f, l, a) {
//   this.firstName = f;
//   this.lastName = l;
//   this.age = a;
//   this.email = "default@gmail.com";
//   this.loggedIn = true;
//   this.level = 1;
// }

// let user1 = new User("Alan", "Smith", 20);
// user1.email = "alan@gmail.com";
// user1.level = 2;
// let user2 = new User("Bob", "Woolmer", 21);
// user2.email = "bob@gmail.com";
// user2.level = 5;
// let user3 = new User("Christina", "Lee", 20);
// user3.email = "christina@gmail.com";
// user3.level = 2;
// console.log(user1);
// console.log(user2);
// console.log(user3);

// function User(f, l, a) {
//   this.firstName = f;
//   this.lastName = l;
//   this.age = a;
//   this.email = "default@gmail.com";
//   this.loggedIn = true;
//   this.lastLoggedIn = new Date();
//   this.level = 1;
//   this.hobbies = ["reading", "gym", "cycling"];
//   this.prefs = { color: "red", model: "Volvo" };
//   this.login = function () {
//     this.loggedIn = true;
//   };
//   this.logout = function () {
//     this.loggedIn = false;
//   };
// }

// let user1 = new User("Alan", "Smith", 20);
// user1.hobbies[0] = "Something";
// user1.prefs.color = "Green";
// console.log(user1);

function User(f, l, a) {
  this.firstName = f;
  this.lastName = l;
  this.age = a;
}

User.prototype.email = "default@gmail.com";
User.prototype.loggedIn = false;
User.prototype.lastLoggedIn = new Date();
User.prototype.level = 1;
User.prototype.hobbies = ["reading", "gym", "cycling"];
User.prototype.prefs = { color: "red", model: "Volvo" };

User.prototype.login = function () {
  this.loggedIn = true;
};
User.prototype.logout = function () {
  this.loggedIn = false;
};

let user1 = new User("Alan", "Smith", 20);
let user2 = new User("Bob", "Smith", 23);
let user3 = new User("Christina", "Smith", 25);
let user4 = new User("Doug", "Smith", 21);
console.log(user1);
user1.login();
console.log(user1.hobbies);
console.log(user1);
// console.log(user2);
// console.log(user3);
// console.log(user4);
