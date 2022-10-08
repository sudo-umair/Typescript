abstract class Department {
  // deptName: string;
  // private id: string;
  // private employees: string[] = [];
  protected employees: string[] = [];

  // constructor(n: string) {
  //   this.deptName = n;
  // }

  constructor(protected readonly id: string, public deptName: string) {}

  abstract describe(): void;
  // abstract methods don't have method definitions
  // a class to hold an abstract method must be abstract too
  // an abstract class cant be used to instantiate an object

  // describe(this: Department) {
  //   console.log(`Department id(${this.id}) and name(${this.deptName})`);
  // }

  addEmployee(employee: string) {
    this.employees.push(employee);
  }

  printEmployeeInfo() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}

class ITDepartment extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }

  describe(): void {
    console.log(`Department id(${this.id}) and name(${this.deptName})`);
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;
  static count: number = 0;
  private static instance: AccountingDepartment;

  describe(): void {
    console.log(`Department id(${this.id}) and name(${this.deptName})`);
  }

  static get EmployeeCount() {
    return "Total Employees Count is " + this.count;
  }

  // constructor(id: string, public reports: string[]) {
  private constructor(id: string, public reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
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
  set mostRecentReport(report: string) {
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

  addReport(report: string) {
    this.reports.push(report);
    this.lastReport = report;
  }

  printReports() {
    console.log(this.reports);
  }

  addEmployee(employee: string): void {
    if (!this.employees.includes(employee)) {
      this.employees.push(employee);
    } else {
      console.log(`${employee} is already added`);
    }
  }
}

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
