const express = require("express")
const handlebars = require("express-handlebars")
const app = express ()
const bodyParser = require('body-parser')
const Post = require('./models/Post')


//Config serve
    //Template Engine
        app.engine('handlebars', handlebars.engine ({defaultLayout: 'main'}))
        app.set('view engine', 'handlebars')
    //Body-Parser
        app.use(bodyParser.urlencoded({extended: false}))
        app.use(bodyParser.json())

    //Rotas
        app.get('/home', (req, res) => {
            Post.findAll().then((posts) => {    
            res.render('home', {posts: posts})})
        })
        app.get('/cad', (req, res) => {
            res.render('formulario')
        })
        app.post('/add', (req, res) => {
            Post.create({
                titulo: req.body.titulo,
                conteudo: req.body.conteudo
            }).then(() => {
                res.send('Post criado com sucesso')
            }).catch((erro) => {'Houve um erro: ' + erro})

            
        })
        app.get('/deletar/:id', function(req, res){
            Post.destroy({where: {'id': req.params.id}}).then(() => {
                res.send('Postagem deletada com sucesso!')
            }).catch((erro) => {
                res.send('Esta postagem não existe!')
            })
        })

app.listen(8081, () =>{
    console.log('Servidor Rodando...')
})