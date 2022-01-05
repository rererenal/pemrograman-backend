//memanggil data
const students = require("../data/student");

class StudentController {
    index (req, res){
        const data = {
            message : "Menampilkan data student",
            data : students
        }
        res.json(data);
    }
    store(req, res){
        const {name} = req.body 
        students.push(name);
        const data = {
            message : "Menambahkan data student",
            data : students
        }
        res.json(data);
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