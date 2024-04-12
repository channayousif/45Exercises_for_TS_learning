/**
 * @date: 12-04-2024
 * @author: Channayousif
 * @exercise:41
 * @description:
 *41. Magicians: Make a array of magician’s names. Pass the array to a function
called show_magicians(), which prints the name of each magician in the array.

 */
var magicians = [
    'Shin Lim', 'Chris Angel', 'Jeff McBride', 'Siegfried', 'Penn & Teller',
    'Harry Houdini', 'Derren Brown', 'David Blaine'
];
function show_magicians(magician) {
    for (var i = 0; i < magician.length; i++) {
        console.log(magician[i]);
    }
}
show_magicians(magicians);
