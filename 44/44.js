/**
 * @date: 12-04-2024
 * @author: Channayousif
 * @exercise:44
 * @description:
 * 44. Sandwiches: Write a function that accepts a array of items a person wants
on a sandwich.
The function should have one parameter that collects as many
items as the function call provides, and it should print a summary of the sandwich
that is being ordered. Call the function three times, using a different number
of arguments each time.


 *
 *
 *
 *
 * */
//
//     "Onion", "chicken", "mayonaise",
//     "kabab","lettuce","cucumber","Ketchup",
//     "chichen spread"
/**
 * @param sandwiches
 * Write a function that accepts a array of items a
 * person wants on a sandwich. one parameter that collects as many
 * items as the function call provides,
 */
function sandwiches() {
    var items_in_sw = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items_in_sw[_i] = arguments[_i];
    }
    console.log("Your ordered sandwich has: " + items_in_sw.toString(), "\n------------------------------------------------");
}
sandwiches("Onion", "chicken", "mayonaise");
sandwiches("kabab", "lettuce", "cucumber", "Ketchup");
sandwiches("chichen spread");
