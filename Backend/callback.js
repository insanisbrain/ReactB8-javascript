/**
 * Callback function
 * 1. In javascript we can assign a function to a variable
 * 2. Pass a function has an argument
 * 3. Returning functinos
 */

/**
 * Defination: Any function that is passed as an argument is called a callback function.
 * 
 * - A callback function is a function is to be executed after the another function has finished executing.
 * - callback are a way to make sure certain code dosen't execute untill other code has already finished.
 */

// const funA = () => {

//   setTimeout(() => {
//     console.log(`Welcome FunA`);
//     funB()
//   }, 1000);
// }

// const funB = () => {
//   console.log(`Welcome funB`);
// }

// funA();

const personOne = (name, callFrnd) => {
  // console.log("Callback", callBack)
  console.log(`personOne name: => ${name}`);
  callFrnd("hey callback function");
}

const personTwo = (data, asdas) => {
  console.log(`personTwo ==> ${data}`)
}

personOne("Ankit", personTwo);


