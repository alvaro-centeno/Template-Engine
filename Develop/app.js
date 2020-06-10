const Employee = require("./lib/Employee")
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./lib/htmlRenderer");

const emp = [];
const man = [];
const eng = [];
const int = [];

let id = 0;

newHire();

function newHire() {
    inquirer.prompt([
        {
            type: 'text',
            name: 'username',
            message: 'What is your username?'
        },
        {
            type: 'password',
            name: 'value',
            message: 'what is your password?'
        },
        {
            type: 'list',
            name: 'role',
            message: "What is the new hire's role?",
            choices: ['Manager', 'Engineer', 'Intern'],
        },
        {
            type: 'input',
            name: 'name',
            messgae: 'New Hire Name:'
        },
        {
            type: 'input',
            name: 'email',
            message: 'New Hire Email:'
        },
        {
            type: 'input',
            name: 'office',
            message: 'New Hire Office Number:',
            when: (answers) => answers.role === 'Manager'
        },
        {
            type: 'input',
            name: 'github',
            message: 'New Hire Github Username:',
            when: (answers) => answers.role === 'Engineer'
        },
        {
            type: 'input',
            name: 'school',
            message: 'New Hire University:',
            when: (answers) => answers.role === 'Intern'
        }

    ]).then(res => {
        if (res.type === 'Manager') {
            man.push(new Manager(es.name, id, res.email, res.office));
            id++
        } else if (res.type === 'Engineer') {
            eng.push(new Engineer(res.name, id, res.email, res.github));
            id++
        } else if (res.type === 'Intern') {
            int.push(new Intern(res.name, id, res.email, res.school));
            id++
        };

    })
    //     .catch(err => console.log(err);
    // )
}

inquirer.prompt([
    {
        type: 'input',
        name: 'another',
        message: 'Add another new hire?',
        choices: ['Yes', 'No']
    }
]).then(res => {
    if (res.choices === 'Yes') {
        newHire();
    } else {
        console.log('New Hire Complete!');

    }
})



// Write code to use inquirer to gather information about the development team members,
// and to create objects for each team member (using the correct classes as blueprints!)

// After the user has input all employees desired, call the `render` function (required
// above) and pass in an array containing all employee objects; the `render` function will
// generate and return a block of HTML including templated divs for each employee!

// After you have your html, you're now ready to create an HTML file using the HTML
// returned from the `render` function. Now write it to a file named `team.html` in the
// `output` folder. You can use the variable `outputPath` above target this location.
// Hint: you may need to check if the `output` folder exists and create it if it
// does not.

// HINT: each employee type (manager, engineer, or intern) has slightly different
// information; write your code to ask different questions via inquirer depending on
// employee type.

// HINT: make sure to build out your classes first! Remember that your Manager, Engineer,
// and Intern classes should all extend from a class named Employee; see the directions
// for further information. Be sure to test out each class and verify it generates an
// object with the correct structure and methods. This structure will be crucial in order
// for the provided `render` function to work! ```
