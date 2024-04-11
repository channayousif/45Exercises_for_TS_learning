/**
 * @date: 12-04-2024
 * @author: Channayousif
 * @exercise:35
 * @description:
 * 35. Animals: Think of at least three different animals that have a common characteristic.
Store the names of these animals in a list, and then use a for loop to
print out the name of each animal.
• Modify your program to print a statement about each animal, such as
A dog would make a great pet.
• Add a line at the end of your program stating what these animals have in
common. You could print a sentence such as Any of these animals would
make a great pet!

 *

 */
var animals = ['cats', 'dogs', 'rabbits', 'donkeys', 'cows', 'fishes', 'sheeps', 'horses', 'goats'];
for (var i = 0; i < animals.length; i++) {
    console.log("".concat(animals[i]));
}
for (var i = 0; i < animals.length; i++) {
    console.log("".concat(animals[i], " would make a great pet!"));
}
console.log("\nAll of these animals are domestic, Any of these animals would\n make a great pet!");
