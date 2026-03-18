function commonElements(arrOne,arrTwo){
  for (let index = 0; index < arrOne.length; index++) {
     let element = arrOne[index];
     if(arrTwo.includes(element)){
        console.log(element)
     }
  }
}
commonElements(['Hey', 'hello', 2, 4, 'Peter', 'e'],
['Petar', 10, 'hey', 4, 'hello', '2']
)
// Vtori nachin
function commonElementsForLoop(arr1, arr2) {
    for (let i = 0; i < arr1.length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (arr1[i] === arr2[j]) {
                console.log(arr1[i]);
                break; 
            }
        }
    }
}
commonElementsForLoop(["apple", "banana", "cherry"], ["banana", "kiwi", "apple"]);