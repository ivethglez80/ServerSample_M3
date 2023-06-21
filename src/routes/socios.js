const express = require ("express");
const router = express.Router();
const {userAll, userById, userCreate, userUpdateById, userDeleteById, dataApiOut}  = require("../controllers/socios")

router.get("/all", userAll);
router.get("/search/:id", userById);
router.post("/create", userCreate);
router.put("/update", userUpdateById);
router.delete("/:id", userDeleteById);
router.get("/apiout", dataApiOut);

module.exports = router

// http://localhost:3001/socios/all
// http://localhost:3001/socios/create/:id
// http://localhost:3001/socios/update  --> este va a ser por query

// http://localhost:3001/socios/:id --> elimina
// http://localhost:3001/search/:id --> busca
// http://localhost:3001/socios/apiout --> trae datos de api externa