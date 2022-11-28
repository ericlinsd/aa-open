/***********************************************************************
Write a function called `valuesInObject(obj)` that takes in an object and returns 
an array of all the values within that Object. 
Do this once using using a `for...in` loop and once using `Object.values`.
Examples:
let animals = {dog: "Wolfie", cat: "Jet", bison: "Bilbo"}
let foods = {apple: "tart", lemon: "sour", mango: "sweet"}
valuesInObject(animals); // => ["Wolfie", "Jet", "Bilbo"]
valuesInObject(foods); // => ["tart", "sour", "sweet"]
***********************************************************************/

// method #1
function valuesInObject(obj) {
    // literal instantiation 
    let values = [];
    for (let key in obj) {
        values.push(obj[key]);
    }
    return values;
}

/* method #2
let valuesInObject = function(obj) {
    return Object.values(obj);

};
*/
  
  /**************DO NOT MODIFY ANYTHING UNDER THIS  LINE*****************/
  module.exports = valuesInObject;