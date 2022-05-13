// // Type 1
// async function hello() {
//   return "Hello I'm Test Function";
// }

// // Type 2
// let hello = async () => "Hello I'm Test Function";

// hello()
//   .then((result) => {
//     console.log("Result -->", result);
//   })
//   .catch((error) => {
//     console.log("Error -->", error);
//   })

// async function test() {

//   // Type 1
//   // fetch('./student-async.json')
//   //   .then(response => response.json())
//   //   .then((data) => {
//   //     return data
//   //   })
//   //   .catch(error => console.error(`Can't Fetch Data ${error}`));

//   // Type 2
//   const response = await fetch("./student-async1.json");
//   const students = await response.json();
//   return students;
// }

// let a = test().then(result => console.log(result)).catch(error => console.log(error));
// console.log("RETURN OF A -->", a);

/**
 * Try & Catch
 */
async function test() {
  try {
    const response = await fetch("./student-async.json");
    const students = await response.json();

    return students;
  } catch (error) {
    console.log("Catch Error -->", error);
  }

}

test().then((response) => {
  console.log("Response", response);
})


