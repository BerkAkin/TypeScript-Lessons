//CLASS DECORATORS
function Logger(constructor: Function) {
  console.log("logging");
  console.log(constructor);
}

@Logger
class Person {
  name = "Berk";
  constructor() {
    console.log("Person Created");
  }
}

const pers = new Person();
console.log(pers);
