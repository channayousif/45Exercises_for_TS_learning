/**
 * @date: 11-04-2024
 * @author: Channayousif
 * @exercise:29
 * @description:
 * 29. Favorite Fruit: Make a array of your favorite fruits, and then write a series of
 * independent if statements that check for certain fruits in your array.

• Make a array of your three favorite fruits and call it favorite_fruits.

• Write five if statements. Each should check whether a certain kind of fruit is in your array.
If the fruit is in your array, the if block should print a statement,
such as You really like bananas!
 */
const fruits1 = ["Apples", "Apricot", "Banana", "Blackberry", "Blueberry", "Currants", "Dates",
    "Figs", "Gooseberry"];
const fruits2 = ["Grapes", "Grapefruit", "Lemon", "Lime", "Loquat", "Lychee", "Mango",
    "Orange", "Papaya", "Peach", "Pear", "Pineapple", "Plum"];
import inquirer from "inquirer";
const favfrt = await inquirer.prompt([{
        message: " Choose your favourite fruit?",
        name: "fruit",
        type: "list",
        choices: fruits1.concat(fruits2)
    }]);
//console.log(favfrt["fruit"])
if (fruits1.includes(favfrt["fruit"])) {
    console.log(favfrt["fruit"], "belongs to group1, You really like", favfrt['fruit']);
}
else {
    console.log(favfrt["fruit"], "belongs to group2, You really like", favfrt['fruit']);
}
// if (0<Age.age&&Age.age<2){
//     console.log("You are a baby")
// }else if(2<=Age.age&&Age.age<4){
//     console.log("You are a Todler")
// }else if(4<=Age.age&&Age.age<13){
//     console.log("You are a kid")
// }else if(13<=Age.age&&Age.age<20){
//     console.log("You are a Teenage")
// }else if(20<=Age.age&&Age.age<65){
//     console.log("You are an Adult")
// }else if(Age.age>=65){
//     console.log("You are an Elder")
// }else {
//     console.log("Your input is invalid!")
//}
