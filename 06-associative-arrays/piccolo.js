function piccolo(array){
  let parking = {};
  for (let line of array) {
    let [direction,carNumber] = line.split(", ");
    if (direction === "IN") {
        parking[carNumber] = true;
    }else if(direction === "OUT"){
        if (parking.hasOwnProperty(carNumber)) {
            delete parking[carNumber];
        }
    }
  }
  let numbers = Object.keys(parking);
  if (numbers.length === 0) {
    console.log("parking lot is empty ");
  }
  numbers.sort()
  console.log(numbers.join("\n"));  
}
piccolo(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)