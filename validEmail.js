function validContact(numbers) {
    numbers = numbers.toString();
    if (
        numbers.length === 11 &&
        numbers.startsWith("01") &&
        !numbers.includes(" ")
    ) {
        return true;
    } else {
        return false;
    }
}
const result = validContact("01774389243");
console.log(result);
