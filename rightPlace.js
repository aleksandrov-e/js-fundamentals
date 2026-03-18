function rightPlace(string,char,result){
    let res = string.replace(`_`,char);
    let output = res;
    if(output != result){
        console.log("Not matched")
    }else{
        console.log("Matched");
    }
  
}
rightPlace('Str_ng', 'i', 'String')