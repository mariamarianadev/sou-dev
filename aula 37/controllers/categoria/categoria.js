function cadastrar(){
    return "Cadastrar de Categoria";
}

function buscar() {
    return JSON.stringify([
        {
            id: 1,
            nome: 'Blusas'
        },
        {
            id: 2,
            nome: 'Calças'
        }
    ]);
}

module.exports = {
    buscar,
    cadastrar,
    };