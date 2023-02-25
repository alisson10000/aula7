// Importando o packages
const Express = require('express')

// instanciando o servidor
const app = Express()

// configurando o servidor para receber requisições com o corpo no formato JSON
app.use(Express.json())

// importando os controllers
const usuarioController = require('./controllers/usuarioController') 
const tarefaController = require('./controllers/tarefaController') 

usuarioController.rotas(app)
tarefaController.rotas(app)

// escolhendo a porta em que o servidor será aberto
const port = 3000

// abrindo o servidor na porta escolhida
app.listen(port, function(req,res){
    console.log(`Server rodando em http://localhost:${port}/`)
})