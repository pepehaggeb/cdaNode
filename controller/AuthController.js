const User = require('../models/User')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')

const register = async (req, res) => {
    bcrypt.hash(req.body.password, 10, function(err, hashedPass) {
        if(err) {
            res.json({
                error: err
            })
        }
        let user = new User ({
            name: req.body.name,
            user: req.body.user,
            password: hashedPass
        })
        user.save()
        .then(user => {
            res.json({
                message: 'User Added Successfully!'
            })
        })
        .catch(error => {
            res.json({
                message: 'An error occured!'
            })
        })
    })
}

const login = (req, res) => {
    let user = req.body.user
    let password = req.body.password

    User.findOne({user: user})
    .then(user => {
        if(user) {
            bcrypt.compare(password, user.password, function(err, result) {
                if(err) {
                    res.json({
                        message: 'Usuario e senha não correspondem!',
                    })
                }
                if(result) {
                    let token = jwt.sign({name: user.name}, 'verySecretValue', {expiresIn: '1h'})
                    res.json({
                        message: 'Usuário Logado',
                        name: user.name,
                        token
                    })
                } else {
                    res.json({
                        message: 'Usuario e senha não correspondem!',
                    })
                }
        })
        } else {
            res.json({
                message: 'Usuario não encontrado!',
            })
        }
    })
}

module.exports = {
    register, login
}