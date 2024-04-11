"use strict";
/*
* * Date: 08-04-2024
 * @author: Channayousif
 * @description: Seeing the World
 * @exercise:18
 *
18. Seeing the World: Think of at least five places in the world you’d like to visit.

• Store the locations in a array. Make sure the array is not in alphabetical order.

• Print your array in its original order.

• Print your array in alphabetical order without modifying the actual list.

• Show that your array is still in its original order by printing it.

• Print your array in reverse alphabetical order without changing the order of the original list.

• Show that your array is still in its original order by printing it again.

• Reverse the order of your list. Print the array to show that its
order has changed.

• Reverse the order of your list again. Print the list to show it’s back to its original order.

• Sort your array so it’s stored in alphabetical order. Print the array to show that its
 order has been changed.

• Sort to change your array so it’s stored in reverse alphabetical order. Print the list to
show that its order has changed.
*/
let places1 = ["Makkah", "Madinah", "Turkeye", "Canada", "Australia", "Switzerland"];
for (let i = 0; i < places1.length; i++) { //Printing of array
    console.log(i, places1[i]);
}
console.log("-------------------------------sorted manually");
const places = places1.slice().sort();
for (let i = 0; i < places.length; i++) { //Printing of array
    console.log(i, places[i]);
}
console.log("-------------------------------original");
for (let i = 0; i < places1.length; i++) { //Printing of array
    console.log(i, places1[i]);
}
console.log("-------------------------------sorted with sort()\n");
places1.sort();
for (let i = 0; i < places1.length; i++) { //Printing of array
    console.log(i, places1[i]);
}
