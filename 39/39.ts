/**
 * @date: 12-04-2024
 * @author: Channayousif
 * @exercise:39
 * @description: 
 * 39. City Names: Write a function called city_country() that takes in the name
of a city and its country. The function should return a string formatted like this:

"Lahore, Pakistan"

Call your function with at least three city-country pairs, and print the value
that’s returned.

 */

function describe_city(city:string = "City",country:string ="Pakistan"){
    console.log(`${city},  "${country}" `)
}
describe_city('Karachi');
describe_city('Lahore');
describe_city('Bejing',"China");
describe_city("London","Britain");