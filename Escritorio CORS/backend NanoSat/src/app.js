const express = require('express'); //importo el framework y guardo en una cte
const cors = require('cors'); //conectar servidores
const fs = require('fs')

const app = express();  

// settings
app.set('port', process.env.PORT || 4000); 

// middlewares 
app.use(cors()); 
app.use(express.json());

//objeto de JSON - agregar frecuencia de leido con la frecuencia de post(test de vida)
const data1 = fs.readFileSync(`./dev-data/barrio.txt`, 'utf-8')
const data = fs.readFileSync('./dev-data/TierrAlta.json', 'utf-8')
const dataObj = JSON.parse(data);


/*setTimeout(() => {
    console.log('Hello, World!')
    const data = fs.readFileSync('./dev-data/TierrAlta.json', 'utf-8')
    const dataObj = JSON.parse(data);
    console.log(data);
  }, 3000);
*/


function tick() {
  ReactDOM.render(
    <Clock date={new Date()} />,
    document.getElementById('root')
  );
}
setInterval(tick, 1000);

 

// routes
app.get('/api/notes', (req, res) => res.send(data));

module.exports = app; 
