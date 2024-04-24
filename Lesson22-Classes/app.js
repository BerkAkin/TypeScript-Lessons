"use strict";
class Department {
    constructor(n) {
        this.name = n;
    }
    describe() {
        console.log("Department: " + this.name);
    }
}
let accounting = new Department("Accounting");
console.log(accounting);
accounting.describe();
const accountingCopy = { name: "dummy", describe: accounting.describe };
accountingCopy.describe();
