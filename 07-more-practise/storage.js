function storage(arr){
  let object = {};
  for (let line of arr) {
    let [product,quantityInput] = line.split(" ");
    quantity = Number(quantityInput);
    if (!object[product]) {
        object[product] = 0;
    }
    object[product] += quantity;
  }
  let entries = Object.entries(object).sort((a,b) => b[1] - a[1])
  for (let [product,quantity] of entries) {
    console.log(`${product} -> ${quantity}`);
  }
}
storage([
  "tomatoes 10",
  "coffee 5",
  "olives 100",
  "coffee 40"
])