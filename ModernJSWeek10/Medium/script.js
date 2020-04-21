const averageNumber = array => array.reduce((a,b) => a + b, 0) / array.length

console.log(averageNumber([1, 4, 7]));
console.log(averageNumber([10, 5]));
console.log(averageNumber([1.5, 3, 2.5, 1]))