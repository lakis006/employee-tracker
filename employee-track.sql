DROP DATABASE IF EXISTS employee_trackerdb;

CREATE DATABASE employee_trackerdb;

USE employee_trackerdb;

CREATE TABLE department (
	id INTEGER PRIMARY KEY,
    name VARCHAR(30)
    );

CREATE TABLE role (
	id INT PRIMARY KEY,
    title VARCHAR(30),
    salary DECIMAL,
    department_id INT
    );
    
CREATE TABLE employee (
	id INTEGER PRIMARY KEY,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT NOT NULL
    );

    
SELECT * FROM department;
SELECT * FROM role;
SELECT * FROM employee;
