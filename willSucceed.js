function willSucceed(marks) {
    let pass = 0;
    let failed = 0;
    if (Array.isArray(marks) == true)
        for (const mark of marks) {
            if (mark >= 50) {
                pass++;
            } else {
                failed++;
            }
        }
    if (pass > failed) {
        return true;
    } else {
        return false;
    }
}
const result1 = willSucceed([55, 75, 65, 41, 33, 0, 87, 91, 30]);
const result = willSucceed([48, 48, 50, 50, 100]);
console.log(result);
console.log(result1);
