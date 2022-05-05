const atendimentos = require('../controllers/atendimentoController');



module.exports = (app) => {

    app.get('/atendimentos', (req, res) => {
        // res.send("deu um get")
        atendimentos.listaAtendimentos(req, res)
    });

    app.get('/atendimentos/:id', (req, res) => {
        atendimentos.buscaPorId(req, res);
    });

    app.post('/atendimentos', (req, res) => {
        atendimentos.adicionaAtendimento(req, res)
    });

    app.patch('/atendimentos/:id', (req, res) => {
        atendimentos.altera(req, res)
    });

    app.delete('/atendimentos/:id', (req, res) => {
        atendimentos.deleta(req, res);
    });

};