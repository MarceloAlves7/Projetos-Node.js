//Conexão com bando de dados MongoDB
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/NodeUsers').then(() => {
    console.log('Conectado ao Mongodb')
}).catch((err) => {
    console.log('Erro ao se conectar:'+ err)
});

mongoose.Promise = global.Promise;

module.exports = mongoose;