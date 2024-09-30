const { getBooks, getBooksBySearch, createBookEntry } = require('./service')

const router = require('express').Router()


router.post('/book/add', createBookEntry)
router.get('/books', getBooks)
router.get('/books:search', getBooksBySearch)


module.exports = router