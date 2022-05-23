// var a; --> Variable initialize / declare
// a = "Hello"  --> Initialized variable value assignment

/**
 * Var
 */
// var a = "Hello"; *
// var a = "Ankit"; *
// a = "Varia"; *

// console.log("VAR :: A -->", a);

/**
 * Let
 */

// let a = "Hello"; *
// // let a = "Ankit"; +
// a = "Varia"; *

// console.log("LET :: A -->", a);

/**
 * Const
 */

// const a = "Hello"; *
// const a = "Ankit"; +
// a = "Varia"; +

// console.log("CONST :: A -->", a);


/**
 * Scope Execution of Let, Var & Const
 */

// VAR - GLOBAL SCOPE
// if (true) {
//   // This code needs execute 
//   var a = "Hello";
// }

// document.write(`Variable value --> ${a}`);

// LET - BLOCK SCOPE

// if (true) {
//   // This code needs execute 
//   let a = "Hello";
// }

// document.write(`LET value --> ${a}`);

// CONST - BLOCK SCOPE
// if (true) {
//   // This code needs execute 
//   const a = "Hello";
// }

// document.write(`Constant value --> ${a}`);


// Variable Hoisting

let a;
console.log(`Variable a value is ${a}`);
a = 10;

function hello() {
  console.log("hello Ankit");
}

hello();

