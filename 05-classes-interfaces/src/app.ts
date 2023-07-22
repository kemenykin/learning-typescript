abstract class Department {
    // private name: string;
    // private id: string; 
    private employees: string[] = [];

    constructor(public name: string, private readonly id: string) {
        // this.name = n;
        // this.id = id;
    }
    abstract describe(this: Department): void;

    addEmployee(employee: string) {
        this.employees.push(employee);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor( id: string, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }
    describe() {
        console.log();
    }
}

const it = new ITDepartment('d1', ['Max']);

class AccountingDepartment extends Department {
    private lastReport: string;
    private static instance: AccountingDepartment;
    
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    private constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    static getInstance() {
        if (this.instance) {
            return this.instance;
        }
        this.instance = new AccountingDepartment('d1', []);
        return this.instance;
    }

    describe() {
        console.log('hello')
    }

    addReports(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

// const accounting = new AccountingDepartment('d2', []);
// console.log(accounting);
const accounting = AccountingDepartment.getInstance();
console.log(accounting);