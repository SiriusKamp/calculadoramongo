const express = require("express");
const router = express.Router();
var calcularController = require("../controller/calcularController");

//CREATE
router.get("/add", calcularController.abreAdd);
router.post("/add", calcularController.add);

//READ
router.get("/", calcularController.listar);

//DELETE
router.get("/del/:id", calcularController.del)

module.exports = router;
