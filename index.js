const inquirer = require('inquirer');
const jest = require("jest")
const fs = require('fs');
const generateHTML = require('./utils/generateHTML.js')

const Manager = require('./lib/manager.js')
const Engineer = require('./lib/engineer.js')
const Intern = require('./lib/intern.js')


let isTeamComplete = false

const validateInput = (userInput) => {
    if (userInput === '') {
        return ('Please type in your answer before continuing')
    } else {
        return true;
    }

};

const init = async () => {
    await createManager();
    while (isTeamComplete) {

        const employeeTypeQuestion = [
            {
                type: 'list',
                message: 'Please select the employee type you wish to add',
                name: 'employeeType',
                choices: [
                    {
                        name: 'Engineer',
                        value: 'engineer',
                        short: 'Engineer'
                    },
                    {
                        name: 'Intern',
                        value: 'intern',
                        short: 'Intern',
                    },
                    {
                        name: 'None',
                        value: 'none',
                        short: 'None',
                    },
                ]
            }
        ];



    }
}

const { employeeType } = await inquirer.prompt(employeeTypeQuestion);

if (employeeType === 'none') {
    isTeamComplete = true;

} else {
    if (employeeType === 'engineer') {
        await createEngineer();
    }
    if (employeeType === 'intern') {
        await createIntern();
    }
}

const HTML = generateHTML(employees);
fs.writeFileSync('team-profile.html', HTML, (err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('HTML file created');
    }
});




const managerQuestions = () => {

    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'What is your Manager name?',
            validate: validateInput,
        }
    ]),

    {
        type: 'input',
        name: 'email',
        message: 'What is your email address?',
    },
    {
        type: 'input',
        name: 'Engineer',
        message: 'What is your Github Repo?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is your ID?',
    },
    {
        type: 'input',
        name: 'Intern',
        message: 'What school did you go to?',
    },
    {
        type: 'input',
        name: 'officeNumber',
        message: 'What is your office Number?',
    }
}

const managerAnswers = await inquirer.prompt(managerQuestions);

const manager = new Manager(managerAnswers);

employees.push(manager)


const createEngineer = async () => {

    const engineerQuestions = [
        {
            type: 'input', 
            message: 'PLease enter Engineer name', 
            name: 'name',
            validate: validateInput
        }, 
        {
            type:'input', 
            message:'Please enter engineer email',
            name: 'email', 
            validate: validateInput,
        }, 
        {
            type: 'input',
            message: 'Enter engineer Github profile', 
            name: 'email', 
            validate: validateInput, 
        }, 
        {
            type:'input',
            message:'Enter engineer ID', 
            name: 'ID'
        }, 
    ]
}