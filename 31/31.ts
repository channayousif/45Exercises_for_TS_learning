/**
 * @date: 11-04-2024
 * @author: Channayousif
 * @exercise:31
 * @description: 
 * 31. No Users: Add an if test to Exercise 28 to make sure the list of users is not empty.

• If the list is empty, print the message We need to find some users!

• Remove all of the usernames from your array, and make sure the correct message is printed.
 * 
 */
const usernames = [
  "Admin",
  "Apricot",
  "Banana",
  "Blackberry",
  "Blueberry",
  "Currants",
  "Dates",
  "Figs",
  "Gooseberry",
];
checkarray();
messages();
let temp: string[] = [];
let j=0;
for (let i = 0; i < usernames.length; ) {

  temp[j] = usernames.pop();
  j++;
}
console.log(temp);
console.log("-----------------------------");

checkarray();
messages();

function checkarray() {
  if (usernames.length <= 0) {
    console.log("We have to find some users!");
  }
}
function messages() {
  for (let i = 0; i < usernames.length; i++) {
    if (usernames[i] == "Admin") {
      console.log("Hello admin, would you like to see a status report?\n");
    } else {
      console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
    }
  }
}
