// let pessoa = {
//     alturaa: 1.77,
//     pele: {
//         tom: "clara",
//         tipo: "oleosa"
//     },
//     olhos: "castanhos",
//     cabelo: "preto",
//     idade: 32
//     }
    
let produto = {
  nome: "arroz",
  preco: 4.69,
  qnt: 3,
  desconto: 0
}

let lista = [
    {
        nome: "arroz",
        preco: 4.69,
        qtd: 3,
        desconto: 0.20
    },
    {
        nome: "ovos",
        preco: 17.00,
        qdt: 1,
        desconto: 0
    }
]
for(let i = 0; i < lista.length; i++){
 
    document.write(lista[i].desconto+"<br>");
}