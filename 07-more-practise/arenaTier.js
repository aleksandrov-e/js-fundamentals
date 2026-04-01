function arena(array){
  let object = {};
  for (let line of array) {
    let [gladiator,technique,skill] = line.split(" -> ")
    if (line.includes("->")) {
        if (!object[gladiator]) {
        object[gladiator] = {};
    }
    if (!object[gladiator][technique]) {
        object[gladiator][technique] = Number(skill);
    }else{
        if (Number(skill) > object[gladiator][technique]) {
            object[gladiator][technique] = Number(skill);
        }
    }
    }
    else if (line.includes("vs")) {
        let [gladiator1,gladiator2] = line.split(" vs ");
        if (object.hasOwnProperty(gladiator1) && object.hasOwnProperty(gladiator2)) {
            let tech1 = Object.keys(object[gladiator1]);
            let tech2 = Object.keys(object[gladiator2]);
            
            let hasCommon = false;
            for (let tech of tech1) {
                if (tech2.includes(tech)) {
                    hasCommon = true;
                    break;
                }
            }
            if (!hasCommon) continue;
            if (hasCommon === true) {
                let total1 = Object.values(object[gladiator1])
                .reduce((a, b) => a + b, 0);

                let total2 = Object.values(object[gladiator2])
                .reduce((a, b) => a + b, 0);

                if (total1 > total2) {
                 delete object[gladiator2];
                } else if (total2 > total1) {
                 delete object[gladiator1];
               }
            }
        }
    }else if(line === "Ave Cesar"){
        break;
    }
  }
  let sorted = Object.entries(object)
.sort((a, b) => {
    let totalA = Object.values(a[1]).reduce((x,y) => x+y, 0);
    let totalB = Object.values(b[1]).reduce((x,y) => x+y, 0);

    if (totalB !== totalA) {
        return totalB - totalA;
    }

    return a[0].localeCompare(b[0]);
});

for (let [name, techniques] of sorted) {
    let total = Object.values(techniques).reduce((a,b) => a+b, 0);

    console.log(`${name}: ${total} skill`);

    let sortedTech = Object.entries(techniques)
    .sort((a, b) => {
        if (b[1] !== a[1]) {
            return b[1] - a[1];
        }
        return a[0].localeCompare(b[0]);
    });

    for (let [tech, skill] of sortedTech) {
        console.log(`- ${tech} <!> ${skill}`);
    }
}
}
arena([
'Peter -> BattleCry -> 400',
'Alex -> PowerPunch -> 300',
'Stefan -> Duck -> 200',
'Stefan -> Tiger -> 250',
'Ave Cesar'
]
);