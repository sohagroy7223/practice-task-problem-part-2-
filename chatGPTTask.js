/**
 *  Description:
 তিনটা object দেওয়া হবে: f1, f2, f3। property: name, roll, bestFriend।
 যদি f1.bestFriend === f2.roll এবং
  f2.bestFriend === f3.roll এবং
   f3.bestFriend === f1.roll 
   → return true,
    নাহলে false।
*/
const f1 = { name: "f1", roll: 2, bestFriend: f2 };
const f2 = { name: "f2", roll: 7, bestFriend: f3 };
const f3 = { name: "f3", roll: 5, bestFriend: f1 };

function bestFriend(n1, n2,n3)