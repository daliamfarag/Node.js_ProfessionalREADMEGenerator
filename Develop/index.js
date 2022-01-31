// TODO: Include packages needed for this application

const inquirer = require ("inquirer");
const fs = require("fs");
const questions = require("./utils/questions");
const generateMarkdown = require("./utils/generateMarkdown");


// TODO: Create a function to write README file
function writeToFile(title, data) {
    const fileName = title.toLowerCase().split(" ").join("-");
    fs.writeFile(`./${fileName}.md`, data, (err) =>
        err
        ? console.log(err)
        : console.log(
            `${fileName}.md has been created in your current directory.`
        )
    );
}

// TODO: Create a function to initialize app
const init = async() => {
    console.log(
        `WELCOME TO APPLICATION README GENERATOR!
    -------------------------------------------------
        Please answer the following questions to generate your README file.
        Basic HTML and markdown responds are supported
        Highlighted fields are required to generate and proceed.`
    );
    const answers = await inquirer.prompt(questions);
    return writeToFile(answers.title, generateMarkdown(answers));
};

// Function call to initialize app
init();
