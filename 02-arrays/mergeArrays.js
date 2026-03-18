function mergeArrays(firstArr,secondArr){
  let thirdArray = [];
    for (let index = 0; index < firstArr.length; index++) {
      if (index % 2 === 0) {
            
            thirdArray.push(Number(firstArr[index]) + Number(secondArr[index]));
        } else {
            
            thirdArray.push(firstArr[index] + secondArr[index]);
        }
    }
    console.log(thirdArray); 
  }
mergeArrays(['5', '15', '23', '56', '35'],
['17', '22', '87', '36', '11']
)