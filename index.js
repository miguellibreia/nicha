//paquetes
const express = require('express')
const app = express()
const cors = require('cors')
//puerto
app.set("port",process.env.PORT||3003)
//middlewears
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors())
//Rutas
app.use(require("./rutas/rutas"))

//ejecucion del srvidor web

app.get('/', function (req, res) {
  res.send('Hello MIKY')
})

app.listen(app.get("port"))
console.log("La direccion de acceso es :\nhttp://localhost:"+ app.get("port"))
// produccion
module.exports =app