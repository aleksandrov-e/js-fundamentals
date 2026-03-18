function addAndSubstract(array){
   let newArray =[];
   let oldSum = 0;
   let newSum = 0;
    for (let index = 0; index < array.length; index++) {
      let element = array[index];
      oldSum += element;
      if(element % 2 === 0){
        element += index;
        
      }else{
        element -= index;
      }
       newSum += element;
       newArray.push(element);
   }
   console.log(newArray);
   console.log(oldSum);
   console.log(newSum);
}
addAndSubstract([5,15,23,56,35])