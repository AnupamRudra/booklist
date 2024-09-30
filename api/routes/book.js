const { store, getBookBySearch, getbooks, destroy, update, getBookByType, getSearch } = require('../controller/book');
const { upload } = require('../middleware/bookPicture');

const router = require('express').Router();



router.post('/store', upload.array('picture[]'), store)
router.get('/get/search/:search', getBookBySearch)
router.get('/get/type/:type', getBookByType)
router.get('/get/type/:type/:search', getSearch)
router.post('/update/:bookId', upload.array('picture[]'), update)
router.get('/get/', getbooks)
router.delete('/delete/:bookId', destroy)


module.exports = router