//este es el index de routes
const express = require ("express");
const router = express.Router();
const socios  = require("./socios")

router.use("/socios", socios)

module.exports = router