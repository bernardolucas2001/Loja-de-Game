//efeito do botão voltar ao Topo
function topo(){
    window.scrollTo(
        {
            top:0,
            left:0,
            behavior:'smooth'
        }
    )
}
//Validação de Login
function login(){
    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == 'bernardo' && senha == '654321'){
        window.location = 'index.html';
        logado = 1;
    }

    if(logado == 0){
        alert("Erro ao logar. Acesso negado por erro ");
    }
}

//Ativar alert no botão cadastrar
function cadastro(){
    alert("Cadastro realizado com sucesso!");
    window.location = 'index.html';
}
