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
