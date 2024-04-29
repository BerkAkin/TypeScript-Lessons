class Human {
  private static count: number = 0;
  private _race: string;
  private _age: number;
  private _name: string;
  private _gender: string;
  constructor(race: string, age: number, name: string, gender: string) {
    this._race = race;
    this._age = age;
    this._name = name;
    this._gender = gender;
    Human.count += 1;
  }
  set race(race: string) {
    this._race = race;
  }
  get race(): string {
    return this._race;
  }
  set age(age: number) {
    this._age = age;
  }
  get age(): number {
    return this._age;
  }
  set name(name: string) {
    this._name = name;
  }
  get name(): string {
    return this._name;
  }
  set gender(gender: string) {
    this._gender = gender;
  }
  get gender(): string {
    return this._gender;
  }
  public static getCount() {
    return Human.count;
  }
}

const human = new Human("Asian", 20, "John", "Male");
console.log(human);
console.log(Human.getCount());
console.log(human.race);
console.log(human.age);
console.log(human.name);
console.log(human.gender);
human.race = "Indian";
human.age = 25;
human.name = "Jane";
human.gender = "Female";
console.log(human);
console.log(Human.getCount());
console.log(human.race);
console.log(human.age);
console.log(human.name);
console.log(human.gender);
