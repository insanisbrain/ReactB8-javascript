/**
 * Closure
 *  
 * Explaination: 
 * closure is action that is inner function can have access to the outer function variables as well 
 * as variables as all the global variables
 */

const xyz = (a) => {
  let b = 10;

  const innerFun = () => {
    return a + b;
  }
  return innerFun();
}

let inner = outerFun(5);
console.log(inner)