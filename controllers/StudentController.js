//memanggil data
const students = require("../data/student");
//memanggil models
const Student = require("../models/Student");

class StudentController {
    async index (req, res){
        const resource = await Student.all();
        const data = {
            message : "Menampilkan data student",
            data : resource
        }
        res.status(200).json(data);
    }
    async store(req, res){
        const insert = await Student.create(req.body);
        const data = {
            message : "Menambahkan data student",
            data : insert
        }
        res.status(201).json(data);
    }
    update(req, res){
        const {id} = req.params;
        const {name} = req.body;
        students[id] = `${name}`; 
        const data = {
            message : `Mengubah data student ${id}`,
            data : students
        }
        res.json(data);
    }
    destroy(req, res){
        const {id} = req.params;
        students.splice(id, 1);
        const data = {
            message : `Menghapus data student ${id}`,
            data : students
        }
        res.json(data);
    }
}

//mengubah controller menjadi object
const object = new StudentController;

//export

module.exports = object;