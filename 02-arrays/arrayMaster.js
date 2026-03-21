function arrayMaster(arr){
   let array = arr[0].split(' ').map(Number);
   for (let i = 1; i < arr.length; i++) {
      let command = arr[i];
      let parts = command.split(' ');

      if(parts[0] === "add"){
         let index = Number(parts[1]);
         let element = Number(parts[2]);
 
         array.splice(index, 0, element);
      }else if(parts[0] === "remove"){
        let index = Number(parts[1])
        array.splice(index,1);
      }else if(parts[0] ==="shift"){
         let direction = parts[1];
         let count = parts[2];
         if(direction === "left"){
            for (let j = 0; j < count; j++) {
            let first = array.shift();
            array.push(first);
         }
         }else{
            for (let j = 0; j < count; j++) {
                let last = array.pop();
                array.unshift(last);
            }
         }
      }else if(parts[0] === "sumPairs"){
        let newArr = [];
        for (let i = 0; i < array.length; i += 2) {
        let first = array[i];
        let second = array[i + 1] || 0;

        newArr.push(first + second);
    }
        array = newArr;
      }else if (parts[0] === "print") {
       console.log(`[ ${array.join(', ')} ]`);
     }
   }
}
arrayMaster([
  '1 2 3 4 5',
  'add 1 8',
  'remove 3',
  'shift left 2',
  'sumPairs',
  'print'
]);