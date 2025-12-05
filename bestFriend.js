function isBestFriend(f1, f2) {
    // Check if both inputs are objects
    if (typeof f1 !== "object" || typeof f2 !== "object") {
        return "Invalid";
    }

    // Check if necessary properties exist
    const requiredProps = ["name", "roll", "bestFriend"];
    for (const prop of requiredProps) {
        if (!(prop in f1) || !(prop in f2)) {
            return "Invalid";
        }
    }

    // Check if they are true best friends
    if (f1.bestFriend === f2.roll && f2.bestFriend === f1.roll) {
        return true;
    }

    return false;
}

// Example usage
const sumon = { name: "Sumon", roll: 1, bestFriend: 10 };
const sohag = { name: "Sohag", roll: 10, bestFriend: 1 };
const sagor = { name: "sagor", roll: 5, bestFriend: 3 };
const result = isBestFriend(sumon, sagor);
console.log(result);
