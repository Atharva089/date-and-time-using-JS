//1. ways to print
document.write("OKAY then");
alert("Do you really want to learn?");
console.log("Let's learn together");

//2. JS console API
console.warn("Warning");
console.error("Error");
console.assert(5 == "hello");
console.assert(4 != 4);

//3. Varaiables
var num1 = 415;
var num2 = 23;
var add = num1 + num2;
// console.log(add);

var str1 = "Atharva";
var str2 = "Chavan";
// console.log(str1);

var runs = {
  Virat: 56,
  Deepak: 23,
  Rohit: 78,
};

// console.log(runs);
//4. Functions

//5. else if
// age = prompt("Enter your age: ");
// if (age < 18) {
//   console.log("Dont Drive");
// } else if (age < 50) {
//   console.log("Drive");
// } else {
//   console.log("Driver needed");
// }

//6. Arrays
//7. Loops
//8. Break & continue

// let arr = [10, 20, 30, 40];
// for (var i = 0; i < arr.length; i++) {
//   if (i == 2) {
//     break
//     continue;
//   }
//   console.log(arr[[i]]);
// }

// let j = 0;
// while (j < arr.length) {
//   console.log(arr[[j]]);
//   j++;
// }

// let j = 0;
// do {
//   console.log(arr[[j]]);
//   j++;
// } while (j < arr.length);

let date = new Date();
// console.log(date.getTime());
// console.log(date.getFullYear());
// console.log(date.getMonth());
// console.log(date.getDay());
// console.log(date.getSeconds());
// console.log(date.getTimezoneOffset());
// console.log(date.getDate());

//9. DOM manipulation

let ele = document.getElementById("home").inn;
// console.log(ele);

// ele = document.getElementById("abtus");
// console.log(ele);

// con = document.getElementsByClassName("container");
// console.log(con);

// cu = document.getElementsByClassName("miracle");
// console.log(cu);

// console.log(ele.innerHTML);
// console.log(ele.innerText);

function home() {
  console.log("This is home page");
}
function abtus() {
  console.log("This is About Us page");
}
function cntus() {
  console.log("This is Contact Us page");
}

//10. Arrow function
clicked = () => {
  console.log("You are seeing the result");
};

//11. Intervals
clr1 = setInterval(clicked, 3000);
clr2 = setTimeout(clicked, 5000);

clearTimeout(clr1);
clearInterval(clr2);

// //12. JS local storage
// localStorage.setItem("name", "Atharva");
// localStorage;
// localStorage.getItem("name");

//13. JSON Javascript Object Notation

obj = { fname: "Atharva", lname: "Chavan", age: 19 };
str_obj = JSON.stringify(obj);
console.log(str_obj);
console.log(typeof str_obj);

real_obj = JSON.parse(`{"fname":"Atharva","lname":"Chavan","age":19}`);
console.log(real_obj);
console.log(typeof real_obj);
