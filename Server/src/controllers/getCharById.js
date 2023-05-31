const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character/`

const character = {
    name:null,
    gender:null,
    species:null,
    origin:null,
    image:null,
    status:null,
}
const getCharById = (res,id) => {
    axios.get(URL+id)
    .then(({data}) => {
          character.id= data.id
          character.name = data.name;
          character.gender = data.gender;
          character.species = data.species;
          character.origin = data.origin;
          character.image = data.image;
          character.status = data.status;
       res.writeHead(200,{"Content-Type":"application/json"})
       return res.end(JSON.stringify(character))
    }).catch((reason)=>{
        res.writeHead(500,{"Content-Type":"text/plain"})
    })
}
module.exports = getCharById;