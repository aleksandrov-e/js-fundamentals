function personInfo(firstName,lastName,age){
    let info = {
        firstName : firstName,
        lastName : lastName,
        age : age
    }
    let entries = Object.entries(info);
    for (const [key,value] of entries) {
        console.log(`${key} : ${value}`);
    }
}
personInfo('Ivan','Stoyanov','20');