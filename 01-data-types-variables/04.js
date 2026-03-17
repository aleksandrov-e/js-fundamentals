function converterDistance(number){
   let kilometers = number / 1000;
   let miles = kilometers * 0.621371;

   console.log(`${number} meters is equal to ${kilometers} kilometers. `);
   console.log(`${kilometers} kilometers is equal to ${miles.toFixed(3)} miles.`);
}
converterDistance(1852)