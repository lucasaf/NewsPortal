var app = require('./config/server');
var newsRoutes = require('./app/routes/news')(app);
var homeRoutes = require('./app/routes/home')(app);
var addNewsRoutes = require('./app/routes/form_add_new')(app);

app.listen(3000, function(){
    console.log("Servidor rodadando com express");
});