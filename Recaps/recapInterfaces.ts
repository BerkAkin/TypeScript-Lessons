interface Animal {
  name: string;
  age: number;
  gender: string;
  readonly type: string;
  eat(): void;
  sleep(): void;
  run?(): void;
}

interface Bird extends Animal {
  fly(): void;
}

interface Fish extends Animal {
  swim(): void;
}

interface addFN {
  (sound: string): void;
}

class Morina implements Fish {
  name: string;
  age: number;
  gender: string;
  type: string = "fish";
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
  swim(): void {
    console.log("swim");
  }
}

class Parrot implements Bird {
  name: string;
  age: number;
  gender: string;
  type: string = "bird";
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
  fly() {
    console.log("fly");
  }
}

class Cheetah implements Animal {
  name: string;
  age: number;
  gender: string;
  type: string = "cheetah";
  constructor(name: string, age: number, gender: string) {
    this.name = name;
    this.age = age;
    this.gender = gender;
  }
  eat() {
    console.log("eat");
  }
  sleep() {
    console.log("sleep");
  }
  run(): void {
    console.log("run");
  }
}

let bird: Bird;
bird = new Parrot("bird", 1, "male");

let fish: Fish;
fish = new Morina("fish", 1, "male");

let animal: Animal;
animal = new Parrot("animal", 1, "male");
//animal.type = "12";

let cheetah: Animal;
cheetah = new Cheetah("cheetah", 1, "male");

let sound: addFN;
sound = (sound: string) => {
  console.log(`this ${sound} is amazing`);
};
sound("Music");
