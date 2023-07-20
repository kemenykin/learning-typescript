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

const accounting = new Department('Accounting', 'mo45');

console.log(accounting);