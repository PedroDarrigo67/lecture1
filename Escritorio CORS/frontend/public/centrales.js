// INSTRUCCIONES:

// 1. Modificar una central:

// window.centralesInfo es un array donde obtiene un elemento, que a su vez contiene dos características: nombre e ip.
// El nombre es de la central y debe respetarse como un String. Ejemplo: "Fincas Del Sur", "Calera", etcétera.
// La IP debe ponerse también como String, respetando solo la URL, no hace falta colocar el puerto.

// 2. Agregar una nueva central:

// Debemos crear otro elemento entre {} donde contenga nombre e ip, respetando las convenciones anteriormente nombradas.
// No olividar colocar una "," entre elementos. Por ejemplo

// window.centralesInfo = [
//   {
//     nombre: "Fincas del Sur",
//     ip: `181.31.155.212`,
//   },
//   {
//     nombre: "Nueva Central 1",
//     ip: `ip.ip.ip.ip`,
//   },
//   {
//     nombre: "Fincas del Sur",
//     ip: `ip.ip.ip.ip`,
//   },
// ]

window.centralesInfo = [
  {
    nombre: "fincas del sur",
    ip: "localhost:8000"
  },
];
