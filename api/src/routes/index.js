const { Router } = require('express');
const dogsPath = require('./paths/dogsPath');
const tempPath = require('./paths/tempPath');
const router = Router();

router.use('/dogs', dogsPath)
router.use('/temps', tempPath)


module.exports = router;
