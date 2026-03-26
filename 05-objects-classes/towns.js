function towns(array) {
   for (let row of array) {
       let parts = row
           .split(" | ")
           .map(x => x.trim());

       let town = parts[0];
       let latitude = Number(Number(parts[1]).toFixed(2));
       let longitude = Number(Number(parts[2]).toFixed(2));

       let obj = {
           Town: town,
           Latitude: latitude,
           Longitude: longitude
       };

       console.log(obj);
   }
}

towns([
   'Sofia | 42.696552 | 23.32601',
   'Beijing | 39.913818 | 116.363625'
]);