// TODO 4: SETUP CONTROLLER
//memanggil fungsi dari express
const Covid = require("../models/Covid");

class CovidController {
    async index(req, res){
        const resource = await Covid.all();
        if (resource.length > 0) {
            const data = {
                message : "Menampilkan semua data pasien",
                data : resource
            }
            return res.status(200).json(data);
        }
        const data = {
            message : "Data Empty"
        }
        res.status(200).json(data);
    }

   async show(req, res){
        const {id} = req.params;
        const findId  = await Covid.find(id);
        if (findId){
            const data = {
                message : "Menampilkan data pasien",
                data : findId
            }
            return res.status(200).json(data);;
        }
        const data = {
            message : "id key invalid"
        }
        return res.status(404).json(data);
    }

    async search(req, res){
        const {name} = req.params;
        const findData = await Covid.search(name);
        if (findData){
            const data = {
                message : `Menampilkan data pasien ${name}`,
                data : findData
            }
            return res.status(200).json(data);;
        }
        const data = {
            message : "key params invalid"
        }
        return res.status(404).json(data);


    }
    // function status menggantikan function positive, recovered, dan dead secara langsung
    //dengan mengguanakan params yang dikirim dari endpoint
    async status(req, res){
        const {status} = req.params;
        const findData = await Covid.findByStatus(status);
        if (findData){
            const data = {
                message : `Menampilkan data pasien ${status}`,
                data : findData
            }
            return res.status(200).json(data);;
        }
        const data = {
            message : "key params invalid",
            error : `status ${status} doesn't exist`
        }
        return res.status(404).json(data);
    }

    async store(req, res){
        const insert = await Covid.create(req.body);
        const data = {
            message : "Menambahkan data pasien baru",
            data : insert
        }
        res.status(201).json(data);
    }

    async update(req, res){
        const {id} = req.params
        const findId = await Covid.find(id)
        
        if (findId){
            await Covid.update(id, req.body);
            const returnData = await Covid.find(id);
            const data = {
                message : `Update data ${id} berhasil`,
                data : returnData
            }
            return res.status(200).json(data);
        }
        const data = {
            message : "Key params invalid",
            error : `Id ${id} doesn't exist`
    
        }
        return res.status(404).json(data);
    }

    async destroy(req, res){
        const {id} = req.params;
        const findId = await Covid.find(id);
        
        if (findId){
            await Covid.delete(id);
            const data = {
                message : `Pasien no ${id} telah dihapus`
            }
            return res.status(200).json(data);
        }
        const data = {
            message : "key params invalid",
            error : `id ${id} doesn't exist`
        }
        return res.status(404).json(data);
    }

}

//mengubah CovidController menjadi object
const object = new CovidController;
//export object
module.exports = object;
