function companyUsers(array){
  let object = {}
  for (let line of array) {
     let [name,employee] = line.split(" -> ");

     if (!object[name]) {
        object[name] = [];
     }
     if (!object[name].includes(employee)) {
        object[name].push(employee);
     }
  }
  let entries = Object.entries(object);
  entries.sort((a, b) => a[0].localeCompare(b[0]));
  for (let [name,employees] of entries) {
     console.log(name);
     for (let employee of employees) {
        console.log(`--${employee}`);
     }
  }
}
companyUsers([
  "SoftUni -> AA12345",
  "SoftUni -> BB12345",
  "Microsoft -> CC12345",
  "HP -> AA12345",
  "SoftUni -> AA12345"
])