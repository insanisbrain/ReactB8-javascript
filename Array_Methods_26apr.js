const developerPositions = ["React Developer", "iOS Developer", "Java Developer", "Php Developer", "Backend Developer"];

/**
 * Remove a single item by its index
 */

// const start = developerPositions.indexOf("Java Developer");
// const deleteCount = 2;
// developerPositions.splice(start, deleteCount);
// console.log("developerPositions -->", developerPositions);

/**
 * Multiple add at specified index
 */

// developerPositions.splice(2, 0, "NodeJS Developer");
// console.log("developerPositions ->", developerPositions);


/**
 * Replace Multiple items in array
 */

// const start = -2;
// const deleteCount = 2;
// const removeItems = developerPositions.splice(start, deleteCount, "NodeJS Developer", "Mern Developer");
// console.log("removeItems -->", removeItems);
// console.log("developerPositions -->", developerPositions);

/**
 * Iterate Array
 * - for .. of loop
 * - every()
 * - filter()
 * - map()
 * - reduce()
 * - forEach()
 */

// for (let index = 0; index < 3; index++) {
//   const element = developerPositions[index];
//   console.log("element -->", element);
// }

// developerPositions.forEach((element, index) => {
//   if (index < 3) {
//     console.log("index -->", index, "--> developerRole -->", element);
//   }
// })

// for (const developer of developerPositions) {
//   console.log("developer -->", developer);
// }

/**
 * Merge multiple array together - CONCAT
 */

// const extraPositions = ["Node Developer", "Full Stack Developer"];
// const combinedPositions = developerPositions.concat(extraPositions);
// console.log("----------------------------------------------------------------")
// console.log("developerPositions -->", developerPositions);
// console.log("extraPositions -->", extraPositions);
// console.log("combinedPositions -->", combinedPositions);
// console.log("----------------------------------------------------------------")

/**
 * Copy an Array --> [...Array]
 */

// const copyDeveloperPositions = [...developerPositions];
// copyDeveloperPositions.splice(-2, 2, "NodeJS Developer", "Mern Developer")
// console.log("developerPositions -->", developerPositions);
// console.log("copyDeveloperPositions -->", copyDeveloperPositions)
// console.log("copyExtraPositions -->", copyDeveloperPositions);

/**
 * Copy an Array with DeepCopy -->
 */

// const DeveloperDeepCopy = JSON.parse(JSON.stringify(developerPositions));
// console.log("DeveloperDeepCopy -->", DeveloperDeepCopy)