const { createAdmin, login } = require('../controller/admin');

const router = require('express').Router();




router.post('/register', createAdmin)
router.post('/login', login)


module.exports = router