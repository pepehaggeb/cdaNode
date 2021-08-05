const express = require('express')
const router = express.Router()

const CodigoController = require('../controller/CodigoController')

router.post('/adicionar', CodigoController.addCodigo)
router.get('/receber', CodigoController.getCodigos)
router.delete('/remover/:id', CodigoController.deleteCodigo)
router.put('/atualizar', CodigoController.updateCodigo)

module.exports = router