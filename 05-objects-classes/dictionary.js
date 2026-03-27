function dictionary(array){
  let dic = {}

  for (const line of array) {
     let obj = JSON.parse(line)
     let key = Object.keys(obj)[0];
     let value = Object.values(obj)[0];

     dic[key] = value;
  }
  let sorted = Object.keys(dic).sort()
  for (let key of sorted) {
    console.log(`Term: ${key} => Definition: ${dic[key]}`);
}
}
dictionary([
'{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
'{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
'{"Boiler":"A fuel-burning apparatus or container for heating water."}',
'{"Tape":"A narrow strip of material, typically used to hold or fasten something."}',
'{"Microphone":"An instrument for converting sound waves into electrical energy variations which may then be amplified, transmitted, or recorded."}'
]
);