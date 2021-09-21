let email = document.querySelector('#email')
let mensagem = document.querySelector('#mensagem')
let emailOk = false
let mensagemOk = false


function validaEmail(){
    let txtEmail = document.querySelector('#txtEmail')

    if (email.value.indexOf('@') == -1 || email.value.indexOf('.') == -1){
        txtEmail.innerHTML = "Email Inválido"
        txtEmail.style.color = 'red'
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
    if (emailOk == true && mensagemOk == true){
        alert ("Formulário enviado com sucesso")
    } else {
        alert ("Formulário inválido. Revise os campos e atribua valores aceitáveis.")
    }
}

function mapaZoom(){
    mapa.style.width = '800px'
    mapa.style.height = '600px'
}

function mapaNormal(){
    mapa.style.width = '400px'
    mapa.style.height = '250px'
}