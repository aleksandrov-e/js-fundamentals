function tracker(array){
   let words = array[0].split(' ');
   let counts = {};
   for (let word of words) {
      counts[word] = 0;
   }
   for (let i = 1; i < array.length; i++) {
    let current = array[i];

    if (counts.hasOwnProperty(current)) {
        counts[current]++;
    }
   }
   let entries = Object.entries(counts);

  entries.sort((a, b) => b[1] - a[1]);
  
  for (let [word, count] of entries) {
    console.log(`${word} - ${count}`);
  }
}
tracker([
'this sentence', 
'In', 'this', 'sentence', 'you', 'have', 'to', 'count', 'the', 'occurrences', 'of', 'the', 'words', 'this', 'and', 'sentence', 'because', 'this', 'is', 'your', 'task'
]
);