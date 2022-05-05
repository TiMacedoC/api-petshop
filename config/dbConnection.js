const mongoose = require("mongoose")

module.exports = () => {
    const uri = `mongodb+srv://timacedoc:tiago1993@cluster0.u7lqu.mongodb.net/petshop`

    mongoose.connect(uri)

    let db = mongoose.connection

    db.on("error", console.log.bind(console, 'Erro de conexão'))
    db.once("open", () => {
        console.log("Conexão com o banco feita com sucesso");
    })
}