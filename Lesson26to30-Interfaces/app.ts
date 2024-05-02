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
  name: string;
  greet(phrase: string): void;
}

class Person2 implements Greetable {
  name: string;
  private _age: number = 30;
  constructor(name: string) {
    this.name = name;
  }
  greet(name: string) {
    console.log(name);
  }
}

let user2 = new Person2("Berk");
