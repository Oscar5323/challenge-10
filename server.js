const inquirer = require('inquirer')
const mysql = require('mysql2')
const login = require('./secrets')
import{user,password}from './secrets'

const connect = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: user,
    password: password,
})