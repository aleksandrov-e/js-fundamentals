function meetings(arr){
  let object = {};
  for (let line of arr) {
    let [day,name] = line.split(" ");
    if (!object[day]) {
        object[day] = name
        console.log(`Scheduled for ${day}`);
    }else{
        console.log(`Conflict on ${day}`);
    }
  }
  
   for (const key in object) {
      console.log(`${key} -> ${object[key]}`);
   }
}
meetings([
  "Monday Peter",
  "Wednesday Bill",
  "Monday Tim",
  "Friday Tim"
]);
