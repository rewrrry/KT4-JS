function generateArray(array) {
    for (let i = 0; i < array.length; i++) {
        if (!Array.isArray(array[i]) && typeof array[i] === 'object' && array[i] !== null) {
            let values = [];
            for (let key in array[i]) {
                values.push(array[i][key]);
            }
            array[i] = values;
        }
    }
    return array;
}

let array = [[1], {id: 40}, [100], [300], {part: 10}];
console.log(generateArray(array));
