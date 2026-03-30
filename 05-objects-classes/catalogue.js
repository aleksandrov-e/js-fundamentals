function catalogue(array){
   let products = []

   for (let line of array){
      let parts = line.split(" : ");
      let productName = parts[0];
      let price = Number(parts[1]);

      products.push({productName,price})
   }
      products.sort((a, b) => a.productName.localeCompare(b.productName));
      let currentLetter = "";
      for (let product of products) {
         let firstLetter = product.productName[0];
         if (firstLetter !== currentLetter) {
            currentLetter = firstLetter;
            console.log(currentLetter);
            
         }
         console.log(`  ${product.productName}: ${product.price}`);
      }
}
catalogue([
'Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10'
]
);