const express = require ('express');

const bodyParser = require ('body-parser');

const app = express();

//Config do server
    //Body-Parser
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

require('./controllers/authController')(app)

app.listen(8000, () =>(
    console.log('Server Running...')
    ))
