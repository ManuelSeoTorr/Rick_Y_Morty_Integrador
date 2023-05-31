var http = require("http");
const data = require('./utils/data');
const PORT = 3001;
http.createServer((req , res)=>{
    res.setHeader('Access-Control-Allow-Origin', '*');
    const {url} = req;
    if(url.includes("/rickandmorty/character")) {
        const urlParts = url.split("/");
        const id = urlParts[urlParts.length-1];
        const character = data.find((character) => character.id === Number(id));
        if(!character){
            res.writeHead(404, {'Content-Type': 'text/plain'});
            return res.end("Route  not found")
        }

        res.writeHead(200, { 'Content-Type': 'application/json' });
        return res.end(JSON.stringify(character));
    }

}).listen(PORT,"localhost",()=>{
    console.log(`Servidor escuchando en puerto${PORT}`);
});
 
   