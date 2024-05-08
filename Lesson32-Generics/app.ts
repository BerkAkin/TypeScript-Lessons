/* WHAT ARE GENERICS
const names: Array<string> = [];
names[0] = "Berk";

const promise: Promise<number> = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve(10);
  }, 2000);
});

promise.then((data) => {
  data.toFixed();
});

//CREATING OWN GENERIC TYPES

