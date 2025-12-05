function electionResult(votes) {
    const count = {}; // Ekta empty object jekhane vote gula count hobe

    for (const vote of votes) {
        if (count[vote]) {
            count[vote] = count[vote] + 1; // agey thakle 1 barabo
        } else {
            count[vote] = 1; // na thakle 1 set korbo
        }
    }

    // winner ber korbo
    let winner = "";
    let maxVote = 0;

    for (const name in count) {
        if (count[name] > maxVote) {
            maxVote = count[name];
            winner = name;
        }
    }

    return winner;
}

const result = electionResult([
    "mango",
    "mango",
    "mango",
    "mango",
    "mango",
    "banana",
    "banana",
    "banana",
    "mango",
]);
console.log(result);
