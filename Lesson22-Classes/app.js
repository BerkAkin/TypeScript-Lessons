"use strict";
class Department {
    constructor(n) {
        this._employees = [];
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
    addEmployee(employee) {
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
    constructor(name, address) {
        this.name = name;
        this.address = address;
    }
    describe() {
        console.log("Home name: " + this.name + " address: " + this.address);
    }
}
let home = new Home("home", "istanbul");
home.describe();
