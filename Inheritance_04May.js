/**
 * Example
 */

// class fruits {
//   // properties & methods

//   constructor() {
//     this.fruitName = "Mango";
//     this.fruitColor = "red";
//     this.fruitTaste = "Tangy";
//   }

//   printFruitInfo() {
//     console.log(`Hello this fruitName is ${this.fruitName} & my color is ${this.fruitColor}`)
//   }
// }

// // inheritance syntax
// class vegetables extends fruits {
// }

// class xyz extends fruits {
// }

// class ankit extends fruits {
// }

/**
 * Example 2
 */

class Employee {
  constructor(name, age, salary) {
    this.empName = name;
    this.empAge = age;
    this.empSalary = salary;
    console.log("Hello Employee Constructor");
  }

  printEmployeeInfo() {
    document.write(`<h3>Employee Class </h3>
        Name: ${this.empName} </br>
        Age: ${this.empAge} </br>
        Salary: ${this.empSalary} </br>
    `);
  }
}

class Manager extends Employee {

  constructor(name, age, salary, pa, ta) {
    super(name, age, salary);
    this.petrolAllowance = pa;
    this.telephoneAllowance = ta;
  }

  printManagerInfo() {

    // super.printEmployeeInfo();

    let totalSalary = this.empSalary + this.petrolAllowance + this.telephoneAllowance;

    document.write(`<h3>Manager Class </h3>
        Name: ${this.empName} </br>
        Age: ${this.empAge} </br>
        Salary: ${totalSalary} </br>
    `);
  }

}

let a = new Manager("Ankit Varia", 27, 20000, 1000, 500);

// Self class function call
a.printManagerInfo();

