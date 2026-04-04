function legendary(array){
  let materials = {
     shards: 0,
     fragments: 0,
     motes: 0
  };
  let legendaryItems = {
  shards: "Shadowmourne",
  fragments: "Valanyr",
  motes: "Dragonwrath"
};
  let junks = {};
  let obtained = false;
  for (let line of array) {
    let parts = line.toLowerCase().split(" ")

    for (let i = 0; i < parts.length; i += 2) {
        let quantity = Number(parts[i]);
        let material = parts[i+1];
        
        if (material === "shards" || material === "fragments" || material === "motes") {
            materials[material] += quantity;
        }else{
            if (!junks[material]) {
            junks[material] = 0;
        }
            junks[material] += quantity;
        }
        if (materials[material] >= 250) {
            console.log(`${legendaryItems[material]} obtained!`);
            materials[material] -= 250;
            obtained = true;
            break;
        }
    }
    if (obtained) break;
  }
  let materialsEntries = Object.entries(materials).sort((a,b) => {if (b[1] !== a[1]) return b[1] - a[1];
    return a[0].localeCompare(b[0]);
})
  let junkEntries = Object.entries(junks).sort((a,b) => a[0].localeCompare(b[0]));
  for (let [material,quantity] of materialsEntries) {
    console.log(`${material} - ${quantity}`);
  }
  for (let [junkMat,quantity] of junkEntries) {
    console.log(`${junkMat} - ${quantity}`);
  }
}
legendary(['123 silver 6 shards 8 shards 5 motes 9 fangs 75 motes 103 MOTES 8 Shards 86 Motes 7 stones 19 silver'])