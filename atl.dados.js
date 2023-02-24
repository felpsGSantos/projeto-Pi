/*
function aumentaTamanho() {
    document.getElementById("conteudo").style = "height:600px";
   
}
*/
/*
function aparenteElemento() {

    document.getElementById("caixa_pin").style = "display:block";
    
}
*/

function aparenteElemento() {

    document.querySelector("#caixa_pin").style = "display:block"
    document.querySelector(".conteudo").style = "height: 559px;"
}

function fecharElemento() {

    document.querySelector("#caixa_pin").style = "display:none"
    document.querySelector(".conteudo").style = "height: 429px;"

}