const Sequelize = require('sequelize')
const sequelize = new Sequelize('sistemadecadastrosequelize', 'root','24584558',{
    host: "localhost",
    dialect: 'mysql'
})

sequelize.authenticate().then(function(){
    console.log("Conectado com sucesso!")
}).catch(function(erro){
    console.log("Falha ao se contectar: "+erro)
})