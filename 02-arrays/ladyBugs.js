function ladybugs(input) {
    let size = Number(input[0]);
    let field = new Array(size).fill(0);

    let initialIndexes = input[1].split(' ').map(Number);

    for (let index of initialIndexes) {
        if (index >= 0 && index < size) {
            field[index] = 1;
        }
    }

    for (let i = 2; i < input.length; i++) {
        let [startIndex, direction, flyLength] = input[i].split(' ');
        startIndex = Number(startIndex);
        flyLength = Number(flyLength);

        if (startIndex < 0 || startIndex >= size) continue;
        if (field[startIndex] !== 1) continue;

        field[startIndex] = 0; 

        let position = startIndex;

        while (true) {
            if (direction === "right") {
                position += flyLength;
            } else {
                position -= flyLength;
            }

            if (position < 0 || position >= size) {
                break;
            }
            if (field[position] === 0) {
                field[position] = 1;
                break;
            }
        }
    }

    console.log(field.join(' '));
}
ladybugs([ 3, '0 1 2',
'0 right 1',
'1 right 1',
'2 right 1']
)