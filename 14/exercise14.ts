/*
Date: 24-03-2024
@author: Channayousif
@description: List of my friends with messages
@exercise:14 

Guest List: If you could invite anyone, living or deceased, to dinner, who would you invite? 
Make a list that includes at least three people you’d like to invite to dinner. 
Then use your list to print a message to each person, inviting them to dinner.

*/
let list = ["Person One", "Person Two", "Person Three","Person Four"];
for(let i=0;i<list.length;i++){
    console.log(`Hello dear ${list[i]}, I have the honour to invite you for dinner organized at my home. \nThanks\nRegards\n`);

}