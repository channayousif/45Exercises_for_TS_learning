/**
 * @date: 08-04-2024
 * @author: Channayousif
 * @description: Seeing the World
 * @exercise:19
 * 19. Dinner Guests: Working with one of the programs from Exercises 14 through 18, 
 * print a message indicating the number of people you are inviting to dinner.
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
console.log("Number of people invited to dinner", list.length);
console.log(list.length);

list.pop();
list.pop();
console.log("After using pop() twice, Number of people remaining invited to dinner", list.length);
console.log(list.length);