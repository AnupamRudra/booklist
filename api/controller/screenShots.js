const PicsList = require('../model/screenShots')


const storePdf = (req, res, next) => {
    PicsList.findOne({ title: req.body.title, auther: req.body.auther }).then(result => {
        if (result) {
            res.json({ message: `PDF of ${req.body.title} book is already available!` })
        } else {

            const data = new PicsList({
                bookId: req.body.bookId,
                title: req.body.title,
                auther: req.body.auther,
                description: req.body.description
            })

            if (req.files) {
                let path = ''
                req.files.forEach((files, i, err) => {
                    path = path + `/public/book pdf/` + files.filename + ','
                })
                path = path.substring(0, path.lastIndexOf(','))
                data.pictures = path
            }

            data.save().then(response => {
                res.json({ response })
            }).catch(error => {
                res.json({ message: 'Something error!' })
            })
        }
    }).catch(error => {
        res.json({ message: 'Error in find block' })
    })
}

const getPdf = (req, res, next) => {
    PicsList.find().then(result => {
        res.json({ result })
    }).catch(error => {
        res.json({ message: 'Error to find pdf' })
    })
}

const getPdfByReq = (req, res, next) => {
    const { title, auther } = req.body

    PicsList.findOne({ title: title, auther: auther }).then(result => {
        res.json({ result })
        console.log(result)
    }).catch(error => {
        res.json({ message: 'Error to find pdf' })
    })
}


const destroy = (req, res, next) => {
    const id = req.params.id
    PicsList.findByIdAndDelete(id).then(response => {
        res.json({ message: 'Deleted' })
    }).catch(error => {
        res.json({ message: 'Error to delete' })
    })
}


module.exports = { storePdf, getPdf, getPdfByReq, destroy }