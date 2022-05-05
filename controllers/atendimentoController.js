const atendimentos = require('../models/atendimentos.js')

class Atendimento {

    listaAtendimentos(req, res) {
        atendimentos.find((error, atendimentos) => {
            if (error) {
                res.status(500).send(error)
            } else {
                res.status(200).send(atendimentos)
            }
        })
    }

    buscaPorId(req, res) {
        const { id } = req.params
        atendimentos.findById(id, (error, atendimento) => {
            if (!atendimento) {
                res.status(400).send(error)
            } else {
                res.status(200).send(atendimento)
            }
        })
    }

    adicionaAtendimento(req, res) {
        const atendimento = new atendimentos(req.body)

        atendimento.save((error) => {
            if (error) {
                res.status(500).send({ error })
            } else {
                res.status(201).send(atendimento.toJSON())
            }
        })
    }

    altera(req, res) {
        const id = req.params.id;
        const alteracoes = req.body;

        atendimentos.findByIdAndUpdate(id, { $set: req.body }, (error) => {
            if (error) {
                res.status(500).send(error)
            } else {
                atendimentos.findById(id, (__, atendimento) => {
                    res.status(200).send(atendimento)
                })
            }
        })

    }

    deleta(req, res) {
        const { id } = req.params
        atendimentos.findByIdAndDelete(id, (error) => {
            if (error) {
                res.status(500).send(error)
            } else {
                res.send({ message: "Atendimento apagado com sucesso" })
            }
        })
    }




}

module.exports = new Atendimento()