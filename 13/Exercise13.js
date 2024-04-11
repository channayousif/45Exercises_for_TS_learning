"use strict";
/*
Date: 24-03-2024
@author: Channayousif
@description: List of my friends with messages
@exercise:11
Your Own Array: Think of your favorite mode of transportation, such as a motorcycle or a car, and make a list that
stores several examples. Use your list to print a series of statements about these items, such as “I would like to own
a Honda motorcycle.”
*/
let my_own_transport = ["Car", "automatic transmission", "Luxurious", "Latest model", "driver assistance feature"];
let statement = ["I will get ", "Car with transmission system ", "it will have facilities", "Toyota latest model", "with driver help"];
for (let i = 0; i < my_own_transport.length; i++) {
    console.log(statement[i] + my_own_transport[i]);
}
