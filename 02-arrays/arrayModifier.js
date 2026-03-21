function arrayModifier(arr){
  let array = arr[0].split(' ').map(Number);

  for (let i = 1; i < arr.length; i++) {
     let parts = arr[i].split(' ');

     if(parts[0] === "swap"){
        let index1 = Number(parts[1]);
        let index2 = Number(parts[2]);

        let temp = array[index1];
        array[index1] = array[index2];
        array[index2] = temp;

     }else if(parts[0] === "multiply"){
        let index1 = Number(parts[1]);
        let index2 = Number(parts[2]);

        array[index1] = array[index1] * array[index2];

     }else if(parts[0] === "decrease"){
        for (let j = 0; j < array.length; j++) {
            array[j] -= 1;
        }

     }else if(parts[0] === "end"){
        console.log(array.join(', '));
        break;
     }
  }
}