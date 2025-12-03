const phones = [
    { model: "PhoneA", brand: "Iphone", price: 95000 },
    { model: "PhoneB", brand: "Samsung", price: 40000 },
    { model: "PhoneC", brand: "Oppo", price: 26000 },
    { model: "PhoneD", brand: "Nokia", price: 35000 },
    { model: "PhoneE", brand: "Iphone", price: 105000 },
    { model: "PhoneF", brand: "HTC", price: 48000 },
];
function findAveragePhonePrice(priceAverag) {
    let sum = 0;
    for (const phone of priceAverag) {
        const total = phone.price;
        sum = sum + total;
    }
    const averag = sum / phones.length;
    return averag;
}
const result = findAveragePhonePrice(phones);
console.log(result);
