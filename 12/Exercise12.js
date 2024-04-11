"use strict";
let names = ["Adnan", "sarfaraz", "Nadir", "Mehmood", "Shoaib", "Farhan"];
/*
Date: 21-03-2024
@author: Channayousif
@description: List of my friends with messages
@exercise:12

Greetings: Start with the array you used in Exercise 11, but instead of just printing each person’s name,
print a message to them. The text of each message should be the same, but each message should be personalized
 with the person’s name.
*/
let messages = ["You are great motivator dear ", "You are wonderful problem solver ", "You are great programmer dear ", "You are wonderful entertainer dear ", "you are good driver ", "you are wonderful artist dear "];
for (let i = 0; i < names.length; i++) {
    console.log(messages[i] + names[i]);
}
console.log("\n\n\n");
