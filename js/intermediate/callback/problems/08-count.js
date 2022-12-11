/*******************************************************************************
Write a function `count` that accepts an array and a callback as arguments. The
function should return the number of elements of the array that return true when
passed to the callback.

Examples:

let result1 = count([18, 5, 32, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result1); // 3

let result2 = count([17, 5, 31, 7, 100], function (n) {
    return n % 2 === 0;
});
console.log(result2); // 1

let result3 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('o');
});
console.log(result3); // 3

let result4 = count(['follow', 'the', 'yellow', 'brick', 'road'], function (str) {
    return str.includes('x');
});
console.log(result4); // 0
*******************************************************************************/

// method #1 - forEach method
/*
const count = function(array, callback) {
    let trueCounts = 0
    array.forEach(function(el) {
        callback(el) ? trueCounts += 1: false;
    });
    return trueCounts;
};
*/

// method #2 - filter method
const count = function(array, callback) {
    const trueCounts = array.filter(function(el) {
        return callback(el) === true;
    });
    return trueCounts.length;
};

// method #3 - for..of
/*
const count = function(array, callback) {
    let trueCount = 0;
    for (let el of array) {
        if (callback(el)) {
            trueCount += 1;
        };
    };
    return trueCount;
};
*/





/*****************DO NOT MODIFY ANYTHING UNDER THIS  LINE**********************/
module.exports = count;
