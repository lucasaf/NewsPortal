var express = require('express');
var msg = require('./mod_teste');

var app = express();

app.set('view engine', 'ejs');

app.get('/', function(req, res){
    res.render("home/index")
});

app.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_new");
});

app.get('/news', function(req, res){
    res.render("noticias/news");
});

app.listen(3000, function(){
    console.log("Servidor rodadando com express");
});