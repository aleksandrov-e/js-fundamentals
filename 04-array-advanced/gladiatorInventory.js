function gladiator(array){
   let inventory = array[0].split(' ');
   for (let i = 1; i < array.length; i++) {
       let command = array[i].split(" ");
       let action = command[0];
       let item = command[1];

       if(action === "Buy"){
          if(!inventory.includes(item)){
            inventory.push(item);
          }
       }else if(action === "Trash"){
          if(inventory.includes(item)){
             let index = inventory.indexOf(item);
             inventory.splice(index,1);
          }
       }else if(action === "Repair"){
          if(inventory.includes(item)){
             let index = inventory.indexOf(item);
             inventory.splice(index,1);
             inventory.push(item);
          }
       }else if(action === "Upgrade"){
          let [equipment,upgrade] = item.split('-');
          let equipmentIndex = inventory.indexOf(equipment);
          if(inventory.includes(equipment)){
             inventory.splice(equipmentIndex + 1, 0, `${equipment}:${upgrade}`);
          }
       }
   }
   console.log(inventory.join(' '));
}
gladiator(['SWORD Shield Spear',
'Buy Bag',
'Trash Shield',
'Repair Spear',
'Upgrade SWORD-Steel']
)