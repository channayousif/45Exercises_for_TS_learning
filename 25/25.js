/**
 *  @date: 11-04-2024
 * @author: Channayousif
 * @exercise:25
 * @description:
 * 25. Alien Colors #1: Imagine an alien was just shot down in a game. Create a
variable called alien_color and assign it a value of 'green', 'yellow', or 'red'.

• Write an if statement to test whether the alien’s color is green. If it is, print
a message that the player just earned 5 points.

• Write one version of this program that passes the if test and another that
fails. (The version that fails will have no output.)

 */
import inquirer from "inquirer";
const alien = await inquirer.prompt([{
        message: "Alien color?",
        name: "color",
        type: "list",
        choices: ["Red", "Green", "Yellow"]
    }]);
if (alien.color == "Green") {
    console.log(alien.color, "you earned 5 points");
}
else {
    console.log(alien.color, "you earned 0 points");
}
