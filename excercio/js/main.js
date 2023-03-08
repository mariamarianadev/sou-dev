//import listar from "./listar.js";
//import listar from "./cadastro.js";
//import listar from "./relatorio.js"

function alterarConteudo(x){
    //if (x === 'listar'){
    //    alert(listar());
    //} else if (x === 'cadastro'){
    //    alert(cadastro());
    //} else if (x== 'relatorio'){
    //    alert(relatorio());
   // }
   conteudo.innerHTML = window[x]();
}