function solve(power,age){
    let baseTax = carTax(power);
    let coefficient = calculateCoefficient(age);
    let totalTax = baseTax * coefficient;

    console.log(totalTax.toFixed(2) + ` lv.`);
    

    function carTax(power){
    let result = 0;
    if (power < 37) {
      result = power * 0.43
   }else if(power < 55){
      result = power * 0.55
   }else if(power < 74){
      result = power * 0.68
   }else if(power < 110){
      result = power * 1.38
   }else {
      result = power * 1.54
   }
   return result;
}

   function calculateCoefficient(age){
     let coefficient = 0
    if (age < 5) {
        coefficient = 2.80
      }else if (age <= 14 && age >= 5){
        coefficient = 1.50;
      }else{
        coefficient = 1;
      }
      return coefficient;
   }
}
solve(45,10)
