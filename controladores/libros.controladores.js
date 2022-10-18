const {db }=require("../cnn")
//consultAS
const getlibros=async(req,res)=>{
    const consulta = "SELECT * FROM libros;"
    const respuesta= await db.query(consulta)
    res.json(respuesta)
    
}
//buscar libro por titulo
const getlibrosByid=  async (req,res)=>{
   
    const consulta = "SELECT * FROM libros where lt_id_libro LIKE $1;"
    try {
        const id = req.params.id
        const respuesta = await db.one(consulta,[id])
        res.status(200).json(respuesta)


    } catch (e) {
        res.status(400).json({
            code: e.code,
            message:"No se a encontrado con esta identificación("
            +req.params.id +")."
        })
        
    }
}
//mostrar libros y autores
const getlibros_Nombres = async (req,res) => {
    const consulta = "SELECT * FROM id_libro_nombre_apellido_categoria ORDER BY concat;"
    const respuesta= await db.query(consulta)
    res.json(respuesta)
}

//ingresar libros
const postlibros = async(req,res)=>{
    const consulta= "insert into libros VALUES ($1,$2,$3,$4,$5,$6)RETURNING *;"
    try {
        const libro= req.body
        console.log(libro)
    const respuesta = await db.one(consulta,[
        libro.id,
        libro.nombre,
        libro.categoria,
        libro.publicacion,
        libro.editorial,
        libro.id_autor

    ]);
    res.status(201).json({
        message: "Libro ingresado correctamente",
        body:respuesta
    })
    } catch (e) {
        res.status(400).json({
           code: e.code,
           message: e.message 
        })
        
    }
    
    

}
//funcion para actualizar libros
const putlibros = async(req,res)=>{
    const consulta= "update libros SET lt_nombre =$2,lt_categoria =$3,"
    + "lt_publicacion= $4,lt_editorial=$5 WHERE lt_id_libro = $1 RETURNING*;"
    try {
        const libro= req.body
    const respuesta = await db.one(consulta,[
        libro.id,
        libro.nombre,
        libro.categoria,
        libro.publicacion,
        libro.editorial
    ]);
    res.status(200).json({
        message: "Libro actualizado correctamente",
        body:respuesta
    })
    } catch (e) {
        res.status(400).json({
           code: e.code,
           message: e.message 
        })
        
    }
        
}
//eliminar libros
const deletelibro=  async (req,res)=>{
   
    const consulta = "DELETE  FROM libros WHERE lt_id_libro LIKE $1;"
    try {
        const id = req.params.id
        const respuesta = await db.query(consulta,[id])
        res.status(200).json({
            message:"El estudiante con identificación " +id+ "fue eliminado correctamente"
        })


    } catch (e) {
        res.status(400).json({
            code: e.code,
            message:"El libron no se a encontrado con esta identificación("
            +req.params.cedula +")."
        })
        
    }
}

module.exports={getlibros,getlibrosByid,postlibros,putlibros,deletelibro,getlibros_Nombres}