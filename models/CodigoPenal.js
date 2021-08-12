const mongoose = require('mongoose');
const Schema = mongoose.Schema
const format = require('date-fns/format')

const DateOne = new Date().toISOString()
const DateCorrigido = format(new Date(DateOne), 'dd/MM/yy')
console.log(DateCorrigido)

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
        type: Boolean,
    },
    created_at: {
        type: String,
        default: DateCorrigido,
    }
})

const Codigo = mongoose.model('Codigo', codigoSchema)
module.exports = Codigo;