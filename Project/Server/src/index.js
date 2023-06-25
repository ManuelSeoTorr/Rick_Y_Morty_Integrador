const express = require('express');
const server = express();
const PORT = 3001;
const router = require("./routes/index")
const { conn } = require('./DB_connection');

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use(express.json());
 server.use(`/rickandmorty`, router); 

// server.get("/",(req, res)=>{
//     res.send("HomePage")
// })

// server.get("/users",(req, res)=>{
//     res.send("para usuarios")
// })
conn.sync({force: true}).then(()=>{
   server.listen(PORT, () => {
      console.log('Server raised in port: ' + PORT);
   });
});


//Version WebServer
// var http = require("http");
// const data = require('./utils/data');
// const getCharById = require("./controllers/getCharById")
// const PORT = 3001;
// http.createServer((req , res)=>{
//     res.setHeader('Access-Control-Allow-Origin', '*');
//     const {url} = req;

//     if(url.includes("/rickandmorty/character")) {
//         const id = url.split("/").at(-1);
//         return getCharById(res, id);
//     }

// }).listen(PORT,"localhost",()=>{
//     console.log(`Servidor escuchando en puerto${PORT}`);
// });
//Condicion vieja sin Controlers
// const urlParts = url.split("/");
//         const id = urlParts[urlParts.length-1];
//         const character = data.find((character) => character.id === Number(id));
//         if(!character){
//             res.writeHead(404, {'Content-Type': 'text/plain'});
//             return res.end("Route  not found")
//         }

//         res.writeHead(200, { 'Content-Type': 'application/json' });
//         return res.end(JSON.stringify(character))
 
   