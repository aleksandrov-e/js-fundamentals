function solve(arr){ 
    let reversed = arr[2] + arr[1] + arr[0];
    console.log(reversed);
    // ASCII стойности
  let asciiValues = reversed
    .split('')
    .map(ch => ch.charCodeAt(0))
    .join(' ');

  console.log(asciiValues);

}
solve(["a","b","c"])