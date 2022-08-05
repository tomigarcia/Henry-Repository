'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let sumaTotal = 0
  for(let i = 0; i < num.length ; i++) {
    sumaTotal= sumaTotal + Math.pow(2 , num.length - i - 1) * num[i]

  }
  return sumaTotal;
}

function DecimalABinario(num) {
  //div el numero hasta llegar a 0
  let result = [] 
  while (num > 0) {
    result.push(num%2);
    num = Math.floor(num/2);
  }
  
  return result.reverse().join('');



}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}