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
var Department = /** @class */ (function () {
    function Department(id, name) {
        this._id = id;
        this._name = name;
    }
    return Department;
}());
var ITDepartment = /** @class */ (function (_super) {
    __extends(ITDepartment, _super);
    function ITDepartment(id, name) {
        var _this = _super.call(this, id, name) || this;
        _this._date = "2024";
        return _this;
    }
    ITDepartment.prototype.describe = function () {
        console.log("IT Department - ID: " + this._id);
    };
    return ITDepartment;
}(Department));
var AccountingDepartment = /** @class */ (function (_super) {
    __extends(AccountingDepartment, _super);
    function AccountingDepartment(id, name) {
        var _this = _super.call(this, id, name) || this;
        _this._date = "2024";
        return _this;
    }
    AccountingDepartment.prototype.describe = function () {
        console.log("Accounting Department - ID: " + this._id);
    };
    AccountingDepartment.getInstance = function () {
        if (AccountingDepartment.instance) {
            return AccountingDepartment.instance;
        }
        else {
            this.instance = new AccountingDepartment("d1", "Accounting");
            return this.instance;
        }
    };
    return AccountingDepartment;
}(Department));
var accounting = AccountingDepartment.getInstance();
var accounting2 = AccountingDepartment.getInstance();
console.log("1:", accounting, "2", accounting2);
var abs = new ITDepartment("d1", "IT");
console.log(abs);
abs.describe();
