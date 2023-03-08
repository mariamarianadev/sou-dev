function alterarNome(){
    nome.classList.remove('is-invalid')
   
    if (nome.value.length > 2) {
        nome.classList.add('is-valid');
    }
}

function alterarEmail(){
    email.classList.remove('is-invalid')
}
function alterarTel() {
    tel.classList.remove('is-invalid')
}
function alterarCid() {
    cid.classList.remove('is-invalid')
}

function validar() {
    //faz com que o formulario não seja enviado
    event.preventDefault(); 

    if (nome.value ==='') {
       // nome.style.borderColor = 'red';  
       nome.classList.add('is-invalid');
    }

    if (document.getElementById('email').value ==='') {
        email.classList.add('is-invalid');
    }

    if (document.getElementById('tel').value ==='') {
        tel.classList.add('is-invalid');    
    }

    if (document.getElementById('cid').value ==='') {
        cid.classList.add('is-invalid');
    }
}
