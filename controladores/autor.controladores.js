const {db }=require("../cnn")
//consultAS
const getautor=async(req,res)=>{
    const consulta = "SELECT * FROM autor;"
    const respuesta= await db.query(consulta)
    res.json(respuesta)
    
}
//buscar solo con lo id del libro nombre y apellido y ctaegoria

// buscar autor por identificación del libro
const getautorBYID = async (req, res)  =>{
    const consulta = "SELECT * from autor WHERE al_id_autor = $1;"
    try {
        const ID = req.params.id 
        const respuesta = await db. one(consulta,[ID])
        res.status(200).json(respuesta)

    } catch (error) {
        res.status(400).json({
            code: e.code,
            message:"No se a encontrado el autor con esta identificación("
            +req.params.id +")."
        })
        
    }

}
//ingresar autores
const postautor = async(req,res)=>{
    const consulta= "insert into autor (al_nombre, al_apellido, al_ciudad, al_pais) VALUES ($1,$2,$3,$4)RETURNING *;"
    try {
        const autor= req.body
    const respuesta = await db.one(consulta,[
        autor.nombre,
        autor.apellido,
        autor.ciudad,
        autor.pais
        
    ]);
    res.status(201).json({
        message: "Autor ingresado correctamente",
        body:respuesta
    })
    } catch (e) {
        res.status(400).json({
           code: e.code,
           message: e.message 
        })
        
    }
    
    

}

//funcion para actualizar autores
const putlautor = async(req,res)=>{
    const consulta= "update autor SET al_nombre =$2,al_apellido =$3,"
    + "al_ciudad= $4,al_pais=$5 WHERE al_id_autor= $1 RETURNING*;"
    try {
        const autor= req.body
    const respuesta = await db.one(consulta,[
        autor.id,
        autor.nombre,
        autor.apellido,
        autor.ciudad,
        autor.pais
    ]);
    res.status(200).json({
        message: "Autor actualizado correctamente",
        body:respuesta
    })
    } catch (e) {
        res.status(400).json({
           code: e.code,
           message: e.message 
        })
        
    }
        
}

//funcion para eliminar autores
const deleteautor=  async (req,res)=>{
   
    const consulta = "DELETE  FROM autor WHERE al_id_autor LIKE $1;"
    try {
        const id = req.params.id
        const respuesta = await db.query(consulta,[id])
        res.status(200).json({
            message:"El autor con identificación " +id+ "fue eliminado correctamente"
        })


    } catch (e) {
        res.status(400).json({
            code: e.code,
            message:"El libron no se a encontrado con esta identificación("
            +req.params.cedula +")."
        })
        
    }
}
module.exports={getautor, getautorBYID,postautor,putlautor,deleteautor}