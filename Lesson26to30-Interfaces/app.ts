//INTERFACES
interface Person {
  name: string;
  age: number;
  speak(text: string): void;
}
//INTERFACE ÇAĞIRIMI VE OBJE OLUŞTURMA
let user1: Person;
user1 = {
  name: "Berk",
  age: 24,
  speak(name: string) {
    console.log(name + " " + this.name);
  },
};
//INTERFACEDEN TÜRETİLMİŞ NESNENİN FONKSİYON KULLANIMI
user1.speak("merhaba");

//INTERFACELERİN SINIFLARLA BİRLİKTE KULLANIMI

interface Greetable {
  greet(phrase: string): void;
}

//EXTENDING INTERFACES
interface Named extends Greetable {
  readonly name: string;

  //OPTIONAL PROPERTIES AND PARAMETERS
  outputName?: string;
  outputFunc?: () => {};
}

class Person2 implements Named {
  name: string;
  age: number = 30;
  constructor(name: string) {
    this.name = name;
  }
  greet(name: string) {
    console.log(name);
  }
}

let user2: Named;
user2 = new Person2("Berk");

//READONLY PROP DEĞİŞTİRİLEMEZ INTERFACE ÜZERİNDE
user2.name = "asd";

//INTERFACES AS FUNCTION TYPE
interface AddFn {
  (a: number, b: number): number;
}

let add: AddFn;
add = (n1: number, n2: number) => {
  return n1 + n2;
};

add(3, 4);
