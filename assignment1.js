function cashOut(money) {
    if (typeof money !== "number" || money < 0) {
        return "invalid";
    }
    const charge = (money * 1.75) / 100;
    return charge;
}
const result = cashOut(0);
console.log(result);
