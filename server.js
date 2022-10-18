// declaring dependencies for the server.js
const mysql2 = require('mysql2');
const inquirer = require('inquirer');
const consoleTab = require ('console.table');
const { default: Choices } = require('inquirer/lib/objects/choices');
const { Action } = require('rxjs/internal/scheduler/Action');
const { allowedNodeEnvironmentFlags, exit } = require('process');

// connecting to sql database.
const connection = mysql2.createConnection({
    host: 'localhost',
    port: 3001,
    user:'root',
    password:'',
    database: 'employees_db'
})
// connecting to sql server 
connection.connect(function(err){
    if (err) throw err;
    choose();
})

function choose(){
    inquirer 
    .prompt({
        name: Action,
        type: list, 
        message: 'Please select one option out of following optios',
        choices: [
            'view all departments',
            'view all employees',
            'view all roles',
            'add employee',
            'add manager',
            'add role',
            'add employee role',
            'update employee',
            'delete employee',
            'EXIT'

        ]
    }) .then(function(answer){
        switch (answer.Action){
            case 'view all departments':
                viewDept();
                break;
            case 'view all employees':
                viewEmp();
                break
            case 'view all roles':
                viewRole();
                break
            case 'add employee':
                addEmp();
                break
            case 'add manager':
                addManager();
                break
            case 'add role':
                addRole();
                break
            case 'add employee role':
                addEmployeeRole();
                break
            case 'update employee':
                updateEmployee();
                break
            case 'delete employee':
                deleteEmployee();
                break
            case 'EXIT':
                exit();
            
            default:
                break;
        }
    })
    function viewDept (){
        var query = 'SELECT * FROM department';
        connection.query (query,function (err, res){
            if (err)throw err;
            console.table('all departments:',res);
            choose();
        })
    };
    function viewEmp (){
        var query = 'SELECT * FROM employee';
        connection.query(query, function(err,res){
            if (err)throw err;
            console.log(res.length + 'employees available');
            console.table('all employees:', res);
            choose();
        })
    };
    function


    }










