//INTERSECTION TYPES
type Admin = {
  name: string;
  privileges: string[];
};

type Employee = {
  name: string;
  startDate: Date;
};

//OBJECT ATAMASINDA TAMAMI ALINIR
type ElevatedEmployee = Admin & Employee;
//type ElevatedEmployee = {
//name: string;
//privileges: string[];
//startDate: Date;
//};
const e1: ElevatedEmployee = {
  name: "Max",
  privileges: ["create-server"],
  startDate: new Date(),
};

//UNION TYPE ATAMASINDA ORTAK OLAN ALINIR
type Numeric = number | boolean;
type Combinable = string | number;
type Universal = Numeric & Combinable;

//typeof, instanceof ve 'priv' in emp şeklindeki kontroller type guarding olarak bilinir.

//DISCRIMINATED UNIONS

interface Bird {
  type: "bird";
  flyingSpeed: number;
}

interface Horse {
  type: "horse";
  runningSpeed: number;
}

type Animal = Bird | Horse;

function moveAnimal(animal: Animal) {
  let speed;
  switch (animal.type) {
    case "bird":
      speed = animal.flyingSpeed;
      break;
    case "horse":
      speed = animal.runningSpeed;
      break;
  }
  console.log("Moving with speed: " + speed);
}

moveAnimal({ type: "bird", flyingSpeed: 10 });
moveAnimal({ type: "horse", runningSpeed: 80 });
