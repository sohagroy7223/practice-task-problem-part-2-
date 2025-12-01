const heights2 = [167, 190, 120, 165, 137];

const result = Math.min(...heights2);

// console.log(result);

const heights = [167, 190, 120, 165, 137];

function lowNumber(numbers) {
    let num = numbers[0];
    for (const number of numbers) {
        if (number < num) {
            num = number;
        }
    }
    return num;
}
const results = lowNumber(heights);
console.log(results);
