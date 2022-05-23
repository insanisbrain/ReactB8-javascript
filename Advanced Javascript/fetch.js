// fetch("./readme.txt")
//   .then(response => response.text())
//   .then(data => document.write(data))
//   .catch(error => console.log("error", error))

/**
 * READ .txt file from local / server
 */
// fetch("./readme.txt")
//   .then((response) => {
//     return response.text();
//   })
//   .then((data) => {
//     document.write(data);
//   })
//   .catch((error) => {
//     console.log("error", error);
//   })

/**
 * READ json file from server
 */

// fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then((data) => {
//     for (var index in data) {
//       document.write(`Hello my name is <strong>${data[index].name}</strong> && my email address is <strong>${data[index].email}</strong> & I'm belongs from ${data[index].address.city} city <br>`)
//     }
//   })
//   .catch(error => console.error(`Can't Fetch Data ${error}`));

/**
 * READ json file from local
 */

// fetch('./student.json')
//   .then(response => response.json())
//   .then((data) => {
//     console.log(data)
//     // for (var parentIndex in data) {
//     //   // document.write(`Hello my name is <strong>${data[parentIndex].name}</strong> && my age is <strong>${data[parentIndex].age}</strong> & I'm belongs from ${data[parentIndex].city} city`)
//     //   // console.log(`data[parentIndex].country`, JSON.stringify(data[parentIndex].country[0].name))
//     //   for (var childIndex in data[parentIndex]) {
//     //     console.log("childIndex", childIndex)
//     //     // document.write(`I'm from this countries ${data[parentIndex].country[childIndex].name}`)
//     //   }
//     //   document.write('------ </br>')
//     // }

//     // Parent Loop
//     data.forEach((parentValue) => {
//       document.write(`Hello my name is <strong>${parentValue.name}</strong> && my age is <strong>${parentValue.age}</strong> & I'm belongs from ${parentValue.city} city <br>`)
//       document.write(`I'm belongs from below countries <br>`)

//       // Child Loop
//       parentValue.country.forEach((country) => {
//         document.write(`<li> ${country.name} </li>`)
//       })
//       document.write(`------ <br>`)
//     })

//   })
//   .catch(error => console.error(`Can't Fetch Data ${error}`));

/**
 * POST METHOD
 */

// Default GET methods

// Method -- HTTP METHOD
// Body -- Data need to send at Backend Server
// Header -- Data type 

let options = {
  method: 'POST',
  body: JSON.stringify({
    title: 'Ankit Varia',
    body: 'Sr. Software Developer',
    userId: 24,
  }),
  headers: {
    'Content-type': 'application/json',
  },
}

// fetch('https://jsonplaceholder.typicode.com/posts', options)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

/**
 * PUT Method
 */

// let options1 = {
//   method: 'PUT',
//   body: JSON.stringify({
//     title: 'Ankit Varia',
//     body: 'Sr. Software Developer',
//     userId: 24
//   }),
//   headers: {
//     'Content-type': 'application/json',
//   },
// }

// fetch('https://jsonplaceholder.typicode.com/posts/2', options1)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

/**PATCH METHoD */

// let options2 = {
//   method: 'PATCH',
//   body: JSON.stringify({
//     title: 'Ankit Varia'
//   }),
//   headers: {
//     'Content-type': 'application/json',
//   },
// }

// fetch('https://jsonplaceholder.typicode.com/posts/2', options2)
//   .then((response) => response.json())
//   .then((json) => console.log(json));

/**
 * DELETE Method
 */

let option3 = {
  method: 'DELETE',
}

fetch('https://jsonplaceholder.typicode.com/posts/2', option3)
  .then((response) => response.json())
  .then((json) => console.log(json));

function abc(x) {
  return (y)
  return (x + y)
}


