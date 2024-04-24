class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
  describe(this: Department) {
    console.log("Department: " + this.name);
  }
}

let accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();
//nesne kopyalama işlemi
const accountingCopy = { name: "dummy", describe: accounting.describe };
accountingCopy.describe();
