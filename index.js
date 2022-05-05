const customExpress = require('./config/customExpress.js');
const dbConnection = require('./config/dbConnection.js');
const rotaAtendimentos = require('./routes/rotaAtendimentos')

dbConnection()

const port = process.env.PORT || 3000

const app = customExpress();

app.listen(port, () => console.log(`rodando na porta ${port}`));

rotaAtendimentos(app)





