
const Sequelize = require('sequelize')

//Conexão com Banco de Dados

const sequelize = new Sequelize('postapp','root', 'root', {
    host: 'localhost',
    dialect: 'mysql',
    query:{raw:true}
})

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}