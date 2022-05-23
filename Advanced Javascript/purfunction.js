/**
 * Impure Function
 */

// var x = 10;

// function add(x) {
//   return x++;
// }

// console.log(add());
// console.log(add());
// console.log(add());
// console.log(add());

/**
 * Pure function
 * 
 * Explaination:
 * Pure function are functions that accept an input and return a value without modifying any data 
 * outside its scopes.
 */

function add(x) {
  return x + 1;
}

add(10);
add(11);
add(12);