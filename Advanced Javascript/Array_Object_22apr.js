/**
 * Javascript Type
 * ----------------
 * String
 * Number
 * Object
 * Array
 */

let userDetail = []; // Array syntax
let userDetail1 = {}; // Object syntax
// console.log(typeof (userDetail));
let day = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]
// Array string

// console.log(days[2]);

let secondObject = {
  name: "ankit",
  age: "",
  salary: "..",
  gender: [
    {
      xts: {

      }
    },
    {

    }
  ],
}

// Array Object
let allUserData = [
  {
    name: "ankit",
    age: "",
    salary: "..",
    gender: "",
  },
  {
    name: "Varia",
    age: "67",
    salary: "",
    gender: "",
  },
  {
    name: "abc",
    age: [34],
    salary: "",
    gender: "female",
    address: [
      {
        houseno: "134",
        street: "",
        country: ""
      },
      {
        houseno: "345",
        street: "",
        country: []
      }
    ]
  }
];

let printData = () => {
  allUserData.forEach((user, index) => {
    console.log(user);
  })
}

printData();

// What is index in array

// index = 0;

// allUserData[2].age = '50';

// Array Method
/**
 * filter
 * map
 * forEach
 * reduce
 * ...
 */

// Object Method
/**
 * forEach
 * entries
 * ...
 */

let name = "ankit"

let formData = {
  name: "ankit",
  age: '50'
}