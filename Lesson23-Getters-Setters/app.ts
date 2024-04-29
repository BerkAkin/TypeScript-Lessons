//BASE CLASS
class Department {
  protected _employees: string[];
  private _name: string;
  private _id: string;
  constructor(public name: string, employees: string[], id: string) {
    this._employees = employees;
    this._name = name;
    this._id = id;
  }
  addEmployee(name: string) {
    this._employees.push(name);
  }
  showEmployees() {
    console.log(this._employees);
  }
}

//IT CLASS
class IT extends Department {
  constructor(id: string, name: string) {
    super("IT", [name], id);
  }
  addEmployee(name: string): void {
    if (this.name === "") {
      console.log("You need to add a name");
    } else {
      this._employees.push(name);
    }
  }
}

//ACCOUNTING CLASS
class AccountingDepartment extends Department {
  private _lastReport: string;

  get mostRecentReport() {
    if (this._lastReport) {
      return this._lastReport;
    }
    throw new Error("No report found");
  }

  set mostRecentReport(value: string) {
    if (!value) {
      throw new Error("Please pass in a valid value");
    }
    this.addReport(value);
  }

  constructor(id: string, private _reports: string[]) {
    super("Accounting", [], id);
    this._lastReport = _reports[0];
  }
  addReport(text: string) {
    this._reports.push(text);
    this._lastReport = text;
  }
}

const accounting = new AccountingDepartment("d1", []);
accounting.mostRecentReport = "This is the first report";
console.log(accounting.mostRecentReport);
console.log(accounting);
