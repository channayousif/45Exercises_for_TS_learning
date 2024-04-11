"use strict";
/**
 *  @date: 11-04-2024
 * @author: Channayousif
 * @exercise:23
 * @description: Seeing the World
 * 23. Conditional Tests: Write a series of conditional tests. Print a statement
describing each test and your prediction for the results of each test. Your code
should look something like this:

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.")

console.log(car == 'subaru')

• Look closely at your results, and make sure you understand why each line evaluates to True or False.

• Create at least 10 tests. Have at least 5 tests evaluate to True and another 5 tests evaluate to False.
 */
const rivers = [
    "Indus",
    "Jhelum",
    "Chenab",
    "Ravi",
    "Sutlej",
    "Kabul"
];
let countries = [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Austrian Empire",
    "Azerbaijan"
];
//1
console.log("Test is countries[1]=='Albania' // I predict it to be 'true'");
console.log(countries[1] == "Albania");
//2
console.log("Test is countries[1]==='Albania' // I predict it to be 'true'");
console.log(countries[1] === "Albania");
//3
console.log("Test is countries[10]=='Albania' // I predict it to be 'false'");
console.log(countries[10] == "Albania");
//4
console.log("Test is countries[12]==='Albania' // I predict it to be 'false'");
console.log(countries[12] === "Albania");
//5
console.log("Test is rivers[1]=='Albania' // I predict it to be 'false'");
console.log(rivers[1] == "Albania");
//6
console.log("Test is rivers[1]=='Jhelum' // I predict it to be 'true'");
console.log(rivers[1] == "Jhelum");
//7
console.log("Test is rivers[0]=='Indus' // I predict it to be 'true'");
console.log(rivers[0] == "Indus");
//8
rivers.sort();
console.log("rivers.sort(); Test is rivers[0]=='Indus' // I predict it to be 'false'");
console.log(rivers[0] == "Indus");
//9
console.log("Test is rivers[0]=='Chenab' // I predict it to be 'true'");
console.log(rivers[0] == "Chenab");
//10
//countries.sort((a,b)=>parseInt(a)-parseInt(b));
console.log("Test is countries[1]=='Albania' // I predict it to be 'true'");
console.log(countries[1] == "Albania");
