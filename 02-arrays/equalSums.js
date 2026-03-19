function equalSums(arr){
    let found = false;
   for(i = 0; i < arr.length; i++){
    let leftSum = 0;
    let rightSum = 0;
      for(j = 0; j < i; j++){
         let leftElement = arr[j];
         leftSum += leftElement;
      }
      for (let v = i + 1; v < arr.length; v++){
        let rightElement = arr[v];
        rightSum += rightElement;
      }
      if(leftSum === rightSum){
         console.log(i);
         found = true;
         break;
      }
   }
   if(!found){
    console.log("no");
   }

}
equalSums([1, 2])
