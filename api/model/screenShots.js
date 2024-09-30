const mongoose = require('mongoose')


const SSSchema = new mongoose.Schema({
    bookId: {
        type: String
    },
    title: {
        type: String
    },
    auther: {
        type: String
    },
    pictures: {
        type: String
    },
    description: {
        type: String
    }
}, { timestamps: true }) 


const PicsList = mongoose.model('pdf', SSSchema)

module.exports = PicsList