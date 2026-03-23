function loadingBar(num) {
    let filled = num / 10; 
    let empty = 10 - filled;

    let bar = '%'.repeat(filled) + '.'.repeat(empty);

    if (num === 100) {
        console.log('100% Complete!');
        console.log(`[${bar}]`);
    } else {
        console.log(`${num}% [${bar}]`);
        console.log('Still loading...');
    }
}
loadingBar(100);
