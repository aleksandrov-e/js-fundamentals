function addAndSubtract(array){
  let newArr = [];
  let newSum = 0;
  let oldSum  = 0;

  for (let i = 0; i < array.length; i++) {
    let element = array[i];

    oldSum += element; 

    if (element % 2 === 0) {
       element += i;
    } else {
       element -= i;
    }

    newArr.push(element);
  }

  for (let j = 0; j < newArr.length; j++) {
    let element = newArr[j];
    newSum += element;
  }

  console.log(newArr);
  console.log(oldSum);
  console.log(newSum);
}
addAndSubtract();