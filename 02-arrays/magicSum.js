function magicSum(array,magicSum){
   for (let i = 0; i < array.length; i++) {
     let element = array[i];
     for (let j = i + 1; j < array.length; j++) {
        let secondElement = array[j];
        if(element + secondElement === magicSum){
            console.log(`${element} ${secondElement}`);
        }
     }
   }
}
magicSum([14, 20, 60, 13, 7, 19, 8],
27)
