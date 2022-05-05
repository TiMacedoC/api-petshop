const mongoose = require('mongoose')

const atendimentoSchema = new mongoose.Schema(
    {
        id: { type: String },
        cliente: { type: String, required: true },
        cpf: { type: String, required: true },
        pet: { type: String, required: true },
        servico: { type: String, required: true },
        data: { type: Date, required: true },
        status: { type: String },
    },
    {
        versionKey: false
    }
)

const atendimentos = mongoose.model('atendimento', atendimentoSchema)

module.exports = atendimentos;
