"use strict";
class Department {
    // constructor(n: string) {
    //   this.deptName = n;
    // }
    constructor(id, deptName) {
        this.id = id;
        this.deptName = deptName;
        // deptName: string;
        // private id: string;
        // private employees: string[] = [];
        this.employees = [];
    }
    // abstract methods don't have method definitions
    // a class to hold an abstract method must be abstract too
    // an abstract class cant be used to instantiate an object
    // describe(this: Department) {
    //   console.log(`Department id(${this.id}) and name(${this.deptName})`);
    // }
    addEmployee(employee) {
        this.employees.push(employee);
    }
    printEmployeeInfo() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}
class ITDepartment extends Department {
    constructor(id, admins) {
        super(id, "IT");
        this.admins = admins;
    }
    describe() {
        console.log(`Department id(${this.id}) and name(${this.deptName})`);
    }
}
class AccountingDepartment extends Department {
    // constructor(id: string, public reports: string[]) {
    constructor(id, reports) {
        super(id, "Accounting");
        this.reports = reports;
        this.lastReport = reports[0];
    }
    describe() {
        console.log(`Department id(${this.id}) and name(${this.deptName})`);
    }
    static get EmployeeCount() {
        return "Total Employees Count is " + this.count;
    }
    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment("d2", []);
    }
    //getter
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error("No Reports Found!");
    }
    //setter
    set mostRecentReport(report) {
        if (!report) {
            throw new Error("Error! Please pass in a valid value");
        }
        this.addReport(report);
    }
    static greet() {
        console.log("Hello Employee");
    }
    static addEmployeeCount() {
        this.count += 1;
    }
    static removeEmployeeCount() {
        this.count -= 1;
    }
    addReport(report) {
        this.reports.push(report);
        this.lastReport = report;
    }
    printReports() {
        console.log(this.reports);
    }
    addEmployee(employee) {
        if (!this.employees.includes(employee)) {
            this.employees.push(employee);
        }
        else {
            console.log(`${employee} is already added`);
        }
    }
}
AccountingDepartment.count = 0;
// const dept = new Department("1", "Accounting");
// dept.describe();
// dept.addEmployee("Muhammad Umair");
// dept.employees.push("Ali");
// dept.printEmployeeInfo();
// const dup = { deptName: "Finance", describe: dept.describe };
// dup.describe();
// const it = new ITDepartment("1", ["Umair"]);
// it.addEmployee("Max");
// console.log(it);
// const acc = new AccountingDepartment("d2", []);
// acc.addEmployee("Ali");
// acc.addReport("Rpt 1");
// acc.printEmployeeInfo();
// acc.addReport("Rpt 2");
// acc.printReports();
// acc.describe();
// acc.mostRecentReport = "Your Last Report";
// console.log(acc.mostRecentReport);
// AccountingDepartment.greet();
AccountingDepartment.addEmployeeCount();
console.log(AccountingDepartment.EmployeeCount);
AccountingDepartment.removeEmployeeCount();
console.log(AccountingDepartment.EmployeeCount);
// if class is to hold only one object
const accounting = AccountingDepartment.getInstance();
// const accounting2 = AccountingDepartment.getInstance();
// console.log(accounting, accounting2);
console.log(accounting);
