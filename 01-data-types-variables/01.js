function sumDigits(num){
   let sum = 0;
   let str = num.toString();
    for (let index = 0; index < str.length; index++) {
      sum += Number(str[index]);
   }
   console.log(sum);
}
sumDigits(1234)