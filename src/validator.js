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

},


maskify: (creditCardNumber) => {
  return creditCardNumber.replace(/.(?=.{4})/g, "#");
  
}

}



export default validator; 