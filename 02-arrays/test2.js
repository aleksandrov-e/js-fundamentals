function test2(array){
  let newArray = [];
  for (let i = 0; i < array.length; i++) {
     let num = array[i];
    if (num % 2 === 0) {
        newArray.push(num);
     }
  }
  console.log(newArray);
}
test2([1, 2, 3, 4, 5, 6])