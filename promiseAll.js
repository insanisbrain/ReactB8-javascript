// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log('The first promise has resolved');
//     reject(10);
//   }, 1 * 1000)
// })

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The second promise has resolved");
//     resolve(20);
//   }, 2 * 1000);
// })

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("The third promise has rejected");
//     resolve(30);
//   }, 3 * 1000)
// })

// var total = 0;
// Promise.all([p1, p2, p3]).then(
//   (result) => {
//     for (var i in result) {
//       total += result[i];
//     }
//     console.log(`Results : ${result}`)
//     console.log(`Total : ${total}`)
//   }
// ).catch(
//   (error) => {
//     console.log(`Error: ${error}`);
//   }
// );

/**
 * Example 2
 */

let promiseCall = function (returnData, message) {
  return function (resolve, reject) {
    setTimeout(() => {
      console.log(`The ${message} promise hase resolved`)
      resolve(returnData);
    }, returnData * 100)
  }
}

let p1 = new Promise(promiseCall(10, "First"))
let p2 = new Promise(promiseCall(20, "Second"))
let p3 = new Promise(promiseCall(30, "Thirds"))
let p4 = new Promise((resolve, reject) => {
  reject("The 4th Promise has rejected");
})

var total = 0;
Promise.all([p1, p2, p3, p4]).then(
  (result) => {
    for (var i in result) {
      total += result[i];
    }
    console.log(`Results : ${result}`)
    console.log(`Total : ${total}`)
  }
).catch(
  (error) => {
    console.log(`Error: ${error}`);
  }
);