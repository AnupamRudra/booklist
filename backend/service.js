const pool = require('./database')
const uuid = require('uuid')


module.exports = {

    createBookEntry: (req, res) => {
        try {
            const { title, subtitle } = req.body;
            const id = uuid.v4()
            const insertQuery = 'INSERT INTO booklist(book_id, title, subtitle) VALUES (?, ?, ?)';

            pool.query(insertQuery, [id, title, subtitle], (error, results) => {
                if (error) {
                    return res.status(500).json({ error: 'Internal Server Error1' });
                }
                const selectQuery = 'SELECT * FROM booklist';

                pool.query(selectQuery, (err, result) => {
                    if (err) {
                        console.error(err);
                        return res.status(500).json({ error: 'Internal Server Error2' });
                    }

                    return res.status(200).json(result);
                });
            });
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'Internal Server Errors' });
        }
    },

    // addBooks: (req, res) => {
    //     const body = req.body;
    //     console.log(body);
    //     const insertQuery = 'INSERT INTO booklist(book_id, title, subtitle, auther, isbn, price, image, page_no, copy_no, accession_no, publishPlace, usabilityCondition, description) VALUES(?,?,?,?,?,?,?,?,?,?,?,?,?) '
    //     const id = uuid.v4();
    //     const data = [
    //         id,
    //         body.title,
    //         body.subTitle,
    //         body.firstName,
    //         body.isbn,
    //         body.price,
    //         body.image,
    //         body.pageNo,
    //         body.copyNo,
    //         body.accessionNo,
    //         body.publishPlace,
    //         body.usabilityCondition,
    //         body.description,
    //     ]

    //     pool.query(insertQuery, data, (error, result) => {
    //         if (error) res.status(400).json('Internal Error!')

    //         res.status(200).json(result)
    //     })
    // },

    getBooks: (req, res) => {
        const selectQuery = 'SELECT * FROM booklist';

        pool.query(selectQuery, (error, result) => {
            if (error) res.status(400).json('Internal server error!');

            res.status(200).json(result);
        })
    },

    getBooksBySearch: (req, res) => {
        const search = req.params.search;
        const selectQuery = `SELECT * FROM booklist WHERE auther LIKE '%${search}%' OR title LIKE '%${search}%' OR isbn LIKE '%${search}%'`;

        pool.query(selectQuery, (error, result) => {
            if (error) res.status(400).json('Internal server error!');

            res.status(200).json(result);
        })
    }
}