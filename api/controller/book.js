const BookList = require('../model/book')


const store = (req, res, next) => {
    const book = new BookList({
        title: req.body.title,
        subTitle: req.body.subTitle,
        auther: { firstName: req.body.firstName, lastName: req.body.lastName },
        bookType: req.body.bookType,
        pages: req.body.pages,
        copyNo: req.body.copyNo,
        isbn: req.body.isbn,
        publisher: req.body.publisher,
        version: req.body.version,
        printer: req.body.printer,
        usabilityCondition: req.body.usabilityCondition,
        price: req.body.price,
        description: req.body.description,
    })

    if (req.files) {
        let path = ''

        req.files.forEach((files, i, err) => {
            path = path + `/public/books/` + files.filename + ','
        })

        path = path.substring(0, path.lastIndexOf(','))
        book.picture = path
    }

    book.save().then(result => {
        res.json({ message: 'Book is stored' })
    }).catch(error => {
        res.json({ message: 'An error occured' })
    })
}

const getbooks = (req, res, next) => {
    BookList.find().then(response => {
        res.json({ response })
    }).catch(error => {
        res.json({ message: 'An error occured' })
    })
}

const update = (req, res, next) => {
    const bookId = req.params.bookId
    const book = {
        title: req.body.title,
        subTitle: req.body.subTitle,
        auther: { firstName: req.body.firstName, lastName: req.body.lastName },
        bookType: req.body.bookType,
        pages: req.body.pages,
        copyNo: req.body.copyNo,
        isbn: req.body.isbn,
        publisher: req.body.publisher,
        version: req.body.version,
        printer: req.body.printer,
        usabilityCondition: req.body.usabilityCondition,
        price: req.body.price,
        description: req.body.description,
    }

    if (req.files) {
        let path = ''

        req.files.forEach((files, i, err) => {
            path = path + `/public/books/` + files.filename + ','
        })

        path = path.substring(0, path.lastIndexOf(','))
        book.picture = path
    }

    BookList.findByIdAndUpdate(bookId, { $set: book }).then(response => {
        res.json({
            message: 'Updated',
            response
        })
    }).catch(error => {
        res.json({ message: 'An error occured' })
    })

}

const getBookBySearch = async (req, res, next) => {
    try {
        const search = req.params.search;

        // Perform the search
        BookList.find({
            $or: [
                { title: { $regex: new RegExp(search, 'i') } },
                { bookType: { $regex: new RegExp(search, 'i') } },
                { subTitle: { $regex: new RegExp(search, 'i') } },
                {
                    $or: [
                        { 'auther.firstName': { $regex: new RegExp(search, 'i') } },
                        { 'auther.lastName': { $regex: new RegExp(search, 'i') } }
                    ]
                }
            ]
        }).then(response => {
            res.json({ response })
        }).catch(error => {
            res.json({ message: 'An error occured' })
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getBookByType = async (req, res, next) => {
    try {
        const type = req.params.type;
        // Perform the search
        BookList.find({
            $or: [
                { bookType: { $regex: new RegExp(type, 'i') } },
            ]
        }).then(response => {
            res.json({ response })
        }).catch(error => {
            res.json({ message: 'An error occured' })
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const getSearch = async (req, res, next) => {
    try {
        const { type, search } = req.params;
        console.log(search)
        // Perform the search
        BookList.find({
            bookType: { $regex: new RegExp(type, 'i') },
            $or: [
                {
                    title: { $regex: new RegExp(search, 'i') }
                },
                {
                    subTitle: { $regex: new RegExp(search, 'i') }
                },
                {
                    $or: [
                        { 'auther.firstName': { $regex: new RegExp(search, 'i') } },
                        { 'auther.lastName': { $regex: new RegExp(search, 'i') } }
                    ]
                },
            ]
        }).then(response => {
            res.json({ response })
            console.log(response)
        }).catch(error => {
            res.json({ message: 'An error occured' })
        })
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
}

const destroy = (req, res, next) => {
    BookList.findByIdAndDelete(req.params.bookId).then(response => {
        res.json({ message: 'Deleted' })
    }).catch(error => {
        res.json({ message: 'An error occured' })
    })
}






module.exports = { store, getBookBySearch, getBookByType, getbooks, destroy, update, getSearch }