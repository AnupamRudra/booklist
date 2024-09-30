const multer = require('multer')
const path = require('path')
const fs = require('fs');





const storage = multer.diskStorage({
    // destination: (req, file, cb) => {
    //     const directory = `./${req.body.firstName + req.body.lastName}`;
    //     const dirPath = path.join('../frontend/public/books', directory);

    //     if (fs.existsSync(dirPath)) {
    //         const newDir = `./${req.body.title}`;
    //         const newDirPath = path.join(dirPath, newDir);

    //         if (!fs.existsSync(newDirPath)) {
    //             fs.mkdirSync(newDirPath, { recursive: true });
    //             cb(null, newDirPath)
    //         } else {
    //             cb(null, newDirPath)
    //         }
    //     }
    //     else {
    //         const newDir = `./${req.body.title}`;
    //         const newDirPath = path.join(dirPath, newDir);
    //         fs.mkdirSync(newDirPath, { recursive: true });
    //         cb(null, newDirPath)
    //     }
    // },
    destination: (req, file, cb) => {
        cb(null, '../frontend/public/books')
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var upload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/jpeg'
        ) {
            cb(null, true)
        } else {
            console.log('Only JPG, JPEG, and PNG file supported!')
            cb(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})


const storage1 = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, '../frontend/public/book pdf')
    },
    filename: (req, file, cb) => {
        let ext = path.extname(file.originalname)
        cb(null, Date.now() + ext)
    }
})

var bookSSUpload = multer({
    storage: storage1,
    fileFilter: (req, file, cb) => {
        if (
            file.mimetype == 'image/png' ||
            file.mimetype == 'image/jpg' ||
            file.mimetype == 'image/jpeg'
        ) {
            cb(null, true)
        } else {
            console.log('Only JPG, JPEG, and PNG file supported!')
            cb(null, false)
        }
    },
    limits: {
        fileSize: 1024 * 1024 * 2
    }
})


module.exports = { upload, bookSSUpload }
