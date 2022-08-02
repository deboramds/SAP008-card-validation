const validator = {
  


isValid: (creditCardNumber) => {
  const numCard = creditCardNumber.split("").reverse()
  let retCard = 0;
   
  for (let i=0;i<numCard.length; i++){ 
  let transfCard = parseInt(numCard[i])

  if (i % 2 !==0 && transfCard >= 5){
    retCard = retCard + ((transfCard*2)-9)
    
  } 
  else if (i%2 !==0 && transfCard <5 ){
    retCard = retCard + (transfCard*2)

  }
  else {
  retCard =  retCard + transfCard 
  
  }
  }

  if (retCard %10===0) {
    return true
    

  }
   else {
    return false
   }
}
}

/*maskify: function (mascararNum) {
  const ultimosQuatroNum = 4
  let mascarar = ""
  for (let i = 0; i < mascararNum.length; i++) {
    if (i >= ((mascararNum.length) - ultimosQuatroNum)) {
      mascarar = mascarar + mascararNum.charAt(i)
    }
    else {
      mascarar = mascarar + "#"
    }
  }
  return mascarar
} */

export default validator; 