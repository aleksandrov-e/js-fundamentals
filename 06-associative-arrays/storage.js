function storage(array){
    let storage = new Map();
    for (let line of array) {
     let [productName,quantityInput] = line.split(" ");
     let quantity = Number(quantityInput);
     
     if (storage.has(productName)) {
        storage.set(productName, storage.get(productName) + quantity);
     }else{
        storage.set(productName,quantity);
     }
  }
  for (let [product, quantity] of storage) {
        console.log(`${product} -> ${quantity}`);
    }
}
storage(['tomatoes 10',
    'coffee 5',
    'olives 100',
    'coffee 40'
]);