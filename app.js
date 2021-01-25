//call required packages
const inquirer = require('inquirer');
const fs = require('fs');
const Engineer = require("./lib/Engineer.js");

//start an array to store info
const teamInfo = [];

//ask the user to answer the questions
promptUser = () => {
    inquirer.prompt([
        {
            type: 'input',
            name: 'teamName',
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
    .then(teamName => {
        teamInfo.push(teamName);
        console.log(teamInfo);
        addMember();
    })
}

addMember = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'memberName',
            message: 'Would you like to enter the information for a(n)...',
            choices: ['Engineer', 'Employee', 'Intern', 'Manager',"...I'm done entering employees"]
        },
    ])
        .then(({ memberName }) => {
            if (memberName === 'Engineer') {
                //ask for information about engineer
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: 'What is the Engineers name?'
                    },
                    {
                        type: 'input',
                        name: 'id',
                        message: 'What is the Engineers id?'
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: 'What is the Engineers email?'
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: 'What is the Engineers GitHub?'
                    }
                ])
                .then(engineerInfo => {
                    const {name, id, email, github} = engineerInfo;
                    const teammate = new Engineer(name,id,email,github);
                    teamInfo.push(teammate);
                    console.log(teamInfo);
                })
            };
        });
};

promptUser();