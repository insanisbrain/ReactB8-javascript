// function sum(name, args) { // Rest Operator

//   console.log("Arguments ==>", arguments)
//   console.log("Name ==>", name);
//   console.log("args ==>", args);

//   let total = 0;
//   for (let index in args) {
//     total += args[index]
//   }

//   document.write(`Hey ${name} your score is ${total} </br>`);

// }

// let subjectScore = [20, 30, 40, 50];
// // sum("Ankit Varia", subjectScore); // Wrong Output
// sum("Ankit Varia", ...subjectScore); // Right Output


// let score = [50, 30, 70];
// sum("Gorakh", ...score); // Spread Operator

// Pass By Value & Pass By Reference

/**
 * Pass BY Value --> Primitive Data type --> Number, String, undefined, null, ...
 * Pass BY Ref --> Non primitive data type --> Object
 */

// let a = "ankit";
// let b = a;
// a = "Varia";
// console.log("A -->", a)
// console.log("B -->", b)

// var arr1 = [10, 20, 30, 40];
// var arr2 = [50, 60];

// // var arr3 = arr1.concat(arr2);
// var arr3 = ["Ankit Varia", ...arr1, ...arr2, "XYZ"];

// arr1.push(50);

// console.log("ARR1 ->", arr1); // [10, 20, 30, 40, 50]
// console.log("ARR2 ->", arr2); // [10, 20, 30, 40]

// console.log("ARR3 ->", arr3) // [10, 20, 30, 40, 50, 60]

// var obj1 = { "name": "Ankit Varia", "course": "Javascript" }
// var obj2 = { age: 27 }

// var obj3 = { ...obj1, ...obj2 }
// console.log(obj3);

