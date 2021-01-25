class Employee {
    constructor(name,id,email){
        this.name = name;
        this.email = email;
        this.role = "Employee";
        this.id = id;
    }
    getEmail() {
        return this.email;
    }
    getName() {
        return this.name;
    }
    getJob() {
        return this.job;
    }
    getId() {
        return this.id;
    }
    getRole() {
        return this.role;
    }
};

module.exports = Employee;