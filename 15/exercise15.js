"use strict";
/**
 * Date: 24-03-2024
 * @author: Channayousif
 * @description: List of my friends with messages
 * @exercise:15
 * Changing Guest List: You just heard that one of your guests can’t make the dinner,
 * so you need to send out a new set of invitations. You’ll have to think of someone else to invite.

• Start with your program from Exercise 14. Add a print statement at the end of your program
stating the name of the guest who can’t make it.

• Modify your list, replacing the name of the guest who can’t make it with the name of the new
 person you are inviting.

• Print a second set of invitation messages, one for each person who is still in your list.
 */
let list = ["Person One", "Person Two", "Person Three", "Person Four"];
let absent = list.pop();
for (let i = 0; i < list.length; i++) {
    console.log(`Hello dear ${list[i]}, I have the honour to invite you for dinner organized at my home. \nThanks\nRegards\n`);
}
console.log("It informed that Mr " + absent + " wont be able to attend.");
list.push("Person Five");
console.log("\nHere is the modified list of guests.\n");
for (let i = 0; i < list.length; i++) {
    console.log(`Mr. ${list[i]} will attend the event`);
}
console.log("\nHere are the modified invitations.\n");
for (let i = 0; i < list.length; i++) {
    console.log(`Hello dear ${list[i]}, I have the honour to invite you for dinner organized at my home. \nThanks\nRegards\n`);
}
