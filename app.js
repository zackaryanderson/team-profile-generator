//call required packages
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer.js");
const Employee = require("./lib/Employee");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const generateHTML = require("./src/generateHTML");

//start an array to store info
const teamInfo = [];
let teamName = '';

//ask the user to answer the questions
promptUser = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'action',
            message: 'What is the name of your team? (Required)',
            valdate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('Please enter a team name');
                    return false;
                }
            }
        }
    ])
        .then(({ action }) => {
            teamNameAlmost = action.split(': ');
            teamName = teamNameAlmost[0];
            addMember();
        })
}

addMember = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberName',
            message: 'Would you like to enter the information for a(n)...',
            choices: ['Engineer', 'Intern', 'Manager', 'Other', "...I'm done entering team members"]
        },
    ])
        .then(({ memberName }) => {
            if (memberName === 'Engineer') {
                //ask for information about engineer
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is the Engineer's name?"
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: "What is the Engineer's id?"
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What is the Engineer's email?"
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: "What is the Engineer's GitHub?"
                    }
                ])
                    .then(employeeInfo => {
                        const { name, id, email, github } = employeeInfo;
                        const teammate = new Engineer(name, id, email, github);
                        teamInfo.push(teammate);
                        addMember();
                    })
            }
            else if (memberName === 'Other') {
                //ask for information about employee
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is the Employee's name?"
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: "What is the Employee's id?"
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What is the Employees email?"
                    },
                ])
                    .then(employeeInfo => {
                        const { name, id, email } = employeeInfo;
                        const teammate = new Employee(name, id, email);
                        teamInfo.push(teammate);
                        addMember();
                    })
            }
            else if (memberName === 'Manager') {
                //ask for information about employee
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is the Manager's name?"
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: "What is the Manager's id?"
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What is the Manager's email?"
                    },
                    {
                        type: 'input',
                        name: 'officeNumber',
                        message: "What is the Manager's office number?"
                    },
                ])
                    .then(employeeInfo => {
                        const { name, id, email, officeNumber } = employeeInfo;
                        const teammate = new Manager(name, id, email, officeNumber);
                        teamInfo.push(teammate);
                        addMember();
                    })
            }
            else if (memberName === 'Intern') {
                //ask for information about employee
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "What is the Intern's name?"
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: "What is the Intern's id?"
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "What is the Intern's email?"
                    },
                    {
                        type: 'input',
                        name: 'school',
                        message: "Where does the Intern go to school?"
                    },
                ])
                    .then(employeeInfo => {
                        const { name, id, email, school } = employeeInfo;
                        const teammate = new Intern(name, id, email, school);
                        teamInfo.push(teammate);
                        addMember();
                    })
            }
            else {
                createHTML(teamInfo)
            }
        });
};

createHTML = (teamInfo)  => {
    console.log("<------ Creating Team File ------>");
    generateHTML(teamInfo,teamName);
};

promptUser();