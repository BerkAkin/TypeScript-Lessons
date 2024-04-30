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

const abs = new ITDepartment("d1", "IT");
console.log(abs);
abs.describe();
