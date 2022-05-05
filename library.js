// // Varible
let name = "Ankit Varia";

// // Functions
function hello(name) {
  return `Hello my name is ${name}`;
}

function addition(value1, value2) {
  return value1 + value2;
}

// // Class
class Test {
  constructor(name, age, salary) {
    this.name = name;
    this.age = age;
    this.salary = salary;
    console.log(`Hello my name is ${this.name} & my age is ${this.age} & my salary is ${this.salary}`);
  }
}

export { name, hello, Test, addition }
