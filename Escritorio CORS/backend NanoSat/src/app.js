const express = require("express"); //importo el framework y guardo en una cte
const cors = require("cors"); //conectar servidores
const fs = require("fs");


const app = express();

// settings
app.set("port", process.env.PORT || 8000);

// middlewares
app.use(cors());
app.use(express.json());

// //objeto de JSON - agregar frecuencia de leido con la frecuencia de post(test de vida)
const data = fs.readFileSync("./dev-data/cuenta.json", "utf-8");
const dataObj = JSON.parse(data);
dataObj.map(obj => {obj.date = new Date()})


setInterval(() => {
  const data = fs.readFileSync("./dev-data/cuenta.json", "utf-8");
  const dataObj = JSON.parse(data);
  var meterObjeto = dataObj.map(obj => {obj.date = new Date()})
  dataObj.push(meterObjeto)
  console.log(dataObj);
}, 3000);

// routes
app.get("/api/notes", (req, res) => res.send(dataObj));

module.exports = app;