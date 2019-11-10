//Importa todos os módulos
const express = require('express');
const cors = require('cors');

//Inicia a Aplicação
const app = express();

//Permite o envio de dados para a aplicação no formato de Json
app.use(express.json());

//Libera permissão de acesso para qualquer IP
app.use(cors(/* IP */));

//"use" aceita todos os tipos de requisições
app.use('/', require("./src/routes"));

//Sobe o servidor em uma porta local
let port = process.env.PORT || 3000;
app.listen(port, function () {
    console.log('Servidor funcionando em ' + port);
});