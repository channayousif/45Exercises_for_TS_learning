/**
 * @date: 11-04-2024
 * @author: Channayousif
 * @exercise:26
 * @description:
 *  Alien Colors #2: Choose a color for an alien as you did in Exercise 25, and
write an if-else chain.

• If the alien’s color is green, print a statement that the player just earned 5 points
 for shooting the alien.

• If the alien’s color isn’t green, print a statement that the player just earned 10 points.

• Write one version of this program that runs the if block and another that runs the else block.

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
else {
    console.log(alien.color, "you earned 10 points for shooting it");
}
