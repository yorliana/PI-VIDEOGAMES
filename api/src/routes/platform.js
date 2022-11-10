const { Router } = require('express');
const { Platform, Videogame } = require('../db.js');

const router = Router();


/**
 * Consigue todas las plataformas
 */
router.get('/',async(req,res) => {

    try {
        const instancias = await Platform.findAll();
        res.send(instancias);
    } catch (e) {
        next(e);
    }
    
})

/**
 * Post una nueva plataforma
 * @description publica una nueva plataforma con los datos enviados en los parámetros del cuerpo
 */
router.post('/videogames',async(req,res,next) => {

    const { name } = req.body;

    try {
        const newPlatform = await Platform.create({
            name,
        })
        res.status(201).send(newPlatform);

    }catch(e) {
        next(e);
    }

})

/**
 * Vincular una plataforma existente a un juego existente
 * @description Vincula la plataforma dada a un videojuego
 */
router.post('/:videogameId/platform/:platformId', async function(req, res,next) {
    try {
        
        const{ videogameId,platformId} = req.params;

        const videogame = await Videogame.findByPk(videogameId)
        await videogame.addPlatform(platformId)
        res.send(200)

    } catch (e) {
        
        next(e)
    }
})

/**
 * Actualizar una plataforma existente
 */
router.put('/videogames:id',async(req,res,next) => {

     const { name } = req.body;
     const id = req.params.id; 

     try {                                  
        const actualizar = await Platform.actualizar({name},{
            where: { id: id },
        })
        res.status(201).send(actualizar);
     } catch (e) {
         next(e);
     }
})

/**
 * Destruye una plataforma desde la base de datos.
 * @params {String} id - El id de la plataforma a destruir
 */
router.delete('/videogames:id',async(req,res,next) => {

    const { id } = req.params
        try {
            const eliminarPlatform = await Platform.eliminar({where: {id: id}})
            res.send(200)
        } catch (e) {
            next(e)
        }
    
})


module.exports = router;