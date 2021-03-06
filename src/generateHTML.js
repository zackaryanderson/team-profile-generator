const Engineer = require("../lib/Engineer");
const Employee = require("../lib/Employee");
const Manager = require("../lib/Manager");
const Intern = require("../lib/Intern");
const fs = require('fs');

let teamHtml = [];

generateHTML = (teamInfo, teamName) => {
    teamHtml = teamInfo.map(teamInfo => {
        if (teamInfo instanceof Manager) {
            return `
            <div class="card team-member m-1 border-dark" style="max-width: 18rem;">
                <h4 class="card-header bg-info text-light">
                    ${teamInfo.name}
                </h4>
                <div class="card-body text-dark">
                    <h5 class="card-title">
                        ${teamInfo.role}
                    </h5>
                </div>
                <ul class="list-group text-dark">
                    <li class="list-group-item">Employee ID: ${teamInfo.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${teamInfo.email}" target="_blank">${teamInfo.email}</a></li>
                    <li class="list-group-item">Office: ${teamInfo.officeNumber}</li>
                </ul>
            </div>
            `;
        }
        else if (teamInfo instanceof Engineer) {
            return `
            <div class="card team-member m-1 border-dark" style="max-width: 18rem;">
                <h4 class="card-header bg-info text-light">
                    ${teamInfo.name}
                </h4>
                <div class="card-body text-dark">
                    <h5 class="card-title">
                        ${teamInfo.role}
                    </h5>
                </div>
                <ul class="list-group text-dark">
                    <li class="list-group-item">Employee ID: ${teamInfo.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${teamInfo.email}" target="_blank">${teamInfo.email}</a></li>
                    <li class="list-group-item">GitHub: <a href="https://github.com/${teamInfo.github}" target="_blank">${teamInfo.github}</a></li>
                </ul>
            </div>
            `;
        }
        else if (teamInfo instanceof Intern) {
            return `
            <div class="card team-member m-1 border-dark" style="max-width: 18rem;">
                <h4 class="card-header bg-info text-light">
                    ${teamInfo.name}
                </h4>
                <div class="card-body text-dark">
                    <h5 class="card-title">
                        ${teamInfo.role}
                    </h5>
                </div>
                <ul class="list-group text-dark">
                    <li class="list-group-item">Employee ID: ${teamInfo.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${teamInfo.email}" target="_blank">${teamInfo.email}</a></li>
                    <li class="list-group-item">School: ${teamInfo.school}</li>
                </ul>
            </div>
            `;
        }
        else if (teamInfo instanceof Employee) {
            return `
            <div class="card team-member m-1 border-dark" style="max-width: 18rem;">
                <h4 class="card-header bg-info text-light">
                    ${teamInfo.name}
                </h4>
                <div class="card-body text-dark">
                    <h5 class="card-title">
                        ${teamInfo.role}
                    </h5>
                </div>
                <ul class="list-group text-dark">
                    <li class="list-group-item">Employee ID: ${teamInfo.id}</li>
                    <li class="list-group-item">Email: <a href="mailto:${teamInfo.email}" target="_blank">${teamInfo.email}</a></li>
                </ul>
            </div>
            `;
        }
    })
    finishHtml(teamHtml, teamName);
};

finishHtml = (teamHtml, teamName) => {
    teamHtmlJoined = teamHtml.join("");
    let finalHTML = `
    <!DOCTYPE html>
    <html lang="en">

    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Info</title>
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
            integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous">
    </head>

    <body>
        <main class="container">
            <div class="row">
                <h1 class="team-name text-center border-bottom pb-2 col-12">${teamName}</h1>
                <div class="card-deck" style="margin: auto;">
                    ${teamHtmlJoined}
                </div>
            </div>
        </main>
        <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
            integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
            crossorigin="anonymous"></script>
        <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
            integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
            crossorigin="anonymous"></script>
        <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
            integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
            crossorigin="anonymous"></script>
    </body>

    </html>
    `;
    fs.writeFile("./dist/index.html", finalHTML, (err) => {
        if (err) {
            console.log(err);
        }
        else {
            console.log('Team File Created Inside Dist Folder.');
        }
    })
};

module.exports = generateHTML, finishHtml;