function maxSequence(arr) {
    let currentCount = 1;
    let maxCount = 1;
    let bestNumber = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] === arr[i - 1]) {
            currentCount++;
        } else {
            currentCount = 1;
        }

        if (currentCount > maxCount) {
            maxCount = currentCount;
            bestNumber = arr[i];
        }
    }

    let result = [];
    for (let i = 0; i < maxCount; i++) {
        result.push(bestNumber);
    }

    console.log(result.join(' '));
}