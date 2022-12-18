const { Router } = require('express');
const dogsPath = require('./paths/dogsPath');
const tempPath = require('./paths/tempPath');
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');



const router = Router();
router.use('/dogs', dogsPath)
router.use('/temps', tempPath)



// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);


module.exports = router;
