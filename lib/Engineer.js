class Engineer {
    constructor(name, id, email, github) {
        this.name = name;
        this.job = 'Engineer';
        this.id = id;
        this.email = email;
        this.github = github;
    }
    email() {
        return this.email;
    }
    github() {
        return this.github;
    }
    id() {
        return this.id;
    }
}