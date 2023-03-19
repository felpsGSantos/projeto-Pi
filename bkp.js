

function aparenteElemento() {
    /*document.querySelector("form").style = "display:none"*/
    document.querySelector("#caixa_pin").style = "display:block"
    document.querySelector(".conteudo").style = "height: 602px;"
}

function fecharElemento() {
    /*document.querySelector("form").style = "display:block"*/
    document.querySelector("#caixa_pin").style = "display:none"
    document.querySelector(".conteudo").style = "height: 429px;"

}

const input = document.getElementById("telefone");

input.addEventListener("keyup", formatarTelefone);

function formatarTelefone(e){

var v=e.target.value.replace(/\D/g,"");

v=v.replace(/^(\d\d)(\d)/g,"($1)$2"); 

v=v.replace(/(\d{5})(\d)/,"$1-$2");    

e.target.value = v;

 

}


