function townInfo(town,population,area){
   if(town.length < 3){
     console.log("Town name must be at least 3 characters!");
     return;
   }else if(population < 0){
     console.log("Population must be positive number");
     return;
   }else if(area < 0){
     console.log("Area must be positive number");
     return;
   }
   console.log(`Town ${town} has population of ${population} and area ${area} square km.`)
}
townInfo('LA',
1481353,
512
)