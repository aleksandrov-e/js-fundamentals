function reversedString(string){
   return string.split('').reverse().join('');
   // split pravi stringa v masiv
   // reverse go obrushta 
   // go vrushta obratno kym string
}
console.log(reversedString('Information'));
// vtori nachin ->
function reverseString(str){
  let result = '';
  for (let i = str.length - 1; i >= 0; i--) {
  result += str[i];
}
  console.log(result);
}
reverseString("information")