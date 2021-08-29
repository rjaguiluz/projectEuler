/**
 * If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.
 * Find the sum of all the multiples of 3 or 5 below 1000.
*/


let acu = 0;
const belowNum = 1000;

for (let index = 1; index < belowNum; index++) {
    acu += index % 3 == 0 || index % 5 == 0 ? index : 0;
}

console.log(acu)
