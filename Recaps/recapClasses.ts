//Cinsiyet için type yapısı
type Male = 1;
type Female = 0;
type Sex = Male | Female;

//Enum değişkeni ev büyüklüğü için
enum Size {
  LARGE,
  MIDDLE,
  NARROW,
}

//Constructor ve ek proplarla birlikte person
class Person {
  private _name: string;
  private _surname: string;
  private _age: number;
  private _sex: Sex;
  constructor(name: string, surname: string, age: number, sex: Sex) {
    this._age = age;
    this._name = name;
    this._surname = surname;
    this._sex = sex;
  }
  public PersonName(this: Person) {
    return this._name;
  }
  public setNameValue(value: string) {
    this._name = value;
  }

  public getNameValue(): string {
    return this._name;
  }

  public setSurnameValue(value: string) {
    this._surname = value;
  }

  public getSurnameValue(): string {
    return this._surname;
  }

  public setAgeValue(value: number) {
    this._age = value;
  }

  public getAgeValue(): number {
    return this._age;
  }

  public setSexValue(value: Sex) {
    this._sex = value;
  }

  public getSexValue(): Sex {
    return this._sex;
  }
}

const person1 = new Person("Berk", "Akın", 24, 1);
console.log(person1);

person1.setNameValue("Berkcan");
person1.setSurnameValue("Akıncan");
person1.setAgeValue(30);
person1.setSexValue(0);

console.log(person1.getNameValue());
console.log(person1.getSurnameValue());
console.log(person1.getAgeValue());
console.log(person1.getSexValue());

//Class Home with only Constructor
class Home {
  constructor(
    private _location: string,
    private _address: string,
    private _postalCode: number,
    private _size: Size
  ) {}
  setLocation(value: string) {
    this._location = value;
  }
  getLocation(): string {
    return this._location;
  }
  setAddress(value: string) {
    this._address = value;
  }
  getAddress(): string {
    return this._address;
  }
  setPostalCode(value: number) {
    this._postalCode = value;
  }
  getPostalCode(): number {
    return this._postalCode;
  }
  setSize(value: Size) {
    this._size = value;
  }
  getSize(): Size {
    return this._size;
  }
}

const home1 = new Home("Kocaeli", "Körfez/Yarımca", 41780, Size.NARROW);
console.log(home1.getAddress());
console.log(home1.getLocation());
console.log(home1.getPostalCode());
console.log(home1.getSize());
home1.setAddress("İzmit");
home1.setLocation("Kartepe");
home1.setPostalCode(41000);
home1.setSize(Size.LARGE);

console.log(home1);
