/**
 * @date: 11-04-2024
 * @author: Channayousif
 * @exercise:27
 * @description:
 * 27. Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

• If the alien is green, print a message that the player earned 5 points.

• If the alien is yellow, print a message that the player earned 10 points.

• If the alien is red, print a message that the player earned 15 points.

• Write three versions of this program, making sure each message is printed
for the appropriate color alien.
 */
import inquirer from "inquirer";
const alien = await inquirer.prompt([{
        message: "Alien color?",
        name: "color",
        type: "list",
        choices: ["Red", "Green", "Yellow"]
    }]);
if (alien.color == "Green") {
    console.log(alien.color, "you earned 5 points for shooting it");
}
else if (alien.color == "Yellow") {
    console.log(alien.color, "you earned 10 points for shooting it");
}
else {
    console.log(alien.color, "you earned 15 points for shooting it");
}
