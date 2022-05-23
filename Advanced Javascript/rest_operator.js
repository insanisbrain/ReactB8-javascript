function sum(name, courseName, ...args) {


  // console.log(arguments);
  console.log("Name ==>", name);
  console.log("courseName ==>", courseName);
  console.log("args ==>", args);

  let total = 0;
  for (let index in args) {
    total += args[index]
  }

  document.write(`Hey ${name} in this ${courseName} your score is ${total}`);

}

// sum("Ankit Varia", 20, 30, 40, 50);
sum("Ankit Varia", "Javascript", 20, 30, 40, 50);

