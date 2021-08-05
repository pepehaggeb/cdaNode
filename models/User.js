const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    name: {
        type: String, 
    },
    user: {
        type: String, 
    },
    password: {
        type: String, 
    },
    id: {
        type: String, 
        default: 1,
    },
    created_at: {
        type: Date,
        default: new Date(),
    }
}, {timestamps: true})

const User = mongoose.model('User', userSchema)
module.exports = User