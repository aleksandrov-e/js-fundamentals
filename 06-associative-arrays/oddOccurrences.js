function oddOccurrences(string){
   let lowerCase = string.toLowerCase();
   let words = lowerCase.split(" ");
   let counts = {};
   for (let word of words) {
     counts[word] = 0;
   }
   for (let i = 0; i < words.length; i++) {
    let current = words[i];
     if (counts.hasOwnProperty(current)) {
        counts[current]++;
    }
   }
   let entries = Object.entries(counts);
   for (let [word,count] of entries) {
    if (count % 2 !== 0) {
        console.log(word);
    }
   } 
}
oddOccurrences('Cake IS SWEET is Soft CAKE sweet Food')