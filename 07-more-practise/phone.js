function phoneBook(array){
   let people = {};
   for (let line of array) {
      let [name,num] = line.split(' ');

      people[name] = num;
   }
   let entries = Object.entries(people).sort((a, b) => a[0].localeCompare(b[0]))
   for (let [name,num] of entries) {
      console.log(`${name} -> ${num}`);
   }
}
phoneBook(['Tim 095234858',
    'Peter 04132544',
    'Bil 005034052134',
    'Emo 095234858'
])