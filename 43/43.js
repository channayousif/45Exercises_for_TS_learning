/**
 * @date: 12-04-2024
 * @author: Channayousif
 * @exercise:43
 * @description:
 *
 * */
// 43. Unchanged Magicians: Start with your work from Exercise 40. Call the
// function make_great() with a copy of the array of magicians’ names. Because the
// original array will be unchanged, return the new array and store it in a separate array.
// Call show_magicians() with each array to show that you have one array of the original
// names and one array with the Great added to each magician’s name.
var __spreadArray = (this && this.__spreadArray) || function (to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
};
var magicians = [
    "Shin Lim",
    "Chris Angel",
    "Jeff McBride",
    "Siegfried",
    "Penn & Teller",
    "Harry Houdini",
    "Derren Brown",
    "David Blaine",
];
function show_magicians(magician) {
    for (var i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
show_magicians(magicians);
console.log("--------------------------------");
function make_great(magician) {
    return magician.map(function (x) { return "".concat(x, " the Great!"); });
}
console.log(make_great(__spreadArray([], magicians, true)));
console.log(magicians);
console.log("---------------------------------");
console.log(make_great(magicians));
console.log(magicians);
console.log("---------------------------------");
show_magicians(magicians);
console.log("---------------------------------");
show_magicians(make_great(magicians));
