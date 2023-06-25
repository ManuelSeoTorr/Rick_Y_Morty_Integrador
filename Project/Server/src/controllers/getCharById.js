const axios = require("axios");
const URL = `https://rickandmortyapi.com/api/character/`

//Metodo con Async await
const getCharById = async(req, res) => {
    try {
        const { id } = req.params;
        const { data } = await axios.get(URL+id)
        const character = {
            id: data.id,
            name: data.name,
            gender: data.gender,
            species: data.species,
            origin: data.origin,
            image: data.image,
            status: data.status,
        }
        res.status(200).json(character);
    } catch (error) {
        if(error.response.status === 404){
            res.status(404).send("Not found")
        } else {
            res.status(500).json(error.message)
        }
        
    }
}

//Metodo con Express
// const getCharById = (req, res) => {
//     const {id} = req.params;
//     axios.get(URL+id).then(({data}) => {
//         const character = {
//             id: data.id,
//             name: data.name,
//             gender: data.gender,
//             species: data.species,
//             origin: data.origin,
//             image: data.image,
//             status: data.status,
//         }
//         res.status(200).json(character); 
//     }).catch((error)=>{
//         if(error.response.status === 404){
//             res.status(404).send("Not found")
//         } else {
//             res.status(500).json({message: error.message})
//         }
//     })    
// };

module.exports = getCharById;

// Metodo Viejo 
// const character = {
//     name:null,
//     gender:null,
//     species:null,
//     origin:null,
//     image:null,
//     status:null,
// }
// const getCharById = (res,id) => {
//     axios.get(URL+id)
//     .then(({data}) => {
//           character.id= data.id
//           character.name = data.name;
//           character.gender = data.gender;
//           character.species = data.species;
//           character.origin = data.origin;
//           character.image = data.image;
//           character.status = data.status;
//        res.writeHead(200,{"Content-Type":"application/json"});
//        return res.end(JSON.stringify(character));
//     }).catch((error)=>{
//         res.writeHead(500,{"Content-Type":"text/plain"});
//         return res.end(error.message)
//     })
// }