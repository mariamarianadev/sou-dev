const categorias = require("./model")
function cadastrar(){
    return "Cadastrar de Categoria";
}

function buscar() {
    return JSON.stringify(categorias);    
}
function buscarUm(id){
    let busca = categorias.filter((cada) => {
        return cada.id ==id;
    })
    return JSON.stringify(busca);
}
function deletar(id){
    let novaLista = categoria.filter ((cada) =>{
        return cada.id != id;
    });
    categorias = novaLista;
}

module.exports = {
    buscar,
    cadastrar,
    buscarUm,
    deletar,
    };