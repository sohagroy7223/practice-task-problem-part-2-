const heights2 = ["rahim", "robin", "rafi", "ron", "rashed"];
function smallestName(names) {
    let word = names[0];
    for (const name of names) {
        if (name.length < word.length) {
            word = name;
        }
    }
    return word;
}
const result = smallestName(heights2);
console.log(result);
