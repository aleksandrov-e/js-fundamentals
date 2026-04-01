function phoneBook(array){
  let object = {};
  for (let line of array) {
    let [name,number] = line.split(" ");
    object[name] = number;
  }
  for (let key in object) {
    console.log(`${key} -> ${object[key]}`);
  }
}
phoneBook([
  "Tim 0834212554",
  "Peter 0877547887",
  "Bill 0896543112",
  "Tim 0876566344"
]);