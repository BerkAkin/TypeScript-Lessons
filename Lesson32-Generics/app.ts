/* WHAT ARE GENERICS
const names: Array<string> = [];
names[0] = "Berk";

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

promise.then((data) => {""
  data.toFixed();
});
*/

//CREATING OWN GENERIC TYPES

function merge<T, U>(a: T, b: U) {
  return { ...a, ...b };
}
const merged = merge({ name: "Berk" }, { age: 24 });
console.log(merged.age);

//generic types with multiple types
const merged2 = merge<{ name: string; hobbies: string[] }, { age: number }>({ name: "Berk", hobbies: ["Sports"] }, { age: 24 });
const merged3 = merge(1, 2);
const merged4 = merge("1", "2");

//WORKING WITH CONSTRAINTS

function merger<T extends object, U extends object>(a: T, b: U) {
  return Object.assign(a, b);
}

//SOME OTHER GENERIC FUNCTIONS
interface Lengthy {
  length: number;
}

function countAndDescribe<T extends Lengthy>(element: T): [T, string] {
  let descriptionText = "Got no value.";
  if (element.length === 1) {
    descriptionText = "Got 1 element";
  } else if (element.length > 1) {
    descriptionText = "Got " + element.length + " elements";
  }
  return [element, descriptionText];
}

console.log(countAndDescribe("Hi there!"));
console.log(countAndDescribe(["Cooking", "Sports"]));

//KEYOF CONSTRAINTS
function extractAndConvert<T extends object, U extends keyof T>(obj: T, key: U) {
  return "Value: " + obj[key];
}
extractAndConvert({ name: "Berk" }, "name");
