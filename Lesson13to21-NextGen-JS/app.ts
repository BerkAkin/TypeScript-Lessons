//let and const ES6 (var global scope ve fonksiyon scope haricini bilmez)
const userName = "B";
let age = 24;



//Arrow Functions (this kullanılamaz)
let fon = (a: number) => {
  console.log("fon" + a);
};
fon(1);
const printOutput: (a: number | string) => void = (output) => console.log(output);

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", (event) => console.log(event));
}
