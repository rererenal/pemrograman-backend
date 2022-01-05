//memanggil express
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

//menyimpan express menjadi object
const app = express();

//menggunakan middleware json
app.use(express.json());

//memanggil file router
const router = require("./routes/api");
app.use(router);


//definisikan port yang digunakan
app.listen(3000, () => {
    console.log("Server run at http://localhost:3000");
});
