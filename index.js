const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs/promises");

const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");

const render = require("./src/page-template.js");
// const Employee = require("./lib/Employee");
const { writeFile } = require("fs");


// TODO: Write Code to gather information about the development team members, and render the HTML file.

let team = [];

startProgram()
async function startProgram() {

    // team.push(new Manager("KOFI", 1234, "test@test.com", 10000))
    // team.push(new Engineer("YAW", 234, "rest@test.com", "@dash"))
    // team.push(new Intern("YAA", 2345, "Wrest@test.com", "Mayville"))

    // let htmlDoc = render(team)

    // await fs.writeFile(outputPath, htmlDoc);

    questions()




    //setting Questions for Manager

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

                        // this should Push Manager data into team
                        .then((templateData) => {
                            const newManager = new Manager(templateData.name, templateData.id, templateData.email, templateData.officeNumber)
                            team.push(newManager);
                            // then sends the user back to menu
                            questions();
                        });
                }
                if (employeeType === 'Engineer') {

                    // prompt for engineer question 

                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Please enter the engineer's name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the engineer's name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Please enter the engineer's employee id",
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
                            message: "Please enter the engineer's email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct engineer's email!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'github',
                            message: "Please enter the engineer's github username",
                            validate: githubInput => {
                                if (githubInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct engineer's github username!");
                                    return false;
                                }
                            }
                        }

                        // this should Push Engineer data into team
                    ]).then(templateData => {
                        const newEngineer = new Engineer(templateData.name, templateData.id, templateData.email, templateData.github);
                        team.push(newEngineer);
                        // then sends the user back to menu
                        questions();
                    });
                }


                if (employeeType === 'Intern') {
                
            // prompt for engineer question 
                    inquirer.prompt([
                        {
                            type: 'input',
                            name: 'name',
                            message: "Please enter the intern's name",
                            validate: nameInput => {
                                if (nameInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the intern's name!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'number',
                            name: 'id',
                            message: "Please enter the intern's employee id",
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
                            message: "Please enter the intern's email",
                            validate: emailInput => {
                                if (emailInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct intern's email!");
                                    return false;
                                }
                            }
                        },
                        {
                            type: 'input',
                            name: 'school',
                            message: "Please enter the intern's school name",
                            validate: schoolInput => {
                                if (schoolInput) {
                                    return true;
                                } else {
                                    console.log("Please enter the correct intern school's name!");
                                    return false;
                                }
                            }
                        }

                        // this should Push Intern data into team
                    ]).then(templateData => {
                        const newIntern = new Intern(templateData.name, templateData.id, templateData.email, templateData.school);
                        team.push(newIntern);
                        // then Sends the user back to menu
                        questions();
                    });


                }


                if (employeeType === 'I finished entering my team info') {

                    let htmlDoc = render(team)
                    fs.writeFile(outputPath, htmlDoc);




                }



            })
    }

}




