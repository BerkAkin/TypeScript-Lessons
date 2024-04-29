var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//BASE CLASS
var Department = /** @class */ (function () {
    function Department(name, employees, id) {
        this.name = name;
        this._employees = employees;
        this._name = name;
        this._id = id;
    }
    Department.prototype.addEmployee = function (name) {
        this._employees.push(name);
    };
    Department.prototype.showEmployees = function () {
        console.log(this._employees);
    };
    return Department;
}());
//IT CLASS
var IT = /** @class */ (function (_super) {
    __extends(IT, _super);
    function IT(id, name) {
        return _super.call(this, "IT", [name], id) || this;
    }
    IT.prototype.addEmployee = function (name) {
        if (this.name === "") {
            console.log("You need to add a name");
        }
        else {
            this._employees.push(name);
        }
    };
    return IT;
}(Department));
//ACCOUNTING CLASS
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, _reports) {
        var _this = _super.call(this, "Accounting", [], id) || this;
        _this._reports = _reports;
        _this._lastReport = _reports[0];
        return _this;
    }
    Object.defineProperty(AccountingDepartment.prototype, "mostRecentReport", {
        get: function () {
            if (this._lastReport) {
                return this._lastReport;
            }
            throw new Error("No report found");
        },
        set: function (value) {
            if (!value) {
                throw new Error("Please pass in a valid value");
            }
            this.addReport(value);
        },
        enumerable: false,
        configurable: true
    });
    AccountingDepartment.prototype.addReport = function (text) {
        this._reports.push(text);
        this._lastReport = text;
    };
    return AccountingDepartment;
}(Department));
var accounting = new AccountingDepartment("d1", []);
accounting.mostRecentReport = "This is the first report";
console.log(accounting.mostRecentReport);
console.log(accounting);
