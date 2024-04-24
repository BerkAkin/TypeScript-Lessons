//let and const ES6 (var global scope ve fonksiyon scope haricini bilmez)
const userName = "B";
let age = 24;

//Arrow Functions (this kullanılamaz)
let fon = (a: number) => {
  console.log("fon" + a);
};
fon(1);
const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

//Default Function Parameters (default parameters en son argümanlar olmalı yoksa hata verir)
const add = (a: number, b: number = 1) => {
  return a + b;
};
add(5);

//Spread Operator (...) objeler referans türü olduğu ve bellek değişip adres değişmediği için push yapılabilir
const hobbies = ["Sports", "Cooking"];
const activeHobbies = ["Hiking"];
activeHobbies.push(...hobbies);

const person = {
  firstName: "B",
  age: 24,
};
//person kopyalanır ama firstName değişir
const copyPerson = { ...person, firstName: "A" };
copyPerson;

//REST OPERATÖRÜ
const add2 = (...numbers: number[]) => {
  let result = 0;
  numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
};

const addedNumbers = add2(22, 3, 4, 5, 6, 7);
