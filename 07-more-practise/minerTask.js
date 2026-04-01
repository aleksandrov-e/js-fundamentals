function miner(arr){
  let mine = {};
  for (let index = 0; index < arr.length; index += 2) {
    let resource = arr[index];
    let quantity = arr[index + 1];
    mine[resource] = quantity
  }
  for (let key in mine) {
    console.log(`${key} -> ${mine[key]}`);  
  }
}
miner([
'Gold',
'155',
'Silver',
'10',
'Copper',
'17'
]
);