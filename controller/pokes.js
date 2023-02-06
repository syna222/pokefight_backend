let jsonData = require("../pokedex.json");
//console.log(typeof jsonData);


const sayHello = (req, res) => {
   res.send("Hello world, this is the API for pokemon with endpoints /pokemon, /pokemon/:id etc...");
}

const getAllPokes = async (req, res) => {       //braucht man async await hier noch ohne query?
    res.status(200).json(jsonData);
}

const getSinglePokemon = async (req, res) => {
    const id = req.params.id;
    const index = jsonData.findIndex(p => p.id === parseInt(id));
    if(index !== -1){
    const data = [...jsonData];     //otherwise, jsonData will be modified and spliced for further use
    const poke = data.splice(index, 1);
    res.status(200).json(poke);
    } else {
        res.status(404).send(`there is no pokemon in our set with the id of ${id}`);
    }
}


module.exports = {
    sayHello, 
    getAllPokes,
    getSinglePokemon
}






