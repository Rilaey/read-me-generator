// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const generateMarkdownFile = require('./utils/generateMarkdown.js');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = [
    {
        name: "title",
        type: "input",
        message: "What is the title of your project?",
        validate: titleInput => {
            if(titleInput) {
                return true;
            } else {
                console.log("please enter a project title")
                return false;
            }
        }
    },
    {
        name: "description",
        type: "input",
        message: "What is the description of your project?",
        validate: descriptionInput => {
            if(descriptionInput) {
                return true;
            } else {
                console.log("please enter a project description")
                return false;
            }
        }
    },
    {
        name: "installation",
        input: "input",
        message: "Please enter any steps for installation",
        validate: installInput => {
            if(installInput) {
                return true;
            } else {
                console.log("please enter installation steps. if none enter none")
                return false;
            }
        }
    },
    {
        name: "usage",
        type: "input",
        message: "Please enter the usage for this application.",
        validate: usageInput => {
            if(usageInput) {
                return true;
            } else {
                console.log("please enter usage information.")
                return false;
            }
        }
    },
    {
        name: "license",
        type: "list",
        message: "What license does your project use?",
        choices: ['none', 'MIT', 'GPLv2', 'Apache'],
        validate: licenseInput => {
            if(licenseInput) {
                return true;
            } else {
                console.log("please enter a project license")
                return false;
            }
        }
    },
    {
        name: "contributions",
        input: "input",
        message: "Please list any contributors for this project.",
        validate: contributionInput => {
            if(contributionInput) {
                return true;
            } else {
                console.log("please enter any contributers. if none enter none")
                return false;
            }
        }
    },
    {
        name: "tests",
        type: "input",
        message: "Are there any tests for your project?",
        validate: testInput => {
            if(testInput) {
                return true;
            } else {
                console.log("please enter any tests for your project. if none enter none")
                return false;
            }
        }
    },
    {
        name: "github",
        type: "input",
        message: "What is your github username?",
        validate: gitInput => {
            if(gitInput) {
                return true;
            } else {
                console.log("please enter your github. if none enter none")
                return false;
            }
        }
    },
    {
        name: "email",
        type: "input",
        message: "What is your email?",
        validate: emailInput => {
            if(emailInput) {
                return true;
            } else {
                console.log("please enter your email. if none enter none")
                return false;
            }
        }
    },
]

// TODO: Create a function to write README file
function writeToFile(data) {
    fs.writeFile('generatedReadMe.MD', data, (err) => {
        if(err) {
            console.log(err)
        } else {
            console.log('Success!')
        }
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions)
    .then(function(data) {
        console.log(data);
    let fileName = generateMarkdownFile(data);   
    writeToFile(fileName);
    })
}

// Function call to initialize app
init();

// export questions
module.exports = questions