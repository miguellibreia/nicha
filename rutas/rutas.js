//Importaciones
const { Router }= require("express")
const { getautor, getautorNombres, getautorBYID, postautor, deleteautor, putlautor } = require("../controladores/autor.controladores")
const { getlibros, getlibrosByid, postlibros, putlibros, deletelibro, getlibros_Nombres } = require("../controladores/libros.controladores")
const rutas = Router()
const URLV1 = "/v1"
 //Rutas autor
rutas.get(URLV1+"/autor",getautor)
rutas.get(URLV1+"/autor/id/:id",getautorBYID)

rutas.post(URLV1+"/autor",postautor)
rutas.put(URLV1+"/autor",putlautor)
rutas.delete(URLV1+"/autor/:id",deleteautor)

//Rutas elibros
rutas.get(URLV1+"/libros",getlibros)
rutas.get(URLV1+"/libros/id/:id",getlibrosByid)
rutas.get(URLV1+"/libros/autores",getlibros_Nombres)
rutas.post(URLV1+"/libros",postlibros)
rutas.put(URLV1+"/libros",putlibros)
rutas.delete(URLV1+"/libros/:id",deletelibro)
 module.exports = rutas