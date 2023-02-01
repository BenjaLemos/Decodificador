
const textArea = document.querySelector(".text-area");
const textMensagem = document.querySelector(".mensagem");

var segredos = ["ai", "enter", "imes", "ober", "ufat"];
var vogal = "aeiou";
var vogais = ["a", "e", "i", "o", "u"];
var nCodigos = [2, 5, 4, 4, 4];
var mensagemSecreta = "";
var posicao;

function btnEncriptar() {
  const textoEncriptado = codificar(textArea.value);
  textMensagem.value = textoEncriptado;
  textArea.value = "";
}

function btnDesencriptar() {
  const textoDesencriptado = decodificar(textArea.value);
  textMensagem.value = textoDesencriptado;
  textArea.value = "";
}

function btnCopiar() {
  if( textMensagem.value == "" ) {
    alert("Não existe mensagem para copiar");
  }
  else {
    textArea.value = textMensagem.value;
    textMensagem.value = "";
  }
}

function codificar(mensagemOriginal) {
      var letra = "";
      mensagemSecreta = "";  			

      mensagemOriginal = mensagemOriginal.toLowerCase();
      //alert(mensagemOriginal);
      
      for(var posicao = 0; posicao < mensagemOriginal.length; posicao++) {
        console.log("A letra no índice " + posicao + " é '" + mensagemOriginal.charAt(posicao)   + "'");

        letra = mensagemOriginal.charAt(posicao);
        if(vogal.search(letra) == -1) {
          mensagemSecreta = mensagemSecreta + letra;
          }
        else {
          mensagemSecreta = mensagemSecreta + segredos[vogal.search(letra)];
        }
        }
        console.log(mensagemOriginal + " secreta: " + mensagemSecreta);
        return mensagemSecreta;
}

function decodificar(mensagemSecreta) {
  var letras = "";   			

  //alert(mensagemSecreta);
    
  for(var codigos = 0; codigos < 5; codigos++) {
      /*console.log("A letra no índice " + codigos + " é '" + mensagem.charAt(posicao)   + "'");*/

    letras = segredos[codigos];
    var troca= true;

    while(troca){
      var posicao= mensagemSecreta.search(letras);
      //alert(posicao + " " + letras + " " + codigos);
      if( (posicao == -1) || (posicao == NaN)) {
        troca= false;      /*str.substring(indexStart[, indexEnd])*/
      }
      else {
        console.log(mensagemSecreta + " " + letras + " " + troca + " " + codigos);
        mensagemSecreta = mensagemSecreta.substring(0,posicao+1) + mensagemSecreta.substring(posicao+nCodigos[codigos], mensagemSecreta.length);
        troca= true;
        console.log(mensagemSecreta);
      }
    }
  }
  console.log(mensagemSecreta + " " + letras + " " + troca + " " + codigos);
  return mensagemSecreta; 
}

