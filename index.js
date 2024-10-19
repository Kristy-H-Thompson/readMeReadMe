/* 
------------------------------------------------------------------------------------------------------------

    IMPORTS NEEDED FOR THIS PROJECT
    // TODO: Include packages needed for this application - COMPLETE

------------------------------------------------------------------------------------------------------------ 
*/

// Inquirer is a npm package with a collection of common interactive command line user interfaces.
import inquirer from 'inquirer';

// A Node.js built-in module, designed for file system operations on a server. 
import fs from 'fs';

// Importing in another javascript file in this project so that this file can run
import { generateMarkdown } from './utils/generateMarkdown.js';





/* 
------------------------------------------------------------------------------------------------------------

    QUESTIONS ARRAY
    // TODO: Create an array of questions for user input - COMPLETE

------------------------------------------------------------------------------------------------------------ 
*/

const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation for building this project?'
    },
    {
        type: 'input',
        name: 'whybuild',
        message: 'Why did you build this project?'
    },
    {
        type: 'input',
        name: 'projectproblem',
        message: 'What problem does it solve?'
    },
    {
        type: 'input',
        name: 'learn',
        message: 'What did you learn?'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'Provide usage information:'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project:',
        choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'ISC', 'None']
    },
    {
        type: 'input',
        name: 'contributing',
        message: 'Provide contribution guidelines:'
    },
    {
        type: 'input',
        name: 'tests',
        message: 'Provide test instructions:'
    },
    {
        type: 'input',
        name: 'collaborators',
        message: 'Who collaborated with you on this project?'
    },
    {
        type: 'input',
        name: 'thirdparty',
        message: 'If you used any third-party assets that require attribution, list the creators with links to their primary web presence in this section.'
    },
    {
        type: 'input',
        name: 'tutorials',
        message: 'If you followed tutorials, include links to those here as well'
    },
    {
        type: 'input',
        name: 'features',
        message: 'If your project has a lot of features, list them here'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?'
    }
];




/* 
------------------------------------------------------------------------------------------------------------

    WRITE TO FILE FUNCTION - creates the readme file
    // TODO: Create a function to write README file - COMPLETE

------------------------------------------------------------------------------------------------------------ 
*/

// fileName: the name of the file you would like to create
// data: the content you want to display in the readme file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => {
        if (err) throw err; 
        console.log('README.md has been generated!'); // Let the user know the file has been created
    });
}


/* 
------------------------------------------------------------------------------------------------------------

    INIT FUNCTION 
    // TODO: Create a function to initialize app - COMPLETE

------------------------------------------------------------------------------------------------------------ 
*/
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readmeContent = generateMarkdown(answers); // generate the content based on answers gathered in the command line
        writeToFile('README.md', readmeContent); // call writetoFile to put that content into a new markdown file called README.md
    });
}

// Function call to initialize app
init();
