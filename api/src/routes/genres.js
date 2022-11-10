const { default: axios } = require('axios');
const { Router } = require('express');
const { Genre } = require('../db.js');

const router = Router();

// Obtener todos los géneros disponibles en la base de datos
 
router.get('/', async(req, res) => {
    try {
        const instancias = await Genre.findAll();
        res.send(instancias);
    } catch (e) {
        next(e);
    }

})

//Obtener un género específico de la base de datos* @params {String} id - id del género a recuperar
router.get('/:id', async(req, res, next) => {

    const id = req.params.id;

    try {
        let instanciado = await axios.get(`https://api.rawg.io/api/genres/${id}?key=` + API)
        res.send(instanciado.data);
    } catch (e) {
        next(e);
    }

})


/**
 * Crear un nuevo género
 * @description publica un nuevo género con los datos enviados en los parámetros del cuerpo
 * @params { String } nombre - nombre del nuevo género
 */
router.post('/', async(req, res, next) => {

    const { name } = req.body;

    try {
        const newGenre = await Genre.create({
        name
    });
    res.status(201).send(newGenre);

    } catch (e) {
        next(e);
    }

})
/**
 * Actualizar un género existente
 * @params {String} id - id del género de actualización
 */
router.put('/:id', async(req, res, next) => {

        const { name } = req.body;
        const id = req.params.id;

        try {
            const actualizar = await Genre.update({ name }, {
                where: { id: id },
            })
            res.status(201).send(actualizar);
        } catch (e) {
            next(e);
        }
    })

/**
 * eliminar  un genero de la db
 * @params {String} id - El id del género a destruir
 */
router.delete('/:id', async(req, res, next) => {

    const { id } = req.params
    try {
        const eliminardGenre = await Genre.eliminar({ where: { id: id } })
        res.send(200)
    } catch (e) {
        next(e)
    }

})



module.exports = router;
