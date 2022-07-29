
const validator = { isValid, maskify } // funções

function isValid(creditCardNumber) {
  const transfCard = creditCardNumber.split("").reverse();
  //let transfCard = Array.from(revCard);
  let retCard = 0;

  for (let i = 0; i < transfCard.length; i++) {
    let numCard = parseInt(transfCard[i])

    if (i % 2 !== 0 && numCard >= 5) {
      retCard = retCard + (numCard * 2) - 9;
      console.log("1")
    }
    else if (i % 2 == 0 && numCard <= 5) {
      retCard = retCard + (numCard * 2);
      console.log("2")
    }
    else {
      retCard = retCard + numCard;
      console.log("3")
    }
  }

  if (retCard % 10 === 0) {
    return true
  }
  else {
    return false
  }
}


maskfy (creditCardNumber)
 {
let maskCreditCardNumber = Array.from (creditCardNumber);
const lastFourNumbers = 4

for (let i = 0; 1 < maskCreditCardNumber.length - lastFourNumbers; i++) {
maskCreditCardNumber [i] ="#"
}

const joiningArrayCreditCardNumber = maskCreditCardNumber.join ('');
return joiningArrayCreditCardNumber
}
