class Department {
  private name: string;
  protected _employees: string[] = [];
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

class Accounting extends Department {
  constructor(id: string, private _reports: string[]) {
    super(id);
  }
  addEmployee(name: string) {
    if (name === "Max") {
      return;
    }
    this._employees.push(name);
  }

  setReport(text: string) {
    this._reports.push(text);
  }
  getReports() {
    console.log(this._reports);
  }
}

class ITDepartment extends Department {
  admins: string[];
  constructor(id: string, admins: string[]) {
    super(id);
    this.admins = admins;
  }
}

class Home {
  constructor(public readonly name: string, public address: string) {}
  describe() {
    console.log("Home name: " + this.name + " address: " + this.address);
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

let home = new Home("home", "istanbul");
home.describe();

const it = new ITDepartment("IT", ["Berk"]);
const accounting2 = new Accounting("Accounting", []);
accounting2.setReport("Something went wrong");
accounting2.getReports();
accounting2.addEmployee("Cem");
accounting2.addEmployee("Max");
