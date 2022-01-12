const express = require("express");
//memanggil router
const router = express.Router();
//memanggil controller
const StudentController = require("../controllers/StudentController");

//membuat routing
router.get("/", (req, res) => {
    res.send("Hello Tod");
});

//routing
router.get("/students", StudentController.index);

router.get("/students/:id", StudentController.show);

router.post("/students", StudentController.store);

router.put("/students/:id", StudentController.update);

router.delete("/students/:id", StudentController.destroy);

//export api.js 

module.exports = router;