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

//DECORATOR FACTORIES
function Factory(logString: string) {
  return function (constructor: Function) {
    console.log(logString);
    console.log(constructor);
  };
}

@Factory("Logging-Animal")
class Animal {
  constructor() {
    console.log("Animal Created");
  }
}
