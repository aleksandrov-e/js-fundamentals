function houseParty(input) {
    let guests = [];

    for (let i = 0; i < input.length; i++) {
        let parts = input[i].split(' ');
        let name = parts[0];

        if (parts[2] === "going!") {
            if (!guests.includes(name)) {
                guests.push(name);
            } else {
                console.log(`${name} is already in the list!`);
            }
        } else {
            if (guests.includes(name)) {
                let index = guests.indexOf(name);
                guests.splice(index, 1);
            } else {
                console.log(`${name} is not in the list!`);
            }
        }
    }

    console.log(guests.join('\n'));
}