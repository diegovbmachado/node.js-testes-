const express = require("express");
const app = express();
const handlebars = require('express-handlebars')



//config    
    //tamplete engine
    const hbs = handlebars.create({
        defaultLayout: 'main'
    })
    app.engine('handlebars',() => hbs)
    app.set('view engine', 'handlebars');
    //conexao com o banco de dados
    const sequelize = new Sequelize('sistemadecadastroesequelize', 'root','24584558',{
        host: "localhost",
        dialect: 'mysql'
    })
app.listen(8081, function(){
    console.log("servidor rodando na url http//localhost:8081");
});