function integerAndFloat(num1,num2,num3){
   let result = num1 + num2+ num3;
   let resultType;
    if (Number.isInteger(result)) {
        resultType = "Integer";
    } else {
        resultType = "Float";
    }
   console.log(`${result} - ${resultType}`);
   
}
integerAndFloat(9,100,1)