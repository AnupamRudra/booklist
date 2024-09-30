const { store, loginUser } = require('../controller/user');

const router = require('express').Router();



router.post('/signup', store)
router.post('/login', loginUser)



module.exports = router