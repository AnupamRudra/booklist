const Admin = require('../model/admin')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const createAdmin = (req, res, next) => {
    bcrypt.hash(req.body.password, 10, (err, hashPass) => {
        if (err) {
            res.json({ error: err })
        } else {
            const admin = new Admin({
                username: req.body.name,
                email: req.body.email,
                password: hashPass
            })

            admin.save().then(response => {
                res.json({ message: 'Admin Created' })
            }).catch(error => {
                res.json({ message: 'Error to create Admin' })
            })
        }
    })
}


const login = (req, res, next) => {
    Admin.findOne({ email: req.body.email }).then(admin => {
        if (admin) {
            bcrypt.compare(req.body.password, admin.password, (error, result) => {
                if (error) res.json({ message: 'Error in password verification' })
                if (result) {
                    let token = jwt.sign({ username: admin.username }, 'secretAdminKey', { expiresIn: '1h' })
                    res.json({
                        message: 'Login Success',
                        token,
                        admin
                    })
                } else {
                    res.json({message: 'Password does not match'})
                }
            })
        } else {
            res.json({message: 'Admin is not exist'})
        }
    }).catch(error => {
        res.json({message: 'An Error to find admin'})
    })
}


module.exports = { createAdmin, login }
