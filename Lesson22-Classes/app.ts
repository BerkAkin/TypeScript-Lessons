class Department {
  name: string;
  constructor(n: string) {
    this.name = n;
  }
}

let accounting = new Department("Accounting");
console.log(accounting);
