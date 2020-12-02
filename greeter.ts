class Student {
    fullName: string;
    constructor (
        public firstName: string,
        public middleInitial: string,
        public lastName: string
    ) {
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = new Student("Jane", "M", "User");

document.body.textContent = greeter(user);

interface LabeledValue {
    label: string;
  }
  
  function printLabel(labeledObj: LabeledValue) {
    console.log(labeledObj.label);
  }
  
  let myObj = { size: 10, label: "Size 10 Object" };
  printLabel(myObj);

  let someArray = [1, "string", false];

  for (let entry of someArray) {
    console.log(entry);
  };


  // typeScript = javascript superset
  // browsers and node cannot execute typescript
  /* 
    Good work today!

  */