const inquirer = require('inquirer');
const { writeFile } = require('./utils/generate-page.js');
const teamArray = [];
const Manager = require('./lib/Manager');
const Intern = require('./lib/Intern');
const Engineer = require('./lib/Engineer');

teamQuestions = function() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Let's start with adding a manager to the system. Please enter the manager's name:",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter your managers name!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's id number",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter the id number!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email:",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter the email!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number:",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter the office number!');
                    return false
                }
            }
        }
    ])
    .then(responseData => {
        teamArray.push(new Manager(responseData.name, responseData.id, responseData.email, responseData.officeNumber));
        addMore();
    })
}

managerPrompt = function() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'manager-name',
            message: "Please enter the manager's name:",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter your managers name!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the manager's id number",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter the id number!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the manager's email:",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter the email!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'officeNumber',
            message: "Please enter the manager's office number:",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter the office number!');
                    return false
                }
            }
        }
    ])
    .then(responseData => {
        teamArray.push(new Manager(responseData.name, responseData.id, responseData.email, responseData.officeNumber));
        addMore();
    })
}

engineerPrompt = function() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the engineer's name:",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter your engineers name!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the engineer's id number",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter the id number!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the engineer's email:",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter the email!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'github',
            message: "Please enter the engineer's github profile name:",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter the github link!');
                    return false
                }
            }
        }
    ])
    .then(responseData => {
        teamArray.push(new Engineer(responseData.name, responseData.id, responseData.email, responseData.github));
        addMore();
    })
}

internPrompt = function() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Please enter the intern's name:",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter your interns name!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'id',
            message: "Please enter the intern's id number",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter the id number!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'email',
            message: "Please enter the intern's email:",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter the email!');
                    return false
                }
            }
        },
        {
            type: 'input',
            name: 'school',
            message: "Please enter the intern's school:",
            validate: input => {
                if (input) {
                    return true;
                } else {
                    console.log('Please enter the school name!');
                    return false
                }
            }
        }
    ])
    .then(responseData => {
        teamArray.push(new Intern(responseData.name, responseData.id, responseData.email, responseData.school));
        addMore();
    })
}

addMore = function() {
    inquirer.prompt([
        {
            type: 'list',
            name: 'add',
            message: 'Would you like to add more employees?',
            choices: ['Yes', 'No']
        }
    ])
    .then(({ add }) => {
        if (add === 'Yes') {
            inquirer.prompt([
                {
                    type: 'list',
                    name: 'employeeType',
                    message: 'What type of employee do you want to add next?',
                    choices: ['Manager', 'Engineer', 'Intern']
                }
            ])
                .then(({ employeeType }) => {
                    if (employeeType === 'Manager') {
                        return managerPrompt();
                    } else if (employeeType === 'Engineer') {
                        return engineerPrompt();
                    } else {
                        return internPrompt();
                    }
                })
        } else {
            generateHtml(teamArray);
            console.log('generating html...')
        }
    })
    
}

generateHtml = function(data) {
    writeFile(data)
}

teamQuestions();