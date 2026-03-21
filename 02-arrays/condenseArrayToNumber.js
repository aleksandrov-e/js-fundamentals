function condenseArrayToNumber(array){
   while(array.length > 1){
     let newArray = []
     for (let i = 0; i < array.length - 1; i++) {
        let sum = 0;
        sum += Number(array[i]) + Number(array[i + 1]);
        newArray.push(sum);
     }
     array = newArray;
   }
   console.log(array[0]);
}
condenseArrayToNumber([5,0,4,1,2])