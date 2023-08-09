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
                'Delete',
                'Exit'
            ]
        })
        .then((answers)=>{

        });
};
