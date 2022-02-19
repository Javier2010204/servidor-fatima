require('dotenv').config();

const express = require('express');
const { send } = require('process');
const app = express();

var hbs = require('hbs');


const port = process.env.PORT;

app.set('view engine', 'hbs');

hbs.registerPartials(__dirname + '/views/partials', function(err){
    
});

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.render('home', {
        titulo: 'Mi pagina Node',
        nombre: 'Javier Santa Cruz'
    });
});

app.get('/generic', (req, res) => {
    res.render('generic', {
        titulo: 'Mi pagina Node',
        nombre: 'Javier Santa Cruz'
    });
});

app.get('/elements', (req,res) => {
    res.render('elements', {
        titulo: 'Mi pagina Node',
        nombre: 'Javier Santa Cruz'
    });
})


app.listen(port, ()=>{
    console.log('Aplicación corriendo en el puerto', port);
});