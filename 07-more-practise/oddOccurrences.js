function oddOccurrences(string){
  let words = {};
  let toLower = string.toLowerCase();
  let arr = toLower.split(" ");
  for (let line of arr) {
    let word = line
    if(!words[word]){
        words[word] = 0;
    }
    words[word]++;
  }
  let result = [];
  for (let key in words) {
    let count = words[key];
    if (count % 2 !== 0) {
        result.push(key);
    }
  }
  console.log(result.join(" "));
  
}
oddOccurrences("Java C# Php PHP Java PhP 3 C# 3 1 5 C#")