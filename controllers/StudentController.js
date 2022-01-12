//memanggil data
const req = require("express/lib/request");
const students = require("../data/student");
//memanggil models
const Student = require("../models/Student");


class StudentController {
    async index (req, res){
        const resource = await Student.all();
        if (resource.length > 0) {
            const data = {
                message : "Menampilkan data student",
                data : resource
            }
            return res.status(200).json(data);
        }
        const data = {
            message : "Data Empty"
        }
        res.status(200).json(data);
    }
    async store(req, res){
        const { nama, nim, email, jurusan } = req.body

        if (!nama || !nim || !email || !jurusan){
            const data = {
                message : "Semua data harus di isi"
            };
            return res.status(422).json(data);
        }

        const insert = await Student.create(req.body);
        const data = {
            message : "Menambahkan data student",
            data : insert
        }
        res.status(201).json(data);
    }
    async show(req, res){
        const {id} = req.params;
        const findId = await Student.find(id);
        console.log(findId);

        if (findId){
            const data = {
                message : `Menampilkan data id = ${id}`,
                data : findId
            }
            return res.status(201).json(data);
        }
        const data = {
            message : `Gagal menampilkan data`,
            data : 'ID NOT FOUND'
        }
        res.status(404).json(data); 
    }

    async update(req, res){
        const {id} = req.params;
        const findId = await Student.find(id);
        
        if (findId) {
            const dataUpdated = await Student.update(id, req.body);
            const data = {
                message : `Mengubah data student`,
                data : dataUpdated
            }
            return res.status(200).json(data);
        }
        const data = {
            message : `Mengubah data student gagal`,
            data : 'ID Not Found'
        }
        res.status(404).json(data);
    }
    async destroy(req, res){
        const {id} = req.params;
        const findId = await Student.find(id);
        console.log(findId);

        if (findId){
            const drop = await Student.delete(id);
            const data = {
                message : `Menghapus data student`
            }
            console.log(drop);
            return res.status(200).json(data);
        }
        const data = {
            message : `Menghapus data student gagal`,
            data : 'ID Not Found'
        }
        res.status(404).json(data);
    }
}

//mengubah controller menjadi object
const object = new StudentController;

//export

module.exports = object;