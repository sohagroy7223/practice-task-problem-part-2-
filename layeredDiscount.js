/**
 * lessthen 100 price =100
 * mor then 101-200 price =90
 * above 200 price =70*/

function layeredDiscountedTotal(quantity) {
    const first100Price = 100;
    const second100Price = 90;
    const above200Price = 70;
    if (quantity <= 100) {
        const total = quantity * first100Price;
        return total;
    } else if (quantity <= 200) {
        const first100Total = 100 * first100Price;
        const obosisto = quantity - 100;
        const second100Total = obosisto * second100Price;
        const total = first100Total + second100Total;
        return total;
    } else {
        const first100Total = 100 * first100Price;
        const second100Total = 100 * second100Price;
        const bakiObosisto = quantity - 200;
        const thirtBakiTotal = bakiObosisto * above200Price;
        const total = first100Total + second100Total + thirtBakiTotal;
        return total;
    }
}
const result = layeredDiscountedTotal(300);
console.log(result);
