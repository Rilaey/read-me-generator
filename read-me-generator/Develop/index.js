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
        name: "table-of-contents",

    },
    {
        name: "installation",
        input: "input",
        message: "Please enter any steps for installation"
    },
    {
        name: "usage",
        type: "input",
        message: "Please enter the usage for this application."
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
        message: "Please list any contributors for this project."
    },
    {
        name: "tests",
        type: "input",
        message: "Are there any tests for your project?"
    },
    {
        name: "questions",
        type: "input",
        message: "What is your github username?"
    },
    {
        name: "questions",
        type: "input",
        message: "What is your email?"
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
    .then(writeToFile(data))
}

// Function call to initialize app
init();
