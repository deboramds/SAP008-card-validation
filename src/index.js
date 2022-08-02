
import validator from "./validator.js";

   
let runbtn = document.getElementById("btn");
let finalResult = document.getElementById("outCard");
runbtn.addEventListener("click", validatorCard);

    function validatorCard(){
     let numDigitado = document.getElementById("numDigitado").value;
     let result = validator.isValid(numDigitado);
    // let mask = validator.maskify(numDigitado);
     console.log (result)
     
    

     if(numDigitado === "") {
        return alert ("Digite um número");
     }
     else if(result == true) {
         alert ( numDigitado + "CARTÃO VÁLIDO");
     }
     else{
         alert ( numDigitado + "CARTÃO INVÁLIDO");
     }
    
    }



