class Department {
  private name: string;
  private _employees: string[] = [];
  constructor(n: string) {
    this.name = n;
  }

  describe(this: Department) {
    console.log("Department: " + this.name);
  }

  addEmployee(employee: string) {
    this._employees.push(employee);
  }

  printEmployeeInformation() {
    console.log(this._employees.length);
    console.log(this._employees);
  }
}

let accounting = new Department("Accounting");
console.log(accounting);
accounting.addEmployee("Max");
accounting.addEmployee("Manu");
accounting.printEmployeeInformation();
accounting.describe();

//nesne kopyalama işlemi
//const accountingCopy = { name: "dummy", describe: accounting.describe };
//accountingCopy.describe();

class Home {
  constructor(public name: string, public address: string) {}
  describe() {
    console.log("Home name: " + this.name + " address: " + this.address);
  }
}

let home = new Home("home", "istanbul");
home.describe();
