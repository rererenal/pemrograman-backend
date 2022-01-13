// TODO 3: SETUP CONFIG DATABASE
//memanggil fungsi mysql
const mysql = require("mysql");
//memanggil fungsi .env
require("dotenv").config();
//membuat setup koneksi ke mysql
const dbconnection = mysql.createConnection({
    host : process.env.DB_HOST,
    user : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_NAME
});
//membuka koneksi dengan database yang telah di setup
dbconnection.connect((err)=>{
    if (err){
        console.log(`error connecting : ${err.stack}`);
    }
    console.log(`Connected as id : ${dbconnection.threadId}`);
});
//export db connection untuk digunakan pada model
module.exports = dbconnection;