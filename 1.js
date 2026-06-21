let obj = {
    price1: 100,
    price2: 150,
    price3: 200,
    price4: 100,
    price5: 150,
}

function sumObjValues(obj) {
    let sum = 0;
    for (let key in obj) {
        sum += obj[key];
    }
    return sum;
}

console.log(sumObjValues(obj));
