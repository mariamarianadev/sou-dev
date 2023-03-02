// document.write("<h1> Olá mundo</h1>")
// document.write("<p> nosso paragrafo</p>")
// document.write('<button class="btn btn-primary"> meu botão </button>')

// nosso primeiro chatbot


// alert("Oi sumida");

// let resposta = prompt("");

// if(resposta == "oi"){
//     alert("Eita como ela tá fria..");
// }
// alert("Tá tudo bem?");

// let resposta2 = prompt("")

// if(resposta2 == "tudo"){
//     alert("tá muito ocupada né?");
// }else{
//     alert("tá fazendo oq?")
//     let resposta3 = prompt("");
//     if (resposta3 == "nada")
// }

//nosso chat bot - 
let conversas = document.querySelector(".conversas");
let botao = document.querySelector(".btn");
let respostas = document.querySelector("#respostas");

conversas.innerHTML = "<div> Olá seja bem-vindo em que posso lhe ajudar?</div";
setTimeout( () => {
conversas.innerHTML += "<div> 1. Financeiro <br> 2. Academico <br> 3. Comercial</div>";
}, 2000);

botao.addEventListener("click", () => {
    switch (respostas.value){
        case "1":
        conversas.innerHTML += "<div> Entendi, você escolheu Financeiro</div>";
        break;
        case "2":
        conversas.innerHTML += "<div> Entendi, você escolheu Academico</div>";
        break;
        case "3":
        conversas.innerHTML += "<div> Entendi, você escolheu Comercial</div>";
        break;
    }
});