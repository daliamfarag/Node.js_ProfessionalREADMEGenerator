const licenses = require("./licenses");

// TODO: Create an array of questions for user input
const questions = [
    {
        type: "input",
        name: "title",
        message: "what is the title of the project? (*required)",
        validate: (input) => input !==undefined,
    },
    {
        type: "input",
        name: "description",
        message: "Please enter the project's description here. (*required)",
        validate: (input) => input !== undefined,
    },
    {
        type: "input",
        name: "installation",
        message: "How do to install this application?",
    },
    {
        type: "input",
        name: "usage",
        message: "How to interact with this application?",
    },
    {
        type: "input",
        name: "contributing",
        message: "What are the contribution guidlines for this project?",
    },
    {
        type: "name",
        name: "tests",
        message: "How to run tests for this application?",
    },
    {
        type: "name",
        name: "license",
        message: "Which License works best for this project?",
    },
    {
        type: "input",
        name: "github",
        message: "What is your github username? (*required)",
        validate: (input) => input !== undefined,
    },
    {
        type: "input",
        name: "email",
        message: "What email you can be reached at for any related questions? (*required)",
        validate: (input) => input !== undefined,
    },
];

module.exports = questions

