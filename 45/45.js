/**
 * @date: 12-04-2024
 * @author: Channayousif
 * @exercise:44
 * @description:
 * 45. Cars: Write a function that stores information about a car in a Object.
The function should always receive a manufacturer and a model name. It
should then accept an arbitrary number of keyword arguments. Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature.
Print the Object that’s returned to make sure all the information was
stored correctly.
 *
 *
 * */
/**Write a function that stores information about a car in a Object. */
function car(manufacturer, model) {
    var more = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        more[_i - 2] = arguments[_i];
    }
    return {
        Manufacturer: manufacturer,
        Model: model,
        More_information: more.toString()
    };
}
/**
 * Call the function
with the required information and two other name-value pairs, such as a
color or an optional feature.
 */
console.log(car("a", "b", "c", "d")); /**Print the Object that’s returned to make sure all the information was
stored correctly. */
console.log(car("Honda", "Civic", "White", "ABS Brakes"));
