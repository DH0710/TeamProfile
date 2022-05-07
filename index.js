const inquirer = require('inquirer');
const jest = require("jest")
const fs = require('fs');

const questions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your name?',
            validate: nameInput => {
                if (nameInput) {
                    return true;
                } else {
                    console.log('');
                    return false;
                }
            }
        }
    ]),

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'Github',
        message: 'What is your Github Repo?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your ID?',
    },
    {
        type: 'input',
        name: '',
        message: '?',
    }
}