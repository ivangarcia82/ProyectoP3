const express = require('express');
const app = express();

app.get('/', function(req, res){
    res.send('Hola');
});

app.get('/mundo', function(req, res){
    res.send('Hola mundo');
});


app.listen(3000, function(){
    console.log('Escuchando en el puerto 3000!')
})