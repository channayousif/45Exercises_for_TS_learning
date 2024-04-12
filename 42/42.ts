
/**
 * @date: 12-04-2024
 * @author: Channayousif
 * @exercise:42
 * @description: 
 *42. Great Magicians: Start with a copy of your program from Exercise 39.
Write a function called make_great() that modifies the array of magicians by adding
the phrase the Great to each magician’s name. Call show_magicians() to
see that the list has actually been modified.

 */
const magicians =[
    'Shin Lim','Chris Angel', 'Jeff McBride', 'Siegfried', 'Penn & Teller', 
    'Harry Houdini', 'Derren Brown', 'David Blaine'
];

function show_magicians(magician:string[]){
   for(let i=0;i<magician.length;i++){
    console.log(magician[i]);
   }   
}
show_magicians(magicians);
console.log("--------------------------------");
function make_great(magician:string[]) :string[] {
    const temp =[];
    for(let i=0;i<magician.length;i++){
        temp[i]=`${magician[i]} the Great!`
    }
    return temp;
}
console.log(make_great(magicians));