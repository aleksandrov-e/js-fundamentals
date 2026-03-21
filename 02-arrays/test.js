function test(array){
  let sum = 0;
  let maxNumber = array[0];
  for (let i = 0; i < array.length; i++) {
     sum += array[i];
     if(array[i] > maxNumber){
        maxNumber = array[i]
     }
  }
  console.log(sum)
  console.log(maxNumber);
}
test([1, 5, 3, 8])