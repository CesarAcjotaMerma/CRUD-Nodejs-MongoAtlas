const { Router } = require('express');

const router = Router();

const {indexGet} = require('../controller/index')

router.get('/',indexGet);

module.exports = router;