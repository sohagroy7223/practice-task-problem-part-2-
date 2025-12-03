function calculateElectronicsBudget(laptop, tablet, mobile) {
    const laptopPrice = 35000;
    const tabletPrice = 15000;
    const mobilePrice = 20000;

    const totalBudget =
        laptop * laptopPrice + tablet * tabletPrice + mobile * mobilePrice;
    return totalBudget;
}
const result = calculateElectronicsBudget(1, 2, 1);
console.log(result);
