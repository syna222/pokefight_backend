//let jsonData = require("./pokedex.json");
const express = require("express");
const app = express();
port = 8088;
const cors = require("cors");

const pokeRoutes = require("./routes/pokes");

//parst Daten aus req.body (kommend aus HTML Formularen)
app.use(express.urlencoded({ extended: true }));

//parst JSON Daten aus req.body (kommend aus NICHT-HTML Formularen)
app.use(express.json());

//erlaubt Zugriff unabhängig vom Client
app.use(cors());


app.use("/", pokeRoutes);






app.listen(port);


