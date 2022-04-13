var http = require("http");
http.createServer(function(req, res){
    var rota = req.url
    if(rota =='/cadastro'){
        res.end("<h1>Pagina de cadastro</h1>")
    }else if(rota=='/consulta'){
        res.end("Pagina de consulta</h1>")
    }else{
        res.end("<h1>Pagina inicial. Seja bem vindo!</h1>")
    }
}).listen(3000);
console.log('Servidor Rodando...')

