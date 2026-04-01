function cityInfo(object){
    for (let key in object) {
        console.log(`${key} -> ${object[key]}`); 
    }
} 
cityInfo({
  name: "Sofia",
  area: 492,
  population: 1238000,
  country: "Bulgaria"
});