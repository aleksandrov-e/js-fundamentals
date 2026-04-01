
function garage(array){
  let garage = {};
  for (let line of array) {
    let [garageNumber,info] = line.split(" - ");
     let car = {};
    if (!garage[garageNumber]) {
        garage[garageNumber] = []
    }
    let parts = info.split(", ");
    for (let part of parts) {
        let [key, value] = part.split(": ")
        car[key] = value
    }
    garage[garageNumber].push(car);
  }
  for (let key in garage) {
     console.log(`Garage № ${key}`);
     let cars = garage[key];
     for (let car of cars) {
        let entries = Object.entries(car);
        let result = entries.map(([k, v]) => `${k} - ${v}`).join(", ");
        console.log(`--${result}`);
     }  
  }
}
garage([
  "1 - color: blue, fuel type: diesel",
  "1 - color: red, manufacture: Audi",
  "2 - fuel type: petrol",
  "4 - color: dark blue, fuel type: diesel, manufacture: Fiat"
]);