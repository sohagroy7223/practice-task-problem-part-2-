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
const result = willSucceed([55, 75, 65, 41, 33, 0, 87, 91, 30]);
console.log(result);
