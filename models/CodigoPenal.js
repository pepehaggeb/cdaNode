const mongoose = require('mongoose');
const Schema = mongoose.Schema

const codigoSchema = new Schema({
    name: {
        type: String,
    },
    description: {
        type: String,
    },
    multa: {
        type: Number,
        default: 0,
    },
    tempo: {
        type: Number,
        default: 0,
    },
    status:{
        type: Number,
    }
})

const Codigo = mongoose.model('Codigo', codigoSchema)
module.exports = Codigo;