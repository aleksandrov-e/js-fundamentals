function equalArrays(arrayOne,arrayTwo){
 let sum = 0;
    for (let i = 0; i < arrayOne.length; i++) {
    if(arrayOne[i] !== arrayTwo[i]){
    console.log( `Arrays are not identical. Found difference at ${i} index`);
    return;
  }
   sum += Number(arrayOne[i]);
}
console.log(`Arrays are identical. Sum: ${sum}`)
}
equalArrays(['10','20','30'], ['10','20','30'])