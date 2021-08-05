const Codigo = require('../models/CodigoPenal')

const addCodigo = async (req, res) => {
    let codigo = new Codigo ({
        name: req.body.name,
        description: req.body.description,
        multa: req.body.multa,
        tempo: req.body.tempo,
        status: req.body.status,
    })

    codigo.save()
    .then(codigo => {
        res.json({
            message: 'Código Penal cadastrado com sucesso'
        })
    })
    .catch(error => {
        res.json({
            message: 'Um erro ocorreu! Tente novamente!'
        })
    })
}

const getCodigos = (req, res) => {
    Codigo.find({}, (err, result) => {
        if(err) {
            res.send(err)
        }
        res.send(result);
    })
}

const deleteCodigo = async (req, res) => {
    const id = req.params.id;
    res.send(id)

    await Codigo.findByIdAndRemove(id).exec();
    res.send("deleted")
}

const updateCodigo = async (req, res) => {
    const id = req.body.id;
    const nameUp = req.body.name;
    const descriptionUp = req.body.description;
    const multaUp = req.body.multa;
    const tempoUp = req.body.tempo;
    const statusUp = req.body.status
    
    try {
        await Codigo.findById(id, (err, updatedCodigo) => {
            updatedCodigo.name = nameUp;
            updatedCodigo.description = descriptionUp;
            updatedCodigo.multa = multaUp;
            updatedCodigo.tempo = tempoUp;
            updatedCodigo.status = statusUp;
            updatedCodigo.save()
            res.json({
                message: 'Código Penal Atualizado com Sucesso!'
            })
        })
    } catch (err) {
        console.log(err)
    }
}

module.exports = {
    addCodigo, getCodigos, deleteCodigo, updateCodigo
}