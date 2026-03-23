function solve(num1,num2,operator){
   let operation;
    switch (operator) {
    case `multiply`:
       operation = (a,b) => a * b;
        break;
    case 'add':
        operation = (a,b) => a + b;
    break;
    case `subtract`:
        operation = (a,b) => a - b;
        break;
    case `divide`:
        operation = (a,b) => a / b;
        break;
   }
   let result = operation(num1,num2)
   console.log(result);
}
solve(2,4,'add')