/**
 *  Description:
 তিনটা object দেওয়া হবে: f1, f2, f3। property: name, roll, bestFriend।
 যদি f1.bestFriend === f2.roll এবং
  f2.bestFriend === f3.roll এবং
   f3.bestFriend === f1.roll 
   → return true,
    নাহলে false।
*/
const saikot = { name: "saikot", roll: 2, bestFriend: 7 };
const samor = { name: "samor", roll: 7, bestFriend: 5 };
const allok = { name: "allok", roll: 5, bestFriend: 2 };
const sagor = { name: "sagor", roll: 10, bestFriend: 3 };

function bestFriend(n1, n2, n3) {
    if (
        n1.bestFriend === n2.roll &&
        n2.bestFriend === n3.roll &&
        n3.bestFriend === n1.roll
    ) {
        return true;
    } else {
        return false;
    }
}
const result = bestFriend(saikot, samor, allok);
console.log(result);
