const express = require('express');
const app = express();

var exphbs  = require('express-handlebars');

const port = process.env.PORT || 3000;

app.use(express.static( __dirname+'/public' ));
/*
app.get('/', (req, res) => {
    //res.send('Hola Mundo');
    let salida  ={
        nombre : 'Fernado',
        edad:45,
        url : req.url
    };

    res.send( salida );
})
*/

// helpers express-handlebars
app.engine('.hbs', exphbs({
        extname: '.hbs',
        helpers: {
            getAnio: () => new Date().getFullYear() ,
            capitalizar: (texto) => {
                let palabras = texto.split(' ');
                palabras.forEach((palabra, idx) => {
                    palabras[idx] = palabra.charAt(0).toUpperCase() + palabra.slice(1).toLowerCase();
                })
                return palabras.join(' ');
            }
        }
    })
);
app.set('view engine', '.hbs');

app.get('/', function (req, res) {
    res.render('home',{
        nombre : 'Cesar Castillo',
        helpers: {
            foo: function () { return 'foo'; }
        }
    });
});
app.get('/about', function (req, res) {
    res.render('about');
});


app.listen(port , ()=>{
    console.log(`Escuchandoo peticiones en ${port}` )
});
