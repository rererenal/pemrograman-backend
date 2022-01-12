//memanggil package mysql
const mysql = require("mysql");

//memanggil file dotenv
require("dotenv").config();

//membuat koneksi dengan mysql/database
const dbconnection = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
});
//menghubungkan dengan database yang telah dipilih
dbconnection.connect(function(err){
    if (err){
        console.log(`error connecting : ${err.stack}`);
    }
    console.log(`connected as id : ${dbconnection.threadId}`);
});
//export database
 module.exports = dbconnection;