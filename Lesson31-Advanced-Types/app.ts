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
