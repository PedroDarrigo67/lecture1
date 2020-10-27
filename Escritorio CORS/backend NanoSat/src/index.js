const fs = require('fs')
require('dotenv').config();  //importo variable de entorno
const app = require('./app'); // importo de app.js
//require('./database'); //llamo a database para conectar la base

async function main() { //funcion que inicializa el programa
    await app.listen(8000, '127.0.0.1'); //inicializo y que escuche

    //await app.listen(app.get('port')); //inicializo y que escuche
    console.log('Server on port', 8000); // cadena de conexion
}




        


main();
