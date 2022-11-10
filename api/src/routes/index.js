
const { Router } = require('express');
const { list, detail, storage,platform } = require  ('../controllers/Videogame');
const { genres } = require ('../controllers/Genre')


// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');


const router = Router();

// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


router.get('/videogames', list );

router.get('/videogames/:id', detail);
router.get('/videogames', storage );
router.get('/genres', genres );
router.get('/platform, platform');
module.exports = router;