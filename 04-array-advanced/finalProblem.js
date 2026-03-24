function final(array){
  let items = array[0].split(', ');

  for (let i = 1; i < array.length; i++) {

    if (array[i] === "Craft!") {
        break;
    }

    let command = array[i].split(' - ');
    let action = command[0];
    let value = command[1];

    if(action === "Collect"){
        if(!items.includes(value)){
           items.push(value);
        }

    } else if(action === "Drop"){
        if(items.includes(value)){
            let index = items.indexOf(value);
            items.splice(index,1);
        }

    } else if(action === "Combine Items"){
        let [oldItem,newItem] = value.split(':');
        let oldItemIndex = items.indexOf(oldItem);

        if(oldItemIndex !== -1){
            items.splice(oldItemIndex + 1, 0, newItem);
        }

    } else if(action === "Renew"){
       if(items.includes(value)){
           let indexOfItem = items.indexOf(value);
           items.splice(indexOfItem,1);
           items.push(value);
       }
    }
  }

  console.log(items.join(', '));
}
final([
  "Iron, Wood, Sword",
  "Collect - Gold",
  "Drop - Wood",
  "Combine Items - Sword:Bow",
  "Renew - Iron",
  "Craft!"
])