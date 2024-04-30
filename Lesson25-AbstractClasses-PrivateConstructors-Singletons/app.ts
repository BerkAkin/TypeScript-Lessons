abstract class Department {
  protected _id: string;
  private _name: string;
  protected abstract _date: string;
  constructor(id: string, name: string) {
    this._id = id;
    this._name = name;
  }
  abstract describe(): void;
}

class ITDepartment extends Department {
  public _date: string = "2024";
  constructor(id: string, name: string) {
    super(id, name);
  }
  describe() {
    console.log(`IT Department - ID: ` + this._id);
  }
}

class AccountingDepartment extends Department {
  private static instance: AccountingDepartment;
  public _date: string = "2024";
  private constructor(id: string, name: string) {
    super(id, name);
  }
  describe() {
    console.log(`Accounting Department - ID: ` + this._id);
  }
  static getInstance() {
    if (AccountingDepartment.instance) {
      return AccountingDepartment.instance;
    } else {
      this.instance = new AccountingDepartment("d1", "Accounting");
      return this.instance;
    }
  }
}

//SINGLETON CLASS
class SingletonClass {
  private _id: string;
  private static instance: SingletonClass;

  private constructor(id: string) {
    this._id = id;
  }
  static createInstance(id: string) {
    if (SingletonClass.instance) {
      return SingletonClass.instance;
    } else {
      this.instance = new SingletonClass(id);
      return this.instance;
    }
  }
}

const accounting = AccountingDepartment.getInstance();
const accounting2 = AccountingDepartment.getInstance();
console.log("1:", accounting, "2", accounting2);
const abs = new ITDepartment("d1", "IT");
console.log(abs);
abs.describe();
