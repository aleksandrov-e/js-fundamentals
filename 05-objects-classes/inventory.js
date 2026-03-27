function heroesRegister(array) {
    let heroes = [];

    for (let line of array) {
        let parts = line.split(" / ");

        let name = parts[0];
        let level = Number(parts[1]);
        let items = [];

        if (parts.length > 2) {
            items = parts[2].split(", ");
        }

        let hero = {
            name: name,
            level: level,
            items: items
        };

        heroes.push(hero);
    }

    heroes.sort((a, b) => a.level - b.level);
    for (let hero of heroes) {
        console.log(`Hero: ${hero.name}`);
        console.log(`level => ${hero.level}`);
        console.log(`Items => ${hero.items.join(", ")}`);
    }
}
heroesRegister([
'Isacc / 25 / Apple, GravityGun',
'Derek / 12 / BarrelVest, DestructionSword',
'Hes / 1 / Desolator, Sentinel, Antara'
]
)