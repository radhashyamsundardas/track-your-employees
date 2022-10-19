// declaring dependencies for the server.js
const mysql2 = require('mysql2');
const inquirer = require('inquirer');
const consoleTab = require ('console.table');
const { default: Choices } = require('inquirer/lib/objects/choices');
const { Action } = require('rxjs/internal/scheduler/Action');
const { allowedNodeEnvironmentFlags, exit } = require('process');
const { type } = require('os');

// connecting to sql database.
const connection = mysql2.createConnection({
    host: 'localhost',
    port: 3306,
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
            'add role',
            'add department',
            'update employee role',
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
            case 'add role':
                addRole();
                break
            case 'add department':
                addDept();
                break
            case 'update role':
                updateRole();
                break
            case 'delete employee':
                deleteEmp();
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
    function viewRole (){
        var query = 'SELECT * FROM role';
        connection.query(query, function (err,res){
            if (err) throw err;
            console.table('all roles', res);
            choose();
        })
    };


    function addEmp(){
        connection.query = 'SELECT * FROM role', function(err,res){
            if (err) throw err;
            inquirer
            .prompt([
                {
                    name: 'first_name',
                    type: 'input',
                    message: 'please enter employee first name',
                },
                {
                    name: 'last_name',
                    type: 'input',
                    message: 'please enter employee last name',
                },
                {
                    name: 'manger_id',
                    type: 'input',
                    message: 'please enter employee manager id',
                },
                {
                    name: 'role',
                    type: 'list',
                    choices: function(){
                        var erray =[];
                        for (var a = 0; a < res.length; a++ ){
                            erray.push(res[i].title);
                        }
                        return erray;
                    },
                    message: 'please enter employee role'
                }
            ]).then (function (answer){
                let role_id;
                for (var i = 0; a< res.length; a++){
                    if (res[i].title === answer.role){
                        role_id = res[i].id;
                        console.log (role_id)
                    }
                }
                connection.query(
                    'INSERT INTO employee SET ?',
                    {
                        first_name: answer.first_name,
                        last_name : answer.last_name,
                        manager_id: answer.manager_id,
                        role_id: role_id,
                    },
                    function(err){
                        if (err) throw err;
                        console.log('employee added');
                        choose();
                    })
                })
            })
        };

            function addRole(){
                connection.query('SELECT * FROM department', function (err, res){
                    if (err) throw err;
                    inquirer
                    .prompt([
                        {
                            name: 'new_role',
                            type: 'input',
                            message: 'add new role'
                        },
                        {
                            name: 'salary',
                            type: 'input',
                            message: 'add salary for this role'
                        },
                        {
                            name :'department',
                            type: 'list',
                            choices: function(){
                                var depArray = [];
                                for (let i=o; i < res.length; i++){
                                    depArray.push(res[i].name);
                                }
                                return depArray;
                            },
                        }
                    ]) .then (function (answer){
                        let department_id;
                        for (let i = 0; a< res.length; a++){
                            if (res[i].name === answer.department){
                                department_id = res[i].id;
                            }
                        }
                        connection.query(
                            'INSERT INTO role SET ?',
                            {
                                title.answer.new_role,
                                salary: answer.salary,
                                department_id: department_id
                            },
                            function (err,res){
                                if (err) throw err;
                                console.log('new role added');
                                console.table('all roles:',res);
                                choose();
                            })
                        })
                       
                    })
                };
                function addDept (){
                    inquirer
                    .prompt([
                        {
                            name:'newDepartment',
                            type: 'input',
                            message: 'which department would you like to add?',

                        }
                    ])
                    .then(function(answer){
                        connection.query('INSERT INTO department SET ?',
                        {
                            name: answer.newDepartment
                        });
                        var query = 'SELECT * FROM department';
                        connection.query(query, function(err,res){
                            if (err) throw err;
                            console.log('department added');
                            console.table('All Departments:', res);
                            choose();
                        })
                    })
                };
                function updateRole(){

                };

                function deleteEmp (){

                };

                function exit(){
                    connection.end();
                };
            
                        
