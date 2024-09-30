const mongoose = require('mongoose')


const bookSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    subTitle: {
        type: String
    },
    auther: {
        firstName: {
            type: String
        },
        lastName: {
            type: String
        }
    },
    bookType: {
        type: String
    },
    pages: {
        type: Number
    },
    copyNo: {
        type: Number
    },
    isbn: {
        type: String
    },
    accessionNo: {
        type: String
    },
    publisher: {
        type: String
    },
    version: {
        type: String
    },
    printer: {
        type: String
    },
    usabilityCondition: {
        type: String
    },
    price: {
        type: String
    },
    picture: {
        type: String
    },
    description: {
        type: String
    },
}, { timestamps: true })


const BookList = mongoose.model('books', bookSchema)

module.exports = BookList