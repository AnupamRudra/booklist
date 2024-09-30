const Users = require('../model/user')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')


const store = (req, res, next) => {
    mongoose.connection.db.listCollections({ name: 'users' })
        .next((err, collinfo) => {
            if (err) {
                return res.json({ message: 'An error occurred while checking for the collection', error: err });
            }

            // If the collection exists, proceed with user registration logic
            if (collinfo) {
                Users.findOne({ email: req.body.email }).then(response => {
                    if (response) {
                        return res.json({ message: 'User already exists' });
                    } else {
                        // Hash the password
                        bcrypt.hash(req.body.password, 10, (err, hashPass) => {
                            if (err) {
                                return res.json({ error: err });
                            } else {
                                // Create a new user object
                                const user = new Users({
                                    username: req.body.username,
                                    email: req.body.email,
                                    password: hashPass
                                });

                                // Save the user
                                user.save().then(result => {
                                    // Generate JWT token
                                    let token = jwt.sign({ username: user.username }, 'secretAccessToken', { expiresIn: '1h' });
                                    return res.json({
                                        message: 'You have successfully registered!',
                                        token,
                                        user
                                    });
                                }).catch(error => {
                                    return res.json({ message: 'An error occurred while saving the user', error });
                                });
                            }
                        });
                    }
                }).catch(error => {
                    return res.json({ message: 'An error occurred while finding the user', error });
                });
            } else {
                // If the 'Users' collection doesn't exist, inform the user or handle it differently.
                return res.json({ message: 'The Users collection does not exist' });
            }
        });
}


const loginUser = (req, res, next) => {
    Users.findOne({ email: req.body.email }).then(user => {
        if (user) {
            bcrypt.compare(req.body.password, user.password, (error, result) => {
                if (error) { res.json({ Error: 'Error in password comparision' }) }
                if (result) {
                    let token = jwt.sign({ username: user.username }, 'secretAccessToken', { expiresIn: '1h' })
                    res.json({
                        message: 'Login Success',
                        token,
                        user
                    })
                } else {
                    res.json({ message: 'Password does not match' })
                }
            })
        } else {
            res.json({ message: 'User is not exist' })
        }
    }).catch(error => {
        res.json({ message: "Error to login" })
    })
}



module.exports = { store, loginUser }