var http = require("http");
http.createServer(function(req, res){
    res.end("<h1>Boa pra nois fml</h1>")
}).listen(3000);
console.log('Servidor Rodando...')

