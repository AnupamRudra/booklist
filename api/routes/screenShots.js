const {  getPdfByReq, getPdf, destroy, storePdf } = require('../controller/screenShots')
const { bookSSUpload } = require('../middleware/bookPicture')

const router = require('express').Router();



router.post('/store', bookSSUpload.array('pictures[]'), storePdf)
router.get('/get', getPdf)
router.post('/getone', getPdfByReq)
router.delete('/delete/:id', destroy)


module.exports = router