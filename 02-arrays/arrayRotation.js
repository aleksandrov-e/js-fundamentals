function arrayRotation(arr, rotations) {
    for (let i = 0; i < rotations; i++) {
        let firstElement = arr.shift(); // маха първия
        arr.push(firstElement);         // слага го отзад
    }

    console.log(arr.join(' '));
}
arrayRotation([51, 47, 32, 61, 21], 2)