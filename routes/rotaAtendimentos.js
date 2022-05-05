const atendimentos = require('../controllers/atendimentoController');



module.exports = (app) => {

    app.get('/', (req, res) => {
        atendimentos.listaAtendimentos(req, res)
    });

    app.get('/:id', (req, res) => {
        atendimentos.buscaPorId(req, res);
    });

    app.post('/', (req, res) => {
        atendimentos.adicionaAtendimento(req, res)
    });

    app.patch('/:id', (req, res) => {
        atendimentos.altera(req, res)
    });

    app.delete('/:id', (req, res) => {
        atendimentos.deleta(req, res);
    });

};