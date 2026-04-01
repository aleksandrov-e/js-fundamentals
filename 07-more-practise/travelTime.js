function travelTime(array){
  let object = {};
  for (let line of array) {
    let [country,city,cost] = line.split(" > ");
    if (!object[country]) {
        object[country] = {};
    }
    if (!object[country][city]) {
        object[country][city] = Number(cost);
    }else{
        if (Number(cost) < object[country][city]) {
        object[country][city] = Number(cost);
    }
    }
  }
  let countryEntries = Object.entries(object).sort((a,b) => a[0].localeCompare(b[0]));
   
  for (let [country, towns] of countryEntries) {

    let cityEntries = Object.entries(towns)
      .sort((a, b) => a[1] - b[1]);

    let result = cityEntries
      .map(([city, cost]) => `${city} -> ${cost}`)
      .join(" ");

    console.log(`${country} -> ${result}`);
  }
}
travelTime([
"Bulgaria > Sofia > 500",
"Bulgaria > Sopot > 800",
"France > Paris > 2000",
"Albania > Tirana > 1000",
"Bulgaria > Sofia > 200"
]
)