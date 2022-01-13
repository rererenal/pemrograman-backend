/**
 * TODO 1: SETUP SERVER USING EXPRESS.JS.
 * UBAH SERVER DI BAWAH MENGGUNAKAN EXPRESS.JS.
 * SERVER INI DIBUAT MENGGUNAKAN NODE.JS NATIVE.
 */
//memanggil fungsi express
const express = require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");

//menyimpan express pada variable app
const app = express();

//express menggunakan middleware json untuk mengolah data
app.use(express.json());

//memanggil router dari api
const router = require("./routes/api");
app.use(router);

//menghubungkan dengan port
app.listen(3000, ()=> {
    console.log("Server Running at http://localhost:3000");
});

// (function(){
//     "use strict";require("http").createServer((t,e)=> {
//         e.writeHead(200,{"Content-Type":"text/html"}),
//         e.write("Final Project UAS - Good Luck."),
//         e.end()}).listen(3e3,() => {
//             console.log("[Server] Running at: http://localhost:3000")}
//         )}).call(this);
