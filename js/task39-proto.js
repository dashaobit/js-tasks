// const parent = {
//     name: "Stacey",
//     surname: "Moore",
//     age: 54,
//     heritage: "Irish",
//   };
  
//   const child = Object.create(parent);
  
//   child.name = "Jason";
//   child.age = 27;

//   console.log(parent.hasOwnProperty("surname"));
//   console.log(parent.hasOwnProperty("heritage"));
//   console.log(child.hasOwnProperty("name"));
//   console.log(child.hasOwnProperty("age"))

//   цепочку прототипов: объект ancestor был прототипом для parent, а тот в свою очередь был прототипом для child.
const ancestor = {
    name: "Paul",
    age: 83,
    surname: "Dawson",
    heritage: "Irish",
  };
  
  const parent = Object.create(ancestor);
  parent.name = "Stacey";
  parent.surname = "Moore";
  parent.age = 54;
  
  const child = Object.create(parent);
  child.name = "Jason";
  child.age = 27;

  console.log(child);
  
  console.log(ancestor.isPrototypeOf("parent"));

  parent.isPrototypeOf("child");
  console.log(parent.isPrototypeOf("child"));

  ancestor.hasOwnProperty("surname");

  console.log(ancestor.surname);
  console.log(parent.surname);
