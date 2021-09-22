let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let nome = document.querySelector('#nome')
let emailOk = false
let mensagemOk = false
let nomeOk = false

function validaNome(){
    let txtNome = document.querySelector('#txtNome')

    if (nome.value.length < 3) {
        txtNome.innerHTML = "Nome Inválido"
        txtNome.style.color = "red"
        nomeOk = false
    } else {
        txtNome.innerHTML = "Nome Válido"
        txtNome.style.color = "green"
        nomeOk = true
    }
}

function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = 'red'
        emailOk = false
    } else{
        txtEmail.innerHTML = "Email Válido"
        txtEmail.style.color = 'green'
        emailOk = true
    }
}

function validaMensagem(){
    let txtMensagem = document.querySelector('#txtMensagem')

    if (mensagem.value.length >= 200){
        txtMensagem.innerHTML = "O tamanho ultrapassou o valor máximo de 200 caracteres"
        txtMensagem.style.color = "red"
        txtMensagem.style.display = 'block'
        mensagemOk = false
    } else {
        txtMensagem.style.display = 'none'
        mensagemOk = true
    }
}

function enviar(){
    if (emailOk == true && mensagemOk == true && nomeOk == true){
        alert ("Formulário enviado com sucesso")
    } else {
        alert ("Formulário inválido. Revise os campos e atribua valores aceitáveis.")
    }
}