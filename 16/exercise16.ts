/**
 * Date: 24-03-2024
 * @author: Channayousif
 * @description: List of my friends with messages
 * @exercise:16
 *  * 
 * More Guests: You just found a bigger dinner table, so now more space is available. 
 * Think of three more guests to invite to dinner.
• Start with your program from Exercise 15. Add a print statement to the end of your program
 informing people that you found a bigger dinner table.

• Add one new guest to the beginning of your array.

• Add one new guest to the middle of your array. 

• Use append() to add one new guest to the end of your list. 

• Print a new set of invitation messages, one for each person in your list.
 */
let list = ["Person One", "Person Two", "Person Three","Person Four"];
let absent=list.pop();
for(let i=0;i<list.length;i++){
    console.log(`Hello dear ${list[i]}, I have the honour to invite you for dinner organized at my home. \nThanks\nRegards\n`);

}
console.log("It informed that Mr " + absent+" wont be able to attend." );
list.push("Person Five");

console.log("\nHere is the modified list of guests.\n" );
for(let i=0;i<list.length;i++){
    console.log(`Mr. ${list[i]} will attend the event`);
}
console.log("\nHere are the modified invitations.\n" );
for(let i=0;i<list.length;i++){
    console.log(`Hello dear ${list[i]}, I have the honour to invite you for dinner organized at my home. \nThanks\nRegards\n`);
}
console.log("\nHere we've found a bigger dinner table, now we have room for tree more guests.\n" );
list.unshift("Person Six");
list.splice(4,0,"Person Four");
list.push("Person Seven");

console.log("\nHere is the modified list of guests.\n" );
for(let i=0;i<list.length;i++){
    console.log(`Mr. ${list[i]} will attend the event`);
}
console.log("\nHere are the modified invitations.\n" );
for(let i=0;i<list.length;i++){
    console.log(`Hello dear ${list[i]}, I have the honour to invite you for dinner organized at my home. \nThanks\nRegards\n`);
}