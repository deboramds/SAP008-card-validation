
import validator from "./validator.js";

   
let runbtn = document.getElementById("btn");
runbtn.addEventListener("click", validatorCard);

    function validatorCard(){
     let numDigitado = document.getElementById("numDigitado").value;
     let result = validator.isValid(numDigitado);
     let cardMaskify = validator.maskify(numDigitado);
     console.log (result)
     
    

     if(result === "") {
        return alert ("Digite um número");
     }
     else if(result == true) {
         alert ( cardMaskify + " CARTÃO VÁLIDO");
     }
     else{
         alert ( cardMaskify + " CARTÃO INVÁLIDO");
     }
    
    }
    


