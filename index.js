const fs = require('fs');
const inquirer = require('inquirer');
const markdownGenerator = require('./assets/markdownGenerator');

// create an array of questions that will be propmpted to the user
const userQuestions = [
    // title of project
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project?',
    },

    // description of project
    {
        type: 'input',
        name: 'description',
        message: 'How would you describe your project?',
    },

    // technologies used
    {
        type: 'checkbox',
        name: 'technologies',
        message: 'What technologies did you use?',
        choices: ['HTML', 'CSS', 'JavaScript', 'JQuery', 'NodeJS'],
    },

    // installation process
    {
        type: 'input',
        name: 'installation',
        message: 'How would you install your project?',
    },

    // instructions
    {
        type: 'input',
        name: 'instructions',
        message: 'How do you use your project?',
    },

    // gif
    {
        type: 'input',
        name: 'gif',
        message: 'What is the URL or relative path for your example?',
    },

    // usage
    {
        type: 'input',
        name: 'usage',
        message: 'What would your project be used for?',
    },

    // issues
    {
        type: 'input',
        name: 'issues',
        message: 'How would you report any issues?',
    },

    // contributions
    {
        type: 'input',
        name: 'contributions',
        message: 'Are there any contributing parties? OR, how would you want people to contribute?',
    },

    // test
    {
        type: 'input',
        name: 'test',
        message: 'What tests instructions do you want to provide?',
    },

    // license
    {
        type: 'list',
        name: 'license',
        message: 'Which license would you like to use?',
        choices: ['MIT', 'GPL-2.0', 'Apache-2.0', 'GPL-3.0', 'BSD-3-clause', 'Unlicense', 'LGPL-3.0', 'AGPL-3.0', 'MPL-2.0', 'BSL-1.0'],
    },

    // gitHub
    {
        type: 'input',
        name: 'github',
        message: 'What is the username to your GitHub account?',
    },

    // repository name
    {
        type: 'input',
        name: 'repoName',
        message: 'What is your project repository name?',
    },

    // email
    {
        type: 'input',
        name: 'email',
        message: 'What is you email address?',
    },
]

    
function init() {
    inquirer.prompt(userQuestions).then(function (data) {
        const fileName = "README.md";

        fs.writeFile(fileName, markdownGenerator(data), (err) => {
            if (err) {
                return console.log(err);
            }

            console.log('Successfully created README.md!');
        });
    });
}

init();
