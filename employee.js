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
    inquirer.prompt ({
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
            "Delete Employee",
            "View Employee Manager",
            "delete role",
            "All Done"
        ]
    }).then(
    
    )
    
}

inquirer.prompt