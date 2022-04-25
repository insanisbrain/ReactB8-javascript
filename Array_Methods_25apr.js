const developerPositions = ["React Developer", "iOS Developer", "Java Developer", "Php Developer", "Backend Developer"];

/**
 * Convert Array into String
 */

// console.log(developerPositions.toString());

// Join array value & make array as string
// console.log(developerPositions.join(" ~ ")); 

/**
 * Access an array item by its index
 */

// console.log("Third Developer Position -->", developerPositions[2]);
// console.log("Total Elements -->", developerPositions.length);
// console.log("Last Elements Index -->", developerPositions.length - 1);
// console.log("Last Element --> ", developerPositions[developerPositions.length - 1]);
// console.log("Last Element -->", developerPositions[99]);

/**
 * Find the Index of an Item in an Array
 */

// console.log("sepecific item index -->", developerPositions.indexOf("Java Developer"));

// if (developerPositions.indexOf("Java. Developer") >= 0) {
//   console.log("yes Java Developer Exist");
// } else {
//   console.log("No Java Developer does not Exist");
// }

// console.log("check iOS Developer -->", developerPositions.includes('iOS Developer'));

// if (developerPositions.includes('iOS Developer')) {
//   console.log("yes Java Developer Exist");
// } else {
//   console.log("No Java Developer does not Exist");
// }

/**
 * Append Values into Array - PUSH
 */

// developerPositions.push('UI Developer');
// console.log("developerPositions -->", developerPositions);
// console.log("total elements --> ", developerPositions.length)

/**
 * Remove Last element from Array - POP
 */

// developerPositions.pop();
// console.log("developerPositions -->", developerPositions);

/**
 * Remove multiple items from the end of an array - SPLICE
 */
//  const developerPositions = ["React Developer", "iOS Developer", "Java Developer", "Php Developer", "Backend Developer"];
// console.log("Remain Developers -->", developerPositions.splice(2));
// console.log("Remain Developers -->", developerPositions.splice(-2));

/**
 * Remove first item from an array - SHIFT
 */
// console.log("developers -->", developerPositions.shift());

/**
 * Remove multiple items from the beginning - SPLICE
 */
// const startElement = 0;
// const deleteCount = 2;
// console.log("developerPositions -->", developerPositions.splice(startElement, deleteCount))

/**
 * Add a new first into Array - unShift
 */

// developerPositions.unshift("AJAX DEVELOPER");
// developerPositions.push("Deveops");
// console.log("developers :: PUSH ->", developerPositions.push("Deveops"));
// console.log("developerPositions -->", developerPositions)

// console.log("developers :: UNSHIFT ->", developerPositions.unshift("AJAX DEVELOPER"));
// console.log("developerPositions -->", developerPositions)
