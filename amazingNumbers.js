function amazingNumbers(number){
  number = number.toString();
  let sum = 0;
  for (let index = 0; index < number.length; index++) {
      sum+=Number(number[index]);
  }
  let result = sum.toString().includes('9');
  console.log(result ? `${number} Amazing? True`: `${number} Amazing? False`);  
  
}
amazingNumbers(999);