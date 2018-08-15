var app = require('./config/server');

app.get('/', function(req, res){
    res.render("home/index")
});

app.get('/formulario_inclusao_noticia', function(req, res){
    res.render("admin/form_add_new");
});

app.get('/news', function(req, res){
    res.render("news/news");
});

app.listen(3000, function(){
    console.log("Servidor rodadando com express");
});