//memanggil database
const req = require("express/lib/request");
const db = require("../config/database");

class Student {
    static all(){
        return new Promise((resolve, reject) => {
            const sql = 'SELECT * FROM students';
            db.query(sql, (err, result)=>{
            resolve(result)
            });
        });
    }

    static async create(data) {
        const id = await new Promise((resolve,reject)=>{
            const sql = `INSERT INTO students SET ?`;
            db.query(sql, data, (err,result)=> {
                console.log(err);
                resolve(result.insertId);  
                });
            
            });
            return new Promise((resolve, reject)=> {
                const sql = 'SELECT * FROM students WHERE id = ?';
                db.query(sql, id , (err, result)=>{
                    console.log(err);
                    resolve(result);
                });
        
        });
    }
}

module.exports = Student;