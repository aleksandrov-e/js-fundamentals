function calc(number,operator,secondNumber){
  if(operator === "+"){
    console.log((number + secondNumber).toFixed(2))
  }else if(operator === "-"){
    console.log((number - secondNumber).toFixed(2));
  }else if(operator ==="/"){
    console.log((number / secondNumber).toFixed(2));
  }else if(operator === "*"){
    console.log((number * secondNumber).toFixed(2));
  }
  
  console.log("---------------------");

  switch(operator){
    case "+":console.log((number + secondNumber).toFixed(2));
    break;
    case "-":console.log((number - secondNumber).toFixed(2));
    break;
    case "/":console.log((number / secondNumber).toFixed(2));
    break;
    case "*": console.log((number * secondNumber).toFixed(2));
    break;
  }
}
calc(5,`+`,10)