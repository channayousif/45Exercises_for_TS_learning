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
function describe_city(city, country) {
    if (city === void 0) { city = "City"; }
    if (country === void 0) { country = "Pakistan"; }
    console.log("".concat(city, ",  \"").concat(country, "\" "));
}
describe_city('Karachi');
describe_city('Lahore');
describe_city('Bejing', "China");
describe_city("London", "Britain");
