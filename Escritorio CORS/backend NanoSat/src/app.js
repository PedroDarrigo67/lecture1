const express = require("express"); //importo el framework y guardo en una cte
const cors = require("cors"); //conectar servidores
const fs = require("fs");

const app = express();

// settings
app.set("port", process.env.PORT || 8000);
global.centrales;
global.centrales = "FINCAS DEL SUR"

let centralNombre = global.centrales;

// middlewares
app.use(cors());
app.use(express.json());

// //objeto de JSON - agregar frecuencia de leido con la frecuencia de post(test de vida)

let data = fs.readFileSync("./dev-data/cuenta.json", "utf-8");
let dataObj = JSON.parse(data);
let obj = {};
obj.conos = dataObj;
let nowDate = new Date();
obj.date =
  [nowDate.getDate(), nowDate.getMonth() + 1, nowDate.getFullYear()].join("/") +
  " a las " +
  [nowDate.getHours(), nowDate.getMinutes(), nowDate.getSeconds()].join(":");
obj.central = centralNombre;

setInterval(() => {
  let data = fs.readFileSync("./dev-data/cuenta.json", "utf-8");
  let dataObj = JSON.parse(data);
  obj.conos = dataObj;
  let nowDate = new Date();
  obj.date =
    [nowDate.getDate(), nowDate.getMonth() + 1, nowDate.getFullYear()].join(
      "/"
    ) +
    " a las " +
    [nowDate.getHours(), nowDate.getMinutes(), nowDate.getSeconds()].join(":");
  obj.central = centralNombre;
}, 300000);

// routes
app.get("/api/notes", (req, res) => res.send(obj));

module.exports = app;
