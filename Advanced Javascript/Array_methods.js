var ages = [10, 23, 19, 20];
var adultAge = 18;

// find() method return the value of the "first element" in Array that pass that test

/**
 * Find Method
 */

// document.write(ages + "<br><br>")

// var findAge = ages.find(checkAdult);
// document.write(findAge + "<br><br>")

// function checkAdult(age) {
//   return age >= 18;
// }


/**
 * FindIndex Method
 * - findIndex() method return the index of the "first element" in array that pass a test
 */

// document.write(ages + "<br><br>")

// var findAge = ages.findIndex(checkAdult);
// document.write(findAge + "<br><br>")

// function checkAdult(age) {
//   return age >= 18;
// }

/**
 * Filter() Method
 * -- filter() method creates an array filled with all array elements that pass a test
 */

// document.write(ages + "<br><br>")

// var findAge = ages.filter((age) => age >= 18);
// document.write(findAge + "<br><br>")

// function checkAdult(age) {
//   return age >= 18;
// }

/**
 * ForEach() Method
 */

// Type - string array
// var names = ["Ankit", "Gorakh", "Javascript", "React"];

// Type - Object of array



// console.log('"FOREACH START"')
// names.forEach((name, index) => {
//   console.log('index ==>', index);
//   console.log("name ==>", name);


//   name.designations.forEach((designation, childindex) => {
//     console.log("childindex", childindex);
//     console.log("designation", designation)
//   })

//   console.log("----")
// })
// console.log('"FOREACH ENDS"')

/**
 * Map() Method
 */
var names = [
  {
    fName: "Ankit",
    lName: "Varia",
    designations: ["Sr. Software Developer", "Manager", "CEO"]
  },
  {
    fName: "Gorakh",
    lName: "Kharat",
    designations: ["Super Sr. Software Developer", "Super Sr. Manager", "Supeer Sr. CEO"]
  },
  {
    fName: "Javascript",
    lName: "React",
    designations: ["Extra Super. Software Developer", "Extra Super Manager", "Extra Super CEO"]
  }
]

console.log('"MAP START"')
names.map((name, index) => {


  // console.log('index ==>', index);
  // console.log("name ==>", name.fName);
  console.log(`Hey your name is ${name.fName} ${name.lName} & your designations are ${name.designations}`)


  // name.designations.map((designation, childindex) => {
  //   console.log("childindex", childindex);
  //   console.log("designation", designation)
  // })

  console.log("----")
})
console.log('"MAP END"')