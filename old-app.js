const http = require('http');

http.createServer( (req, res) => {
    res.writeHead(200, {'content-Type': 'application/json'} );
    let salida = {
        name: 'yensi',
        age: 33,
        email: 'yensi@vega.com',
        url: req.url
    }
    res.write(JSON.stringify(salida));
    res.end();
} )
.listen(8080);

console.log('Escuchando el puerto 8080');