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
    ])

    

}