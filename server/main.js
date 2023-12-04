var express  = require('express');
var app = express();

/**como trabajamos cpn socket, es recomendable usar el modulo HTTP para pasarle la app a express y manejar bien http */

var server = require('http').Server(app);

/** Aqui estara toda la funcionalidad de los socket
 * se requiere la libreria socket.io
 * se pasa la variable Server que tiene la app express y HTTP
 */
var io = require('socket.io')(server);

app.get('/',function(req,res){
    res.status(200).send('Hola mundo')
});
/** De esta forma activamos socket para que este escuchando mandamos un mensjae de control por consola para saber que pasa y tenemos
 * que hacer que el mensaje venga del navegador web mediante html y JS
 */

io.on('connection', function(socket){
    console.log('Alguien se ha conectado con socket')
});

server.listen(3010, function(){
    console.log("El Servidor esta corriendo en http://loclalhost:3010");
})