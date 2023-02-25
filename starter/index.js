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

    team.push(new Manager("KOFI", 1234, "test@test.com", 10000))
    team.push(new Engineer("YAW", 234, "rest@test.com", "@dash"))
    team.push(new Intern("YAA", 2345, "Wrest@test.com", "Mayville"))

    let htmlDoc = render(team)

    await fs.writeFile(outputPath, htmlDoc);

    // questions()



}

