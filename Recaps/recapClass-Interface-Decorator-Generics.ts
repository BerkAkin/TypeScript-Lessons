//CLASS
class Pet {
  private _name: string;
  private _age: number;
  private _color: string;
  constructor(name: string, age: number, color: string) {
    this._name = name;
    this._age = age;
    this._color = color;
  }
  get name() {
    return this._name;
  }
  set name(text: string) {
    this._name = text;
  }
  listProp() {
    console.log(this._name, this._age, this._color);
  }
}

const myPet = new Pet("Bingo", 2, "white");
myPet.name = "Bingo";
console.log(myPet.name);
myPet.listProp();

abstract class Anim {
  constructor(protected name: string, protected age: number) {}
  protected abstract makeSound(): void;
}
class Dog extends Anim {
  makeSound() {
    console.log("Bark");
  }
  super() {
    console.log(this.name);
  }
}

class Cat {
  private static instance: Cat;
  private constructor(private name: string, private age: number) {}
  static getInstance() {
    if (!Cat.instance) {
      Cat.instance = new Cat("Bingo", 2);
    }
    return Cat.instance;
  }
}

//INTERFACE
interface Car {
  name: string;
  year: number;
  summary(): string;
}

const car1: Car = {
  name: "BMW",
  year: 2020,
  summary: () => {
    return "BMW";
  },
};

class BMW implements Car {
  name: string;
  year: number;
  constructor(name: string, year: number) {
    this.name = name;
    this.year = year;
  }
  summary(): string {
    return "AA";
  }
}

//GENERICS
class ArrayOfThings<T extends string | number> {
  private things: T[] = [];
  add(thing: T) {
    this.things.push(thing);
  }
  remove(item: T) {
    this.things.splice(this.things.indexOf(item), 1);
  }
}
const things = new ArrayOfThings<string>();
things.add("Bingo");
things.add("Bingo");
things.remove("Bingo");

function Merger<T, U>(param1: T, param2: U) {
  if (typeof param1 === "string" && typeof param2 === "string") {
    return param1 + param2;
  } else if (typeof param1 === "number" && typeof param2 === "number") {
    return param1 + param2;
  } else {
    return { ...param1, ...param2 };
  }
}
console.log(Merger<{ name: string }, { hobbies: string[] }>({ name: "berk" }, { hobbies: ["2"] }));

//DECORATOR FACTORY
function deco1(name: string) {
  return function (constructor: Function) {
    console.log(name);
    console.log(constructor);
  };
}

@deco1("Alpha")
class Dec {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    console.log("constructor çalıştı");
  }
}

//CLASSIC DECORATOR
function deco2(constructor: Function) {
  console.log("deco2 çalıştı");
}

@deco2
class Deco2Class {
  private name: string;
  private age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
    console.log("Deco2 çalıştı");
  }
}
