/**
 * Normal Function (Javascript OOP)
 */

// function add

// Type 1 - Without Parameter
function addition() {
  let parameter1 = 2;
  let parameter2 = 5;
  console.log("Without Parameter Function -->", parameter1 + parameter2);
}
addition();

// Type 2 - With Parameter
function add(parameter1, parameter2) {
  console.log("With Parameter Function -->", parameter1 + parameter2);
}
add(5, 5);
add(4, 2);

/**
 * Arrow Function
 */

// Way 1 => as normal function
addition = () => {
  let parameter1 = 2;
  let parameter2 = 5;
  console.log("Without Parameter Function -->", parameter1 + parameter2);
}

// way 2 => single line function
addition = (parameter1, parameter2) => console.log("Without Parameter Function -->", parameter1 + parameter2);
addition(3, 6);

/**
 * What you can pass in paramter function
 * - String parameter
 * - Number parameter
 * - Object parameter
 * - Array Parameter
 */