function test4(array){
    let max = -Infinity;
    let secondMax = -Infinity;

    for (let i = 0; i < array.length; i++) {
        let element = array[i];

        if (element > max) {
            secondMax = max;
            max = element;
        } else if (element > secondMax && element !== max) {
            secondMax = element;
        }
    }

    console.log(secondMax);
}

test4([10, 5, 20, 8]);