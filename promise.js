// step 1 , how to initialize promise
// let prom = new Promise();

// step 2, Declare a function inside promise
// let prom = new Promise(function () {

// })

// step 3, declare return success or failure
// let prom = new Promise(function (resolve, reject) {
//   // logic
//   // condition -  either me & gorakh will meet or not - Yes / No
//   if (Yes) {
//     resolve("Here is a success");
//   } else {
//     reject("Here is a failure");
//   }
// })

// let onFulfillment = (result) => {
//   console.log(result);
// }

// let onRejection = (error) => {
//   console.log(error)
// }

// prom.then(onFulfillment);
// prom.catch(onRejection);

/**
 * Actual implementation
 */

// let complete = false;

// let promise = new Promise(function (resolve, reject) {
//   if (complete) {
//     resolve("I am successful");
//   } else {
//     reject("I am failed");
//   }
// })

// console.log("PROMISE -->", promise);

////////////////////////////////////////////////////////////////

// Example 1
// function prom(complete) {
//   return new Promise(function (resolve, reject) {

//     setTimeout(function () {
//       console.log("hey I'm in Pending State");

//       if (complete) {
//         resolve("I am successful");
//       } else {
//         reject("I am failed");
//       }

//     }, 5000);


//   })
// }

// prom(true).then(
//   (result) => {
//     console.log("RESULT -->", result);
//   }
// ).catch(
//   (error) => {
//     console.log("ERROR -->", error);
//   }
// )

// Example 2
function prom(number) {
  return new Promise(function (resolve, reject) {

    setTimeout(function () {
      console.log("hey I'm in Pending State");

      if (number % 2 == 0) {
        resolve("The number is even");
      } else {
        reject("THe number is odd");
      }

    }, 1000);


  })
}

prom(11).then(
  (result) => {
    console.log("RESULT -->", result);
  }
).catch(
  (error) => {
    console.log("ERROR -->", error);
  }
)
