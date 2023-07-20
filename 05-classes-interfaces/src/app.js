"use strict";
class Department {
    constructor(name, id) {
        this.name = name;
        this.id = id;
        this.employees = [];
    }
    describe() {
        console.log('Department: ' + this.name + this.id);
    }
    addEmployee(employee) {
        this.employees.push(employee);
    }
}
const accounting = new Department('Accounting', 'mo45');
console.log(accounting);
//# sourceMappingURL=app.js.map