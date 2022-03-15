const Sequelize = require('sequelize')
const sequelize = new Sequelize('rick','root','37649035',{
    host: "localhost",
    dialect: 'mysql',

})
sequelize.authenticate().then(function(){
    console.log('banco de dados conectado com sucesso')
}).catch(function(error){
    console.log('falha ao se conectar'+error)
})

module.exports = sequelize;