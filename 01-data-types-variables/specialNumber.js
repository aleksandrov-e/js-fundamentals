function specialNumber(n){
  for(let i = 1; i <= n; i++){
    let num = i.toString();
    let sum = 0;

    for(let j = 0; j < num.length; j++){
        sum += Number(num[j]);
    }
     let isSpecial = sum === 5 || sum === 7 || sum === 11;

     console.log(`${i} -> ${isSpecial ? `True` : `False`}`);
  }
  
}
specialNumber(15)