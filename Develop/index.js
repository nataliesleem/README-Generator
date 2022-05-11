// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const path = require("path");
const generateMarkdown = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "questions",
        message: "What is your github username?"
    },
    {
        type: "input",
        name: "contact",
        message: "Please provide instructions on how to be reached for additional questions with your email address."
    },
    {
        type: "input",
        name: "title",
        message: "What is your project's name?"
    },
    {
        type: "list",
        name: "license",
        message: "What kind of license should your project have?",
        choices: ["MIT", "Apache", "GPL", "BSD", "None"]
    },
    {
        type: "input",
        name: "description",
        message: "How would you describe your project?"
    },
    {
        type: "input",
        name: "installation",
        message:"What are the steps required to install your project?"
    },
    {
        type: "input",
        name: "usage",
        message: "Please provide instructions and examples for use."
    },

    {
        type: "input",
        name:"contributing",
        message: "Are there any contributors? If so, please add their Github usernames."
    },
    {   type: "input",
        name: "tests",
        message: "Provide examples on how to run tests for your application."

    },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(path.join(process.cwd(), fileName), data)
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        console.log(answers);
        writeToFile("ReadMe.md", generateMarkdown(answers));

    })
}

// Function call to initialize app
init();
