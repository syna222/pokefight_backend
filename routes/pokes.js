const express = require("express");
const router = express.Router();
const {
    sayHello,
    getAllPokes,
    getSinglePokemon
}           = require("../controller/pokes");


//Initialroute:
router.route("/").get(sayHello);


//get all pokemon:
router.route("/pokemon").get(getAllPokes);


//get single pokemon:
router.route("/pokemon/:id").get(getSinglePokemon);



module.exports = router;



