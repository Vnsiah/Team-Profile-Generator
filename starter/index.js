const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
const Employee = require("./lib/Employee");
const { writeFile } = require("fs");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = [];

startProgram()
async function startProgram() {

    questions()



}

//setting Questions for team

function questions() {
    inquirer.prompt(
        {
            type: 'list',
            name: 'employeeType',
            message: "Which type of employee would you like to add to the team?",
            choices: ['Manager', 'Engineer', 'Intern', 'I finished entering my team info']
        })
        .then(({ employeeType }) => {
            if (employeeType === 'Manager') {
                inquirer.prompt([
                    {
                        type: 'input',
                        name: 'name',
                        message: "Please enter the manager's name",
                        validate: nameInput => {
                            if (nameInput) {
                                return true;
                            } else {
                                console.log("Please enter the manager's name!");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'number',
                        name: 'id',
                        message: "Please enter the manager's employee id",
                        validate: idInput => {
                            if (idInput) {
                                return true;
                            } else {
                                console.log("Please enter a correct answer, the employee id should be a number!");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'input',
                        name: 'email',
                        message: "Please enter the manager's email",
                        validate: emailInput => {
                            if (emailInput) {
                                return true;
                            } else {
                                console.log("Please enter the correct manager's email!");
                                return false;
                            }
                        }
                    },
                    {
                        type: 'number',
                        name: 'officeNumber',
                        message: "Please enter the manager's office number",
                        validate: officeNumberInput => {
                            if (officeNumberInput) {
                                return true;
                            } else {
                                console.log("Please enter a correct answer, the office number should be a number!");
                                return false;
                            }
                        }
                    },
                ])

                    // Pushes Manager data into teamArray
                    .then((templateData) => {
                        const newManager = new Manager(templateData.name, templateData.id, templateData.email, templateData.officeNumber)
                        team.push(newManager);
                        // Sends user back to menu
                        questions();
                    });
            }
            if (employeeType === 'Engineer') {


               // prompt for engineer question 
            }


            if (employeeType === 'Intern') {


                // prompt for intern question 
             }


             if (employeeType === 'I finished entering my team info') {

                let htmlDoc = render(team)
             fs.writeFile(outputPath, htmlDoc);



                // prompt for engineer question 
             }

        

        })
}

