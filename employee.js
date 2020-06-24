const mysql = require('mysql');
const inquirer = require("inquirer");

let connection = mysql.createConnection({
    host: "localhost",
    port: 9000,
    user: "root",
    password: "#Jsquadisgr8",
    database: "employee_trackerdb"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("EMPLOYEE TRACKER TITLE!!!!");
    optionScreen();
})


function optionScreen() {
    inquirer.prompt({
        type: "list",
        message: "Choose an Option",
        name: "option-selector",
        choices: [
            "View Roles",
            "View Departments",
            "View Employees",
            "Add Role",
            "Add Department",
            "Add Employee",
            "Update Employee Role",
            "All Done"
        ]
    }).then(function (option) {
        switch (option) {
            case "View Roles":
                displayRoles(); // function will display all the roles in database 
                areYouDone(); // will decide if person if done and if not will reshwow options 
                break;
            case "View Departments":
                displayDepartments(); // function will display all the departments in database 
                areYouDone(); // will decide if person if done and if not will reshwow options 
                break;
            case "View Employees":
                displayEmployees(); // function will display all the employees in database 
                areYouDone(); // will decide if person if done and if not will reshwow options 
                break;
            case "Add Role":
                addRole(); // function will add a role in database 
                areYouDone(); // will decide if person if done and if not will reshwow options 
                break;
            case "Add Department":
                addDepartment(); // function will add a department in database 
                areYouDone(); // will decide if person if done and if not will reshwow options 
                break;
            case "Add Employee":
                addEmployee(); // function will add an employee in database 
                areYouDone(); // will decide if person if done and if not will reshwow options 
                break;
            case "Update Employee Role":
                updateRole(); // function will update roles in database 
                areYouDone(); // will decide if person if done and if not will reshwow options 
                break;
            default:
                break;
        }
    }

    )

}

//  inquirer.prompt 


function displayRoles() {

}

function displayDepartments() {

}

function displayEmployees() {

}

function addRole() {

}

function addDepartment() {

}

function addEmployee() {

}

function updateRole() {

}