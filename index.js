/* For each prompt below: 
- Read the prompt.
- Identify the expectations.
- Write specifications for all the tests that would be useful for that prompt.
- Try to take any "edge cases," or unexpected circumstances, into account, and write test specs for them.
- Try not to write extraneous tests! */

// Unit Tests:
// 1. A function called "multiplication" that returns the product of the two input numbers.
// 2. A function called "concatOdds" takes two arrays of integers as arguments. 
//      It should return a single array that only contains the odd numbers, in ascending order, from both of the arrays.
//          Example: concatOdds([3, 2, 1], [9, 1, 1, 1, 4, 15, -1]) ...should result in [-1, 1, 3, 9, 15]
//      Think about the following; you may need to make assumptions or decisions about the prompt and how the code should behave
//          What should happen with unexpected inputs?
//              What kinds of unexpected inputs should we worry about?
//          What should happen when there are multiples of the same odd number in the arrays? 
//           (Hint: We gave you the answer to this one in the example above.)


const multiplication = 2 * 2;
const array1 = [3, 2, 1];
const array2 = [9, 1, 1, 1, 4, 15, -1];
const concatOdds = [...array1, ...array2];
concatOdds.sort(function(a, b){return a - b});

let odds = concatOdds.filter (n => n%2)
console.log(odds);

// Expected print: -1, 1, 1, 1, 1, 2, 3, 4, 9, 15
// Expected print when sorting by odds:  -1, 1, 1, 1, 1, 3, 9, 15 
// Expect array1 and array2 to join together through variable concatOdds then process through sort function then filtered by listing only odds.
// If a none number variable is added into the array will cause this error message > ReferenceError: a is not defined
// If multiples are provided; will repeat the number till next number value printed 


// Functional Tests:
// 1. A shopping cart checkout feature that allows a user to check out as a guest (without an account), or as a logged-in user. 
//    They should be allowed to do either, but should be asked if they want to create an account or log in if they check out as a guest.
//          Think about the following; you may need to make assumptions or decisions about the prompt and how the feature should behave:
//              What should happen if the cart is empty?
//              What needs to be shown to the user at each step of check out?
//              What behaviors of this feature does the prompt miss or gloss over?
//                  Hint: Observe the shopping cart and checkout features of some popular websites to get some ideas!

// Expect user to get prompted to create or login to account when using "Guest" option
// When the check out cart is empty, expect user to be prompted by "Get Started" message
// Expect user to see items being added to order list as each item is scanned
// Prompt doesn't address saved account information interacting with the transaction (user points, saved payment method, account specific coupons)