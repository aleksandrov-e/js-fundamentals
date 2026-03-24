function train(array){
   let newArr = array[0].split(" ").map(Number);
   let wagonCapacity = Number(array[1]);

   for (let i = 2; i < array.length; i++) {
      let command = array[i];
      let actions = command.split(" ");

      if(actions[0] === "Add"){
        let wagon = Number(actions[1]);
        newArr.push(wagon);

      } else {
        let passengers = Number(actions[0]);

        for (let j = 0; j < newArr.length; j++) {
          if(newArr[j] + passengers <= wagonCapacity){
              newArr[j] += passengers;
              break;
          }
        }
      }
   }

   console.log(newArr.join(' '));
}
train(['32 54 21 12 4 0 23',
'75',
'Add 10',
'Add 0',
'30',
'10',
'75']
);