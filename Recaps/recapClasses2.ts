abstract class Animal {
  private _type: string;
  private _name: string;
  private _age: number;
  private _weight: number;
  constructor(type: string, name: string, age: number, weight: number) {
    this._type = type;
    this._name = name;
    this._age = age;
    this._weight = weight;
  }
  abstract makeSound(): string;
  protected eyeColor() {
    return "Brown";
  }
}

class Dog extends Animal {
  private _breed: string;
  constructor(type: string, name: string, age: number, weight: number, breed: string) {
    super(type, name, age, weight);
    this._breed = breed;
  }
  makeSound(): string {
    return "HOWL";
  }
  eyeColor(): string {
    return "Black";
  }
  get breed() {
    return this._breed;
  }
  set breed(value: string) {
    this._breed = value;
  }
}

class Cat extends Animal {
  private _breed: string;
  private static _instance: Cat;
  private constructor(type: string, name: string, age: number, weight: number, breed: string) {
    super(type, name, age, weight);
    this._breed = breed;
  }
  static createInstance(type: string, name: string, age: number, weight: number, breed: string) {
    if (Cat._instance) {
      return Cat._instance;
    } else {
      this._instance = new Cat("Cat", "Cat", 0, 0, "Cat");
      return this._instance;
    }
  }
  makeSound(): string {
    return "MEOW";
  }
  eyeColor(): string {
    return "Blue";
  }
  set breed(value: string) {
    this._breed = value;
  }
  get breed() {
    return this._breed;
  }
}

const dog = new Dog("Dog", "Bingo", 1, 10, "Pitbull");
const cat = Cat.createInstance("Cat", "Katter", 1, 8, "British");
console.log(dog);
console.log(cat);
console.log(dog.eyeColor());
console.log(dog.breed);
console.log(dog.makeSound());
