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

            const show = this.find(id);
            return show;
            // return new Promise((resolve, reject)=> {
            //     const sql = 'SELECT * FROM students WHERE id = ?';
            //     db.query(sql, id , (err, result)=>{
            //         console.log(err);
            //         resolve(result);
            //     });
        
        
    }
    static find(id){
        return new Promise((resolve,reject)=> {
            const sql = 'SELECT * FROM students WHERE id = ?';
            db.query(sql, id, (err, result)=>{
                resolve(result[0]);
            });
        });
    }
    static update(id, data){
        return new Promise((resolve,reject)=> {
            const sql = 'UPDATE students SET ? WHERE id = ?';
            db.query(sql, [data, id], (err, result)=>{
                resolve(result);
            })
        })
    }

    static delete(id){
        return new Promise((resolve,reject)=> {
            const sql = 'DELETE FROM students WHERE id = ?';
            db.query(sql, id,(err, result)=>{
                resolve(result);
            })
        })
    }
}

module.exports = Student;