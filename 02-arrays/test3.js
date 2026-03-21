function test3(array){
   let min = array[0]
   let index = 0;
   for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if(element < min){
        min = element;
        index = i
    }
   }
   console.log(`Min: ${min}`);
   console.log(`Index: ${index}`);
   
}
test3([5, 2, 8, 1, 9])