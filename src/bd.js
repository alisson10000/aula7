

/*
// Cria vários objetos e os adiciona a um array para simular uma lista de objetos

*/
const bdUsuarios = []
const bdTarefas = []




class Usuario {
    constructor(nome, email, senha) {
        this.nome = nome;
        this.email = email;
        this.senha = senha;



    }
}

class Tarefa {
    constructor(titulo, descricao, fazer, dia) {
        this.titulo = titulo;
        this.descricao = descricao;
        this.fazer = fazer;
        this.dia = dia;


    }
}




// Cria um objeto do tipo Usuario e adiciona a lista de usuarios
const usuario = new Usuario('Anderson Santos', 'anderson@resilia', '321654')
bdUsuarios.push(usuario)




// Cria um objeto do tipo Usuario e adiciona a lista de usuarios
const usuario2 = new Usuario('Mario Sergio', 'mario@resilia', '789456')
bdUsuarios.push(usuario2)

// Cria um objeto do tipo Tarefa e adiciona a lista de tarefas
const tarefa = new Tarefa('Formulario de requisitos', 'Análise para obter as regras de negócio', 'A fazer', new Date())
bdTarefas.push(tarefa)
// Cria um objeto do tipo Tarefa e adiciona a lista de tarefas
const tarefa2 = new Tarefa('Grafico de gantt ', 'Cronograma das atividades', 'A fazer', new Date())
bdTarefas.push(tarefa2)

// Exporta as listas de objetos
module.exports = { bdUsuarios, bdTarefas }