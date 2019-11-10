const mysql = require('mysql');

/* 
TABELA DE TESTE CRIADA

NOME: examples
ATRIBUTOS: 	id (INT)
			title (VARCHAR)		
				
*/

//Cria a conexão com o Banco de Dados
var mysqlConnection = mysql.createConnection({
	host: 'localhost',
	user: 'root',
	password: '',
	database: 'example',
});

//Testa a conexão
mysqlConnection.connect((err)=>{
	if(!err)
		console.log('DB connection succeded.')
	else
		console.log('DB connection failed \n Error: ' + JSON.stringify(err, undefined, 2)); //Imprime o erro
});

module.exports = mysqlConnection;