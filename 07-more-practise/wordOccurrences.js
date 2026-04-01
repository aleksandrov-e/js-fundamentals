function words(array){
  let object = {};
  for (let line of array) {
    let word = line
    if (!object[word]) {
        object[word] = 0;
    }
    object[word]++;
  }  
  let entries = Object.entries(object).sort((a,b) => b[1] - a[1]) 
  for (let [key,value] of entries) {
    console.log(`${key} -> ${value}`);
  }
}
words(["apple", "banana", "apple", "orange", "banana", "apple"])