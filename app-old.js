const http = require('http');

http.createServer((req, res)=> {


    res.writeHead(200,{'Content-Type':'application/json'});
    let salida  ={
        nombre : 'Fernado',
        edad:45
    }
    res.write( JSON.stringify( salida ));
    //res.write('Hola Mundo');
    res.end();
})
    .listen(8080);

console.log(' escuchando 8080');
