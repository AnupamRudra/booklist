const express = require('express');
const cors = require('cors')
const app = express();
const multer = require('multer')
const path = require('path');

const bookRouter = require('./router')

app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true
}));
app.use(express.json());

app.use('/api', bookRouter)

app.listen(8890, () => {
    console.log('connected')
})

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "../frontend/public/books");
    },
    filename: (req, file, cb) => {
        cb(
            null,
            file.fieldname + '_' + path.parse(file.originalname).name + "_" + Date.now() + path.extname(file.originalname)
        );
    },
});

const upload = multer({
    storage: storage,
});


app.use('/upload/book', upload.single('image'), (req, res) => {
    const file = req.file;
    res.status(200).json(file.filename);
});