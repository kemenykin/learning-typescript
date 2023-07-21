class Department {
    // private name: string;
    // private id: string; 
    private employees: string[] = [];

    constructor(public name: string, private readonly id: string) {
        // this.name = n;
        // this.id = id;
    }
    describe() {
        console.log('Department: ' + this.name + this.id);
    }
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
}

const it = new ITDepartment('d1', ['Max']);

class AccountingDepartment extends Department {
    private lastReport: string;
    
    get mostRecentReport() {
        if (this.lastReport) {
            return this.lastReport;
        }
        throw new Error('No report found.');
    }

    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
        this.lastReport = reports[0];
    }

    addReports(text: string) {
        this.reports.push(text);
        this.lastReport = text;
    }

    printReports() {
        console.log(this.reports);
    }
}

const accounting = new AccountingDepartment('d2', []);

console.log(accounting);