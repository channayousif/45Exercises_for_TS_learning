/**
 * * Date: 24-03-2024
 * @author: Channayousif
 * @description: List of my friends with messages
 * @exercise:17
 *  
 • Shrinking Guest List: You just found out that your new dinner table  won’t arrive in time for the dinner, 
 and you have space for only two guests.
• Start with your program from Exercise 16. 
Add a new line that prints a message saying that you can invite only
 two people for dinner.

• Remove guests from your list one at a time until only two names remain in your list.
 Each time you pop a name from your list, print a message to that person letting them 
 know you’re sorry you can’t invite them to dinner.

• Print a message to each of the two people still on your list, letting them know they’re still invited.

• Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have
 an empty list at the end of your program.
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
console.log("\n17. you can invite only two people for dinner..\n" );
let l1=list.length;
for(let i=0;i+2<l1;i++){
    
    console.log(`${list.length} Hello dear ${list.pop()}, It is regretted to inform you that we can't invite you as we could not arrange bigger table. \nThanks\nRegards\n`);
}
console.log("\n17. Here are the modified invitations.\n" );
for(let i=0;i<list.length;i++){
    console.log(`Mr. ${list[i]} will attend the event`);
}
list.pop();
list.pop();
console.log("New list.length");
console.log(list.length);