var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.send('<h1>Tela Inicial</h1>');
})

app.get('/cadastro', function(req, res){
    res.send('<h1>Tela de cadastro</h1>');
})

app.get('/boasvindas/:nome', function(req, res){
    let nome = req.params.nome
    res.send(`<h1>Olá ${nome}, seja bem vindo!</h1>`)
})

app.get('/consulta', function(req, res){
    res.send('<h1>Tela de consulta</h1>');
})

app.listen(8182, function(){
   console.log('Servidor rodando...')
})