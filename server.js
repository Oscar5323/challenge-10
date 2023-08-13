const inquirer = require('inquirer');
const mysql = require('mysql2');
import{user,password}from './secrets';

const connects = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: user,
    password: password,
});

connects.connect((err)=>{
    if (err) throw err;
    console.log('connected to data');
    start()
});

function start(){
    inquirer
        .prompt({
            type:'list',
            name:'action',
            message:'pick an option',
            choices:[
                'View all departments',
                'View all employees',
                'View all roles',
                'Add departments',
                'Add employee',
                'Add role',
                'Exit'
            ]
        })
        .then((answers)=>{
            switch (answers.action) {
                case "View all departments":
                    view_A_department();
                    break;
                case "View all employees":
                    view_A_employee();
                    break;
                case "View all roles":
                    view_A_roles();
                    break;
                case "Add a department":
                    add_department();
                    break;
                case "Add a role":
                    add_role();
                    break;
                case "Add an employee":
                    add_employee();
                    break;
                 case "Exit":
                    connects.end();
                    console.log("Goodbye!");
                    break;        
            }


        });
};

function view_A_department(){
    const query = 'SELECT * FROM department'
    connects.query(query,(res,err)=>{
        if(err) throw err
        console.table(res)
    })
};

function view_A_employee(){
    const query = 'SELECT * FROM employee'
    connects.query(query,(res,err)=>{
        if(err) throw err
        console.table(res)
    })
};

function view_A_roles(){
    const query = 'SELECT * FROM role'
    connects.query(query,(res,err)=>{
        if(err) throw err
        console.table(res)
    })
};

function add_department(){
    inquirer.prompt({
        type:'input',
        name:'name',
        message:'enter department name'
    })
    .then((answer)=>{
        const query = `INSERT INTO department ( department_name) VALUES ("${answer.name}")`
        connects.query(query,(res,err)=>{
            if(err) throw err
            
            
        })

    })
};

function add_employee(){};

function add_role(){
    const query = "SELECT * FROM department";
    connection.query(query, (err, res) => {
        if (err) throw err;
        inquirer
            .prompt([
                {
                    type: "input",
                    name: "title",
                    message: "Enter the title of the new role:",
                },
                {
                    type: "input",
                    name: "salary",
                    message: "Enter the salary of the new role:",
                },
                {
                    type: "list",
                    name: "department",
                    message: "Select the department for the new role:",
                    choices: res.map(
                        (department) => department.department_name
                    ),
                },
            ])
            .then((answers) => {
                const department = res.find(
                    (department) => department.name === answers.department
                );
                const query = "INSERT INTO role SET";
                connection.query(
                    query,
                    {
                        title: answers.title,
                        salary: answers.salary,
                        department_id: department,
                    },
                    (err, res) => {
                        if (err) throw err;
                        console.log(
                            `Added role ${answers.title} with salary ${answers.salary} to the ${answers.department} department in the database!`
                        );
                        start();
                    }
                );
            });
    });
}
};

process.on("exit", () => {
    connects.end();
});

