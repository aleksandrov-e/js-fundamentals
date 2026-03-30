function phoneBook(array){
   let people = {};
   for (let line of array) {
      let [name,num] = line.split(' ');

      people[name] = num;
   }
   for (let key in people) {
      console.log(`${key} -> ${people[key]}`);
   }
}
phoneBook(['Tim 095234858',
    'Peter 04132544',
    'Bil 005034052134',
    'Tim 095234858'
])