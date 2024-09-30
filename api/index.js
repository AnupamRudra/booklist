const express = require('express')
const mongoose = require('mongoose')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv').config();

const bookRouter = require('./routes/book')
const pdfRouter = require('./routes/screenShots')
const userRouter = require('./routes/user')
const adminRouter = require('./routes/admin')

mongoose.connect('mongodb://localhost:27017/books')

const db = mongoose.connection

db.on('error', (err) => {
    console.log(err)
})

db.once('open', () => {
    console.log('Connected')
})

const app = express()

const corsOptions = {
    origin: process.env.ORIGIN,
    credentials: true            //access-control-allow-credentials:true
}

app.use(cors(corsOptions))
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

const PORT = process.env.PORT || 8001
app.listen(PORT, () => {
    console.log(`DB connected on port ${PORT}`)
})


app.use('/book', bookRouter)
app.use('/book/pdf', pdfRouter)
app.use('/user', userRouter)
app.use('/admin', adminRouter)



