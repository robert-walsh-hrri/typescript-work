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

  let suits = ["hearts", "spades", "clubs", "diamonds"];

  function pickCard(x: { suit: string; card: number }[]): number;
  function pickCard(x: number): { suit: string; card: number };
  function pickCard(x: any): any {
    // Check to see if we're working with an object/array
    // if so, they gave us the deck and we'll pick the card
    if (typeof x == "object") {
      let pickedCard = Math.floor(Math.random() * x.length);
      return pickedCard;
    }
    // Otherwise just let them pick the card
    else if (typeof x == "number") {
      let pickedSuit = Math.floor(x / 13);
      return { suit: suits[pickedSuit], card: x % 13 };
    }
  }
  
  let myDeck = [
    { suit: "diamonds", card: 2 },
    { suit: "spades", card: 10 },
    { suit: "hearts", card: 4 },
  ];
  
  let pickedCard1 = myDeck[pickCard(myDeck)];
  alert("card: " + pickedCard1.card + " of " + pickedCard1.suit);
  
  let pickedCard2 = pickCard(15);
  alert("card: " + pickedCard2.card + " of " + pickedCard2.suit);

  class Animal {
    move(distanceInMeters: number = 0) {
      console.log(`Animal moved ${distanceInMeters}m.`);
    }
  }
  
  class Dog extends Animal {
    bark() {
      console.log("Woof! Woof!");
    }
  }
  
  const dog = new Dog();
  dog.bark();
  dog.move(10);
  dog.bark();