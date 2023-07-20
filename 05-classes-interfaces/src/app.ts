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
    constructor(id: string, private reports: string[]) {
        super(id, 'Accounting');
    }

    addReports(text: string) {
        this.reports.push(text);
    }

    printReports() {
        console.log(this.reports);
    }
}

const accounting = new AccountingDepartment('d2', []);

console.log(accounting);