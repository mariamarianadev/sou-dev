function cadastrar(){
    return "Cadastrar Cliente";
}

function buscar() {
    return JSON.stringify([
        {
            id: 1,
            nome: 'Claudia'
        },
        {
            id: 2,
            nome: 'Vinicius'
        }
    ]);
}

module.exports = {
    buscar,
    cadastrar,
    };